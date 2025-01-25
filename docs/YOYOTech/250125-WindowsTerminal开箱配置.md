---
title: 我的终端不可能这么可爱： Windows Terminal 配置与美化
createTime: 2025/01/25 11:33:10
permalink: /article/d9nhlckh/
tags:
  - PowerShell
---

> Windows Terminal 是 Microsoft 推出的一个开源终端，提供美观、现代的命令行体验。

> Windows Terminal 在 Windows 11 上默认安装，在 Windows 10 上可通过 Microsoft Store 安装。

<!-- more -->

## 1 Windows Terminal 与 PowerShell

在开始之前，有一些关键的概念需要辨析，即 Windows Terminal 和 PowerShell 的区别。

许多人将其混为一谈，实际上这二者完全是两个不同的事物。

PowerShell 仅仅是一个命令行工具，并不包含任何的 GUI。你可以使用古老的命令提示符启动 PowerShell，也可以使用最新的 Windows Terminal ，或者使用 Termius 等其他的第三方终端。

而 Windows Terminal 只是一个 GUI，并不包含任何的命令执行程序，它本质上和命令提示符并无不同。你可以使用 Windows Terminal 执行PowerShell，或者是 CMD，或者是 WSL。

因此 Windows Terminal 和 PowerShell 的关系，类似于传菜生和厨师的关系————前者负责用户交互，后者负责命令执行。


## 2 Windows Terminal 配置与美化

### 2.1 配色方案

Windows Terminal 支持 JSON 格式的配色方案。打开`设置`选项卡，点击左下角的`打开JSON文件`即可打开并编辑配置。

找到`schemes`配置项，这是一个对象数组，每个数组元素对应着一种自定义配色方案。

可以在[Windows Terminal Themes](https://windowsterminalthemes.dev/)获取其他人分享的配色方案。

![1737776903286](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/articles/250125-WindowsTerminal开箱配置/1737776903286.png)

个人喜欢`Solarized Dark Higher Contrast`这个配色方案。你也可以选则喜欢的配色方案，并点击蓝色的`Get theme`按钮，配置将复制到你的剪贴板上。

你将得到类似于下方JSON的字符串，将其作为一个数组元素添加到配置文件的`schemes`配置项中并保存。

```JSON
{
  "name": "Solarized Dark Higher Contrast",
  "black": "#002831",
  "red": "#d11c24",
  "green": "#6cbe6c",
  "yellow": "#a57706",
  "blue": "#2176c7",
  "purple": "#c61c6f",
  "cyan": "#259286",
  "white": "#eae3cb",
  "brightBlack": "#006488",
  "brightRed": "#f5163b",
  "brightGreen": "#51ef84",
  "brightYellow": "#b27e28",
  "brightBlue": "#178ec8",
  "brightPurple": "#e24d8e",
  "brightCyan": "#00b39e",
  "brightWhite": "#fcf4dc",
  "background": "#001e27",
  "foreground": "#9cc2c3",
  "selectionBackground": "#003748",
  "cursorColor": "#f34b00"
}
```

然后打开`设置`选项卡，找到左侧边栏的`配置文件`-`默认值`-`外观`-`配色方案`，选择你刚刚添加的配色方案，保存更改即可。

如果你想为不同的程序设定不同的配色方案，可以在`配置文件`下的其他程序分别设置配色方案。

### 2.2 字体

Windows Terminal 支持自定义字体，你可以在`配置文件`-`默认值`-`外观`-`字体`中选择你喜欢的字体。

值得一提的是，如果你喜欢的字体的字符支持不全，可以使用逗号配置多种字体。越靠前的优先级越高。

例如，我喜欢的`JetBrains Mono`字体不支持中文，那我就可以在字体栏中输入`JetBrains Mono, YouYuan`，使得未被`JetBrains Mono`支持的字体以`幼圆`显示。

### 2.3 其他我偏爱的美化项

在`配置文件`-`默认值`-`外观`-`透明度`中，将`背景不透明度`调整为85%，并打开`启用亚克力材料`。

在`配置文件`-`默认值`-`外观`-`窗口`中，将`边框间距`调整为50。

最终的终端美化结果如下图所示。

![1737780541775](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/articles/250125-WindowsTerminal开箱配置/1737780541775.png)

### 2.4 其他有用的设置

#### 2.4.1 启动 Windows Terminal 时默认启动 PowerShell 而不是 Windows PowerShell

打开`设置`选项卡，选择左侧边栏的`启动`菜单项，在`默认配置文件`配置项中选择`PowerShell`。

#### 2.4.2 配置 Windows 默认终端为 Windows Terminal 而不是命令提示符

打开`设置`选项卡，选择左侧边栏的`启动`菜单项，在`默认终端应用程序`配置项中选择`Windows 终端`。

#### 2.4.3 选择文本时自动复制

打开`设置`选项卡，选择左侧边栏的`交互`菜单项，打开`自动将所选内容复制到剪贴板`配置项。

## 3 PowerShell 美化

先来看看美化后的结果。美化后的 PowerShell 不仅变得多彩，还有了 Git 仓库分支的显示、命令提示等小功能。

这些效果依赖于一个小工具`Oh-My-Posh`。

![1737785241053](https://cdn.jsdelivr.net/gh/YOYOYOAKE/YOYOPics/articles/250125-WindowsTerminal开箱配置/1737785241053.png)

### 3.1 安装 PowerShell 和 Oh-My-Posh

其实 Windows 中自带了一个 Windows PowerShell，但是是 PowerShell 5。

因此我们需要前往 Microsoft Store 下载最新的 PowerShell 7 和 Oh-My-Posh。

### 3.2 激活并配置 Oh-My-Posh

首先编辑 PowerShell 的配置文件。

```powershell
notepad $PROFILE
```

在弹出的记事本窗口中添加初始化命令。

```text
oh-my-posh init pwsh | Invoke-Expression
```

然后查看 Oh-My-Posh 提供的所有可用的主题。

```powershell
Get-PoshThemes
```

运行该命令后，会显示很多的主题，每个主题的名称会显示在主题的上方。

选择自己喜欢的主题后，重新打开配置文件，将初始化命令改为：

```text
oh-my-posh init pwsh --config "$env:POSH_THEMES_PATH\<你的主题名字>.omp.json" | Invoke-Expression
```

例如我的主题名字为`pure`，那么：

```text
oh-my-posh init pwsh  --config "$env:POSH_THEMES_PATH/pure.omp.json" | Invoke-Expression
```

保存文件，然后重启终端，即可应用主题。