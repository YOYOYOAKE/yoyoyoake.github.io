---
title: Assignment 0
createTime: 2024/11/14 20:18:43
permalink: /graphics/AS0/
---
> 作业描述：
>
> 给定一个点$P=(2,1)$，将该点绕原点先逆时针旋转$45°$，再平移$(1,2)$，计算出变换后点的坐标（要求使用齐次坐标进行计算）.

## 1 数学思路

首先写出点$P$的齐次坐标$(2,1,1)$.

然后写出旋转矩阵

$$
R = \begin{pmatrix}
	\cos 45° & -\sin 45° & 0 \\
	\sin 45° & \cos 45° & 0 \\
	0 & 0 & 1
\end{pmatrix}
$$

然后写出平移矩阵

$$
T = 
\begin{pmatrix}
	1 & 0 & 1 \\
	0 & 1 & 2 \\
	0 & 0 & 1
\end{pmatrix}
$$

于是变换后的坐标为

$$
P' = T \cdot R \cdot P
$$

## 2 程序设计

```c++
int main()
{
    Eigen::Vector3f p(2, 1, 1), pNew;

    Eigen::Matrix3f r, t;

    // 定义旋转角
    float rad = 45.0 / 180.0 * M_PI;

    r << cos(rad), -sin(rad), 0,
        sin(rad), cos(rad), 0,
        0, 0, 1;

    t << 1, 0, 1,
        0, 1, 2,
        0, 0, 1;

    pNew = t * r * p;

    std::cout << "The new homogenous coordinate is " << std::endl;
    std::cout << pNew << std::endl;
  
    return 0;
}
```

编译运行后输出：

```
The new homogenous coordinate is 
1.70711
4.12132
      1
```
