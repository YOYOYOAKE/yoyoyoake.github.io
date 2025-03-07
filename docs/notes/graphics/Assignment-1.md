---
title: Assignment 1 光栅化
createTime: 2024/12/12 09:55:01
permalink: /graphics/AS1/
---

@[pdf](https://oss.yoake.cc/yoyopics/assets/pdf/as1.pdf)

阅读作业说明可知，需要完成以下任务：

:::: steps

1. 构建在三维空间中绕$z$轴旋转弧度$\alpha$的[旋转矩阵](/graphics/LC03/#_5-2-旋转)

  $$
    R_z = 
    \begin{pmatrix}
    \cos \alpha & -\sin \alpha & 0 & 0 \\
    \sin \alpha & \cos \alpha & 0 & 0 \\
    0 & 0 & 1 & 0 \\
    0 & 0 & 0 & 1
    \end{pmatrix}
  $$

  按照作业说明，在`get_model_matrix`函数中填写代码：

  ```c++
  Eigen::Matrix4f get_model_matrix(float rotation_angle)
  {
      float a = rotation_angle * MY_PI / 180.0;  
      // 绕Z轴旋转
      Eigen::Matrix4f Matrix_Z_rotate;
      Matrix_Z_rotate << cos(a), -sin(a), 0, 0,
          sin(a), cos(a), 0, 0,
          0, 0, 1, 0,
          0, 0, 0, 1;

      return Matrix_Z_rotate;
  }
  ```

2. 以及构建在三维空间中的[透视投影矩阵](/graphics/LC04/#_2-2-1-透视投影矩阵)：

  $$
    M_{persp} = M_{ortho} M_{persp \rightarrow ortho}= \\
    \begin{pmatrix}
        \frac{2}{r-l} & 0 & 0 & 0 \\
        0 & \frac{2}{t-b} & 0 & 0 \\
        0 & 0 & \frac{2}{n-f} & 0 \\
        0 & 0 & 0 & 1
    \end{pmatrix}
    \begin{pmatrix}
        1 & 0 & 0 & -\frac{r+l}{2} \\
        0 & 1 & 0 & -\frac{t+b}{2} \\
        0 & 0 & 1 & -\frac{n+f}{2} \\
        0 & 0 & 0 & 1 
    \end{pmatrix}
    \begin{pmatrix}
        n & 0 & 0 & 0 \\
        0 & n & 0 & 0 \\
        0 & 0 & n+f & -nf \\
        0 & 0 & 1 & 0
    \end{pmatrix}
  $$

  其中参数$t,b,r,l$可以由[视场角和宽高比](/graphics/LC04/#_2-2-2-视场角与宽高比)求得

  $$
    \begin{align*}
    t &= n \tan(2 \times fov) \\
    b &= -t \\
    r &= t \times aspect \\
    l &=-r
    \end{align*}
  $$

  按照作业说明，在`get_projection_matrix`函数中填写代码：

  ```c++
  Eigen::Matrix4f get_projection_matrix(float eye_fov, float aspect_ratio,
                                      float zNear, float zFar)
  {
    // 1. 透视投影转化为正交投影
    float n = zNear;
    float f = zFar;

    Eigen::Matrix4f Matrix_persp2ortho;
    Matrix_persp2ortho << n, 0, 0, 0,
        0, n, 0, 0,
        0, 0, n + f, -(n * f),
        0, 0, 1, 0;

    // 2. 视锥角和宽高比转化为计算参数
    float fov = (eye_fov / 2.0f) * MY_PI / 180.0f;
    float t = std::abs(n) * tan(fov);
    float b = -t;
    float r = aspect_ratio * t;
    float l = -r;

    // 2. 正交投影转化到正则立方体
    Eigen::Matrix4f trans, scale;
    trans << 1, 0, 0, -(r + l) / 2,
        0, 1, 0, -(t + b) / 2,
        0, 0, 1, -(n + f) / 2,
        0, 0, 0, 1;

    scale << 2 / (r - l), 0, 0, 0,
        0, 2 / (t - b), 0, 0,
        0, 0, 2 / (n - f), 0,
        0, 0, 0, 1;

    // 3. 计算透视投影矩阵
    return scale * trans * Matrix_persp2ortho;
  }
  ```

3. 编译运行

  ::: center
  ![as1-result](https://oss.yoake.cc/yoyopics/graphics/assignments/as1-result.webp)
  :::

  此时你会发现这个三角形和理论中不同，它的方向恰好相反（按照我们的推导，它应该指向上方）。

  这是因为我们在推导时使用的是右手坐标系，而OpenCV使用的是左手系。当你固定任意两个轴的方向时，左手系和右手系的第三个轴的方向恰好相反，二者互为镜像
  
  你可以试着用左手系重新推导一下这个三角形，会发现屏幕上的这个倒置三角形是正确的。

4. 修正坐标系

  那么该如何修改代码，使得三角形正过来呢？

  我们在推导过程中使用的坐标系是笛卡尔坐标系，它以屏幕右下角为原点，向右为$x$轴，向上为$y$轴，穿过屏幕向外为$z$轴。

  而`OpenCV`屏幕坐标系以屏幕右上角为原点，向右为$x$轴，向下为$y$轴，穿过屏幕向外为$z$轴。

  因此我们只需要在投影变换时，逆转$y$轴方向即可。

  ```c++
  // 3. 逆转y轴方向
  Eigen::Matrix4f reverse_y;
  reverse_y << 1, 0, 0, 0,
      0, -1, 0, 0,
      0, 0, 1, 0,
      0, 0, 0, 1;

  // 4. 计算透视投影矩阵
  return reverse_y * scale * trans * Matrix_persp2ortho;
  ```

  运行得到

  ::: center
  ![as1-result-2](https://oss.yoake.cc/yoyopics/graphics/assignments/as1-result-2.webp)
  :::

::::