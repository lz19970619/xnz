// 苹果cms必备
var maccms={"path":"__ROOT__","mid":"{$maccms['mid']}","url":"{$maccms['site_url']}","wapurl":"{$maccms['site_wapurl']}","mob_status":"{$maccms['mob_status']}"};


// 返回顶部
const backToTop = document.getElementById('backToTop');
let scrolling = false;

window.addEventListener('scroll', () => {
    if (scrolling) return;
    
    if (window.scrollY > 300) {
        backToTop.classList.remove('hidden');
    } else {
        backToTop.classList.add('hidden');
    }
});

backToTop.addEventListener('click', () => {
    scrolling = true;
    backToTop.style.pointerEvents = 'none';
    
    window.scrollTo(0, 0);
    
    setTimeout(() => {
        scrolling = false;
        backToTop.style.pointerEvents = 'auto';
        backToTop.classList.add('hidden');
    }, 100);
});

if (window.scrollY > 300) {
    backToTop.classList.remove('hidden');
}

