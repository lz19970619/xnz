
const SHOW_DATA = {
  boxId: 'show-box',
  
  links: [
    {
      img: "https://tuchuang888.ovd3vccw4pjzyc7bgg.com/960x120.gif",
      url: "https://baidu.com"
    },
    {
      img: "https://img1.ah7907.com/388-960x120.gif",
      url: "#"
    }
  ]
};

// 以下代码不要修改
(function() {
  const config = window.SHOW_DATA || SHOW_DATA;
  const box = document.getElementById(config.boxId);
  
  if (!box) return;
  
  let html = `<div class="flex w-full flex-col pt-[10px]">`;
  
  config.links.forEach(item => {
    html += `
      <a href="${item.url || '#'}" target="_blank">
        <div class="w-full">
          <div class="relative flex items-center justify-center bg-transparent" style="border-radius: 0px; height: auto;">
            <img src="${item.img || ''}" class="loaded border-0 outline-none focus:outline-none h-full w-full object-cover" alt="" loading="lazy"
                 style="outline: none; border: none; border-radius: 0px;">
          </div>
        </div>
      </a>
    `;
  });
  
  html += `</div>`;
  box.innerHTML = html;
})();
