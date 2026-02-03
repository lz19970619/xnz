// 配置数据
const IMG_GRID_DATA = {
  boxId: 'img-grid-box',
  
  items: [
    {
      name: "广告招租",
      img: "https://tuchuang888.ovd3vccw4pjzyc7bgg.com/200x200.gif",
      url: "#"
    },
    {
      name: "广告招租", 
      img: "https://img1.ah7907.com/388-150x150.gif",
      url: "#"
    }
  ]
};

// 执行代码
(function() {
  const config = window.IMG_GRID_DATA || IMG_GRID_DATA;
  const box = document.getElementById(config.boxId);
  
  if (!box) return;
  
  let html = `
    <div class="mt-2 flex w-full flex-col">
      <div class="grid w-full grid-cols-6 gap-x-1 gap-y-1 px-1 pt-[5px]">
  `;
  
  config.items.forEach(item => {
    html += `
      <div class="flex flex-col items-center justify-center">
        <a href="${item.url || '#'}" target="_blank" class="block w-full">
          <div class="flex aspect-square w-full items-center justify-center px-1">
            <img src="${item.img || ''}"
                 class="loaded border-0 outline-none focus:outline-none flex w-full items-center justify-center rounded-[5px] object-cover"
                 alt="${item.name || ''}" loading="lazy" 
                 style="outline: none; border: none;">
          </div>
          <p class="mt-[0px] truncate text-center text-[12px] text-yellow-500">
            ${item.name || ''}
          </p>
        </a>
      </div>
    `;
  });
  
  html += `
      </div>
    </div>
  `;
  
  box.innerHTML = html;
  
  // 图片加载失败处理
  box.querySelectorAll('img').forEach(img => {
    img.onerror = function() {
      this.style.display = 'none';
    };
  });
})();
