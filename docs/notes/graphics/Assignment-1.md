---
title: Assignment 1 旋转与投影
createTime: 2024/12/12 09:55:01
permalink: /graphics/AS1/
---
> 作业介绍：
>
> 填写一个旋转矩阵和透视投影矩阵，使得三个空间点$v_0=(2,0,-2), v_1=(0,2,-2), v_2(-2,0,-2)$的坐标变换为屏幕坐标，并在屏幕上绘制出对应的三角形。
>
> 绘制三角形的函数 `draw_triangle`已经给出，只需要构建变换矩阵即可。
>
> 以下是你需要在 `main.cpp`中修改的函数：
>
> - `get_model_matrix(float rotation_angle)`
>
>   逐个元素地构建模型变换矩阵并返回该矩阵。在此函数中，你只需要实现三维中绕$z$轴旋转的变换矩阵，而不用处理平移与缩放。
> - `get_projection_matrix(float eye_fov, float aspect_ratio, float zNear, float zFar)`
>
>   使用给定的参数逐个元素地构建透视投影矩阵并返回该矩阵。

## 1 数学思路

写出在三维空间中绕$z$轴旋转弧度$\alpha$的变换矩阵

$$
R_z = 
\begin{pmatrix}
  \cos \alpha & -\sin \alpha & 0 & 0 \\
  \sin \alpha & \cos \alpha & 0 & 0 \\
  0 & 0 & 1 & 0 \\
  0 & 0 & 0 & 1
\end{pmatrix}
$$

写出在三维空间中的透视投影矩阵

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
	0 & 1 & 1 & -\frac{n+f}{2} \\
	0 & 0 & 0 & 1 
\end{pmatrix}
\begin{pmatrix}
	n & 0 & 0 & 0 \\
	0 & n & 0 & 0 \\
	0 & 0 & n+f & -nf \\
	0 & 0 & 1 & 0
\end{pmatrix}
$$

其中参数$t,b,r,l$可以由视场角和长宽比求得

$$
\begin{align*}
t &= n \tan(2 \times fov) \\
b &= -t \\
r &= t \times aspect \\
l &=-r
\end{align*}
$$

## 2 程序设计

::: code-tabs
@tab 旋转矩阵
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

@tab 投影变换矩阵
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
        0, 0, n + f, -n * f,
        0, 0, 1, 0;

    // 2. 视锥角和宽高比转化为计算参数
    float fov = (eye_fov / 2.0) * MY_PI / 180.0;
    float t = n * tan(fov * 2);
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

    return scale * trans * Matrix_persp2ortho;
}
```
:::