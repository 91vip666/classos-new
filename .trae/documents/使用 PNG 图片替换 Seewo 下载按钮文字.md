## 1. 准备图片资源
请将您提供的 PNG 图片保存到项目目录：`assets/images/icons/seewo_btn.png`。

## 2. 修改 Hero 组件
在 [Hero.tsx](file:///f:/classos-new-main/components/Hero.tsx) 中进行以下更改：
- **导入图片**：添加 `import seewoBtnImage from "@/assets/images/icons/seewo_btn.png";`。
- **更新按钮内容**：
    - 找到“下载 Seewo”的 `TransparentButton`。
    - 移除原本的 `<Apple />` 图标和 `<span>下载 Seewo</span>` 文字。
    - 插入 `<img src={seewoBtnImage.src} alt="下载 Seewo" className="h-8 w-auto" />`。
- **调整按钮样式**：
    - 移除之前设置的固定宽度 `w-[200px]`，改为 `w-fit`。
    - 确保按钮内边距和对齐方式适合纯图片显示。

## 3. 验证效果
确认按钮点击区域正常，且图片在不同分辨率下显示比例正确。