const TONGLAN_DATA = {
  boxId: 'tonglan-box',
  
  items: [
    {
      img: "https://imgsa.baidu.com/forum/pic/item/d6ca7bcb0a46f21f47336e44b0246b600c33aea6.jpg",  // 图片地址
      url: "https://baidu.com"  // 跳转地址
    },
    {
      img: "https://www.kl892.com/images/68fe1cd438c8cea741b821cc.gif",
      url: "https://baidu.com"
    }
  ]
};

// 以下代码不要修改
(function() {
  const config = window.TONGLAN_DATA || TONGLAN_DATA;
  const box = document.getElementById(config.boxId);
  
  if (!box) return;
  
  let html = `<div class="mt-2 w-full px-2">`;
  
  config.items.forEach(item => {
    html += `
      <a href="${item.url || '#'}" target="_blank">
        <div class="w-full">
          <div class="relative flex items-center justify-center bg-transparent" style="border-radius: 0px; height: auto;">
            <img src="${item.img || ''}"
                 class="loaded border-0 outline-none focus:outline-none h-full w-full object-cover" alt="" loading="lazy"
                 style="outline: none; border: none; border-radius: 0px;">
          </div>
        </div>
      </a>
    `;
  });
  
  html += `</div>`;
  box.innerHTML = html;
  
  box.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
      console.warn(`图片加载失败: ${this.src}`);
    };
  });
})();
