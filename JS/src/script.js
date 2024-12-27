// script.js
document.addEventListener('DOMContentLoaded', function () {
  const listItems = document.querySelectorAll('.nested-list > li');

  listItems.forEach(item => {
    item.addEventListener('click', function (event) {
      event.stopPropagation();  // 防止冒泡，避免点击父元素时也触发

      // 切换当前项的显示状态
      this.classList.toggle('open');
    });
  });
});


const page = document.getElementById('1.1.1')
page.addEventListener('click', ()=>{
  const mainContent = document.getElementById('mainContent')
  const content = document.createElement('div')
  content.innerHTML = `
    <div>newContent</div>
  `

  mainContent.appendChild(content)
})
