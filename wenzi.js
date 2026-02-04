var GRID_DATA = {
  boxId: 'grid-box',
  
  items: [
    {
      name: "广告招租",
      url: "#"
    },
    {
      name: "广告招租",
      url: "#"
    },
    {
      name: "广告招租",
      url: "#"
    },
    {
      name: "广告招租",
      url: "#"
    },
    {
      name: "广告招租",
      url: "#"
    }
  ]
};

// 检查是否已初始化
if (!window.__GRID_LOADED__) {
  (function() {
    const config = window.GRID_DATA || GRID_DATA;
    const box = document.getElementById(config.boxId);
    
    if (!box) return;
    
    let html = `<div class="mt-2 grid grow grid-cols-5 gap-x-[3px] gap-y-[5px] px-1">`;
    
    config.items.forEach(item => {
      html += `
        <div class="col-span-1 min-w-0 overflow-hidden">
          <a href="${item.url || '#'}" target="_blank"
            class="block w-full max-w-full justify-center overflow-hidden truncate text-ellipsis whitespace-nowrap rounded-[3px] border-[1px] border-[#5B5B5B] px-[1px] py-[2px] text-center text-[12px] font-medium text-[#74EF79]">
            ${item.name || ''}
          </a>
        </div>
      `;
    });
    
    html += `</div>`;
    box.innerHTML = html;
    window.__GRID_LOADED__ = true;
  })();
}
