---
title: Lecture 04 模型变换、视图变换、投影变换
createTime: 2024/11/20 19:58:40
permalink: /graphics/LC04/
---
> 以拍照为比喻的话，
> **寻找拍照场地**就是**模型变换**，
> **寻找拍照机位**就是**视图变换**，
> **将三维空间拍摄成照片**就是**投影变换.**

## 1 模型视图变换

### 1.1 相机位置

相机位置可以由三个属性定义：

- 位置 $\boldsymbol{e}$
- 视线方向 $\hat{ \boldsymbol{g}} $
- 向上方向 $\hat{ \boldsymbol{t} }$

![LC04-01](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/01.png)

一个很明显的现象是：当相机和物体一起运动（或者说二者没有相对运动）时，物体的投影是不变的。因此在图形学中，总是让相机保持不动，而被投影的物体围绕相机运动.

通常令相机位于原点，视线方向为$z$轴负方向，向上方向为$y$轴正方向：

$$
\boldsymbol{e} = (0,0,0)^T
$$

$$
\hat{ \boldsymbol{g}} = (0,0,-1)^T
$$

$$
\hat{ \boldsymbol{t}} = (0,1,0)^T
$$

### 1.2 模型视图变换

上面提到模型和视图通常都是进行相同的变换，因此模型变换和视图变换有时也合称为**模型视图变换**.

如下图所示，将一个任意位置、任意朝向的相机移动到标准位置，需要经过以下步骤：

1. 将相机移动到原点；
   $$
   T_{view} = \begin{pmatrix}
   1 & 0 & 0 & -x_{\boldsymbol{e}} \\
   0 & 1 & 0 & -y_{\boldsymbol{e}} \\
   0 & 1 & 1 & -z_{\boldsymbol{e}} \\
   0 & 0 & 0 & 1 
   \end{pmatrix}
   $$
2. 将$\hat{ \boldsymbol{g}}$旋转到$-z$轴；
3. 将$\hat{ \boldsymbol{t}}$旋转到$y$轴；
4. 将$\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}$旋转到$x$轴.

![LC04-02](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/02.png)

然而将任意向量旋转至坐标轴上并不容易，因此考虑其逆过程，即将坐标轴旋转至指定方向：

2. 将$x$轴旋转到$\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}$；
3. 将$y$轴旋转到$\hat{ \boldsymbol{t}}$；
4. 将$-z$轴旋转到$\hat{ \boldsymbol{g}}$.

因此有

$$
R_{view}^{-1} = \begin{pmatrix}
	x_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & x_t & x_{-g} & 0 \\
	y_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & y_t & y_{-g} & 0 \\
	z_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & z_t & z_{-g} & 0 \\
  0 & 0 & 0 & 1
\end{pmatrix}
$$

容易验证$R$是一个正交矩阵，于是：

$$
R_{view} = (R_{view}^{-1})^T = \begin{pmatrix}
	x_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & y_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & z_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & 0 \\
	x_t & y_t & z_t & 0 \\
	x_{-g} & y_{-g} & z_{-g} & 0 \\
  0 & 0 & 0 & 1
\end{pmatrix}
$$

因此视图变换矩阵为：

$$
M_{view} = R_{view} T_{view} =
\begin{pmatrix}
	x_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & y_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & z_{\hat{ \boldsymbol{g}} \times \hat{ \boldsymbol{t}}} & 0 \\
	x_t & y_t & z_t & 0 \\
	x_{-g} & y_{-g} & z_{-g} & 0 \\
  0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
   1 & 0 & 0 & -x_{\boldsymbol{e}} \\
   0 & 1 & 0 & -y_{\boldsymbol{e}} \\
   0 & 1 & 1 & -z_{\boldsymbol{e}} \\
   0 & 0 & 0 & 1 
   \end{pmatrix}
$$

## 2 投影变换

投影变换有两种：正交投影和透视投影.

正交投影中所有的投影线相互平行，透视投影的投影线交于一点（焦点）.

正交投影可以视为焦点在无限远处的透视投影.

![LC04-03](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/03.png)

### 2.1 正交投影

正交投影可以由下述操作得到：

1. 将相机和物体变换至标准位置；
2. 令$z=0$；
3. 通过平移和缩放变换将第2步的结果置于$[-1,1]^2$中.

![LC04-04](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/04.png)

通常使用下面的方法，将一个任意立方体$[l,r] \times [b,t] \times [f,n]$变换到标准立方体$[-1,1]^3$：

$$
M_{ortho} =
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
$$

![LC04-05](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/05.png)

### 2.2 透视投影

透视投影的模型可以看做是一个四棱台. 那么只要将这个四棱台变换为一个立方体，就可以按照正交投影的方法再将其变换到标准立方体.

![LC04-06](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/06.png)

#### 2.2.1 透视投影矩阵

沿着$x$轴方向从正向负观察模型，可以看到下图所示的内容.

![LC04-07](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/07.png)

由相似三角形原理不难得到：

$$
y' = \frac{n}{z} y
$$

$$
x' = \frac{n}{z} x
$$

写成矩阵形式为：

$$
\begin{pmatrix}
	n & 0 & 0 & 0 \\
	0 & n & 0 & 0 \\
	? & ? & ? & ? \\
	0 & 0 & 1 & 0
\end{pmatrix}
\begin{pmatrix}
	x \\ y \\ ? \\z
\end{pmatrix}
$$

矩阵的第三行仍然未知，下面求解矩阵第三行的内容。

观察模型发现，近平面和远平面上的点的$z$坐标都不会发生变化，即：

$$
\begin{pmatrix} x & y & n & 1 \end{pmatrix}^T = \begin{pmatrix} nx & ny & n^2 & n \end{pmatrix}^T
$$

$$
\begin{pmatrix} x & y & f & 1 \end{pmatrix}^T = \begin{pmatrix} fx & fy & f^2 & f \end{pmatrix}^T
$$

那将第三行单独拿出来计算，于是有：

$$
\begin{pmatrix}
	0 & 0 & A & B
\end{pmatrix} 
\begin{pmatrix}
	x \\ y \\n \\1
\end{pmatrix} = n^2
$$

$$
\begin{pmatrix}
	0 & 0 & A & B
\end{pmatrix} 
\begin{pmatrix}
	fx \\ fy \\ f \\ 1
\end{pmatrix} = f^2
$$

于是有方程组：

$$
An+B=n^2 \\
Af+B=f^2
$$

求解即可得到：

$$
A=n+f
$$

$$
B=-nf
$$

因此将四棱台变换为立方体的矩阵为：

$$
M_{persp \rightarrow ortho} = \begin{pmatrix}
	n & 0 & 0 & 0 \\
	0 & n & 0 & 0 \\
	0 & 0 & n+f & -nf \\
	0 & 0 & 1 & 0
\end{pmatrix}
$$

透视投影矩阵为：

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

#### 2.2.2 视场角与宽高比

从相机位置看向近平面，可以得到视场角和宽高比.

视场角是相机与近平面上下两条边的中心的连线形成的角，它可以用来定义相机的广角或者长焦.

![LC04-08](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/08.png)

借助视场角和长宽比的概念，可以从中得到模型的$l,r,b,t$四个参数：

$$
\tan \frac{fovY}{2} = \frac{t}{|n|}
$$

$$
aspect = \frac{r}{t}
$$

![LC04-09](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc04/09.png)
