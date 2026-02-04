(function() {
  // 检查是否已经有内容了
  const box = document.getElementById('grid-box');
  if (!box) return;
  
  // 如果box已经有innerHTML了，就跳过
  if (box.innerHTML.trim() !== '') {
    console.log('grid-box已经有内容了，跳过JS生成');
    return;
  }
  
  // 只有为空时才生成
  const GRID_DATA = {
    boxId: 'grid-box',
    items: [
      { name: "广告招租", url: "#" },
      { name: "广告招租", url: "#" },
      { name: "广告招租", url: "#" },
      { name: "广告招租", url: "#" },
      { name: "广告招租", url: "#" }
    ]
  };

  let html = `<div class="mt-2 grid grow grid-cols-5 gap-x-[3px] gap-y-[5px] px-1">`;
  
  GRID_DATA.items.forEach(item => {
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
})();
