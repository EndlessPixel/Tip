# Tip
极简右侧消息提示组件

> 从废弃项目里翻出来的小提示框组件，顺手整理了下

## 特点
- 纯原生 JS + CSS，无依赖
- 右侧滑入滑出动画
- 支持成功、错误两种状态
- 自动关闭 + 手动关闭
- 多提示自动向下排列

## CDN 引入
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/EndlessPixel/Tip@main/1.0/tip.css">
<script src="https://cdn.jsdelivr.net/gh/EndlessPixel/Tip@main/1.0/tip.js"></script>
```

## 使用示例
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/EndlessPixel/Tip@main/1.0/tip.css">
<button onclick="showPrompt('保存成功', true)">成功提示</button>
<button onclick="showPrompt('保存失败', false)">错误提示</button>
<script src="https://cdn.jsdelivr.net/gh/EndlessPixel/Tip@main/1.0/tip.js"></script>
```

## 调用
```js
showPrompt('提示内容', true)  // 成功
showPrompt('提示内容', false) // 错误
```