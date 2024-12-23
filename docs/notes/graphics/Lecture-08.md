---
title: Lecture 08 着色-2 着色频率、图形管线、纹理映射
createTime: 2024/12/23 15:52:58
permalink: /graphics/08/
---

## 1 着色频率

下图中展示了同一模型采用不同的着色频率的结果. 从左至右分别是**Flat着色**、**Gouraud着色**、**Phong着色**。

![1734943879201](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734943879201.png)

- Flat着色
  
  Flat着色是对每一个三角形面进行着色，每一个三角形面中着色的结果相同. 自然，这种方式不适合对光滑曲面着色.

- Gouraud着色
  
  这种方式是在模型的每一个顶点处着色，三角形内部的值使用插值法求得.


- Phong着色
  
  Phong着色是在模型上插值出每一个点的法线方向，然后对其进行着色.

在实际应用中，三种着色频率各有优劣，应该根据实际情况选择最佳着色频率.

![1734945190392](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945190392.png)

### 1.1 逐顶点插值法

Gouraud着色中使用了逐顶点插值求顶点处的法线.

![1734945489789](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945489789.png)

不难得到顶点处的法线为

$$
\boldsymbol{N}_V = \frac{\sum \boldsymbol{N}_i}{||\sum \boldsymbol{N}_i||}
$$

### 1.2 逐像素插值法

Phong着色中使用了逐像素插值法求各个像素处的法线.

## 2 渲染管线

渲染管线指的是从模型到图像的过程.

![1734945894562](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734945894562.png)

现代GPU就是渲染管线全流程的硬件实现.

## 3 纹理映射

和一个单纯的石膏球不同，现实中的物体往往具有多样的漫反射性质. 例如一本书，书的封面往往更加光滑，而内部的纸就会粗糙一些.

三维模型的表面是二维的，我们把这个二维表面展开，就得到了一张平面图片. 三维模型表面上的每个点都能在这个二维平面上找到对应的点.

我们将这个二维平面称为**纹理**. 三维模型表面上的点对应到二维称为**纹理映射**.

通常我们不去关心纹理映射（因为太难了！）.

纹理可以在模型上使用不止一次，因此我们设计纹理时通常会考虑其重复性. 下图的这些纹理可以重复多次而不留下拼接痕迹.

![1734947999747](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/notes/graphics/lc08/1734947999747.png)

