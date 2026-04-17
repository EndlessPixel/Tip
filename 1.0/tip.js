let currentTop = 70;
const promptBoxes = [];
const GAP = 70; // 提示框间距
const AUTO_CLOSE_TIME = 3000; // 自动关闭时间

/**
 * 显示右侧消息提示
 * @param {string} message - 提示内容
 * @param {boolean} isSuccess - true=成功，false=错误
 */
function showPrompt(message, isSuccess) {
  // 创建提示框元素
  const promptBox = document.createElement('div');
  promptBox.className = `prompt-box ${isSuccess ? '' : 'error'}`;
  promptBox.style.top = `${currentTop}px`;
  
  // 插入内容 + 关闭按钮
  promptBox.innerHTML = `
    <span>${message}</span>
    <button class="close-btn">×</button>
  `;

  // 关闭按钮绑定事件
  promptBox.querySelector('.close-btn').addEventListener('click', () => {
    closePrompt(promptBox);
  });

  // 添加到页面 & 队列
  document.body.appendChild(promptBox);
  promptBoxes.push(promptBox);
  currentTop += GAP;

  // 显示动画
  setTimeout(() => {
    promptBox.classList.add('show');
  }, 10);

  // 自动关闭
  setTimeout(() => {
    closePrompt(promptBox);
  }, AUTO_CLOSE_TIME);
}

/**
 * 关闭单个提示框
 * @param {HTMLElement} promptBox
 */
function closePrompt(promptBox) {
  const index = promptBoxes.indexOf(promptBox);
  if (index === -1) return;

  // 移除队列 & 减少高度占用
  promptBoxes.splice(index, 1);
  currentTop = Math.max(70, currentTop - GAP);

  // 隐藏动画
  promptBox.classList.remove('show');

  // 动画结束后移除元素并重新排列位置
  promptBox.addEventListener('transitionend', () => {
    promptBox.remove();
    adjustPositions();
  }, { once: true });
}

/**
 * 重新排列所有提示框的位置
 */
function adjustPositions() {
  promptBoxes.forEach((box, index) => {
    box.style.top = `${70 + index * GAP}px`;
  });
}