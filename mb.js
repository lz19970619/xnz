

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

// 搜索
	document.addEventListener('DOMContentLoaded', function() {
	    const searchTrigger = document.querySelector('.ml-\\[8px\\].flex.h-\\[28px\\].min-w-0.grow.items-center.justify-between.gap-3.rounded-\\[15px\\].bg-\\[\\#606060\\].pl-\\[10px\\]');
	    const searchBox = document.getElementById('searchbox');
	    const cancelButton = document.querySelector('button.ml-3.h-full.bg-transparent.px-3.text-\\[14px\\].text-white');
	    if (searchTrigger && searchBox) {
	        searchTrigger.addEventListener('click', function() {
	            searchBox.style.display = 'flex'; 
	        });
	    }
	    
	    if (cancelButton && searchBox) {
	        cancelButton.addEventListener('click', function() {
	            searchBox.style.display = 'none';
	        });
	    }
	    
	    if (searchBox) {
	        searchBox.addEventListener('click', function(e) {
	            if (e.target === searchBox) {
	                searchBox.style.display = 'none';
	            }
	        });
	    }
	});


// 公告
document.addEventListener('DOMContentLoaded', function() {
    const triggerElement = document.querySelector('.relative.flex.h-\\[18px\\].w-\\[18px\\]');
    
    const urlBox = document.getElementById('urlBox');
    
    const closeButton = document.querySelector('.absolute.right-1.top-1');
    
    if (!urlBox) return;
    
    const CACHE_KEY = 'announcement_closed_time';
    const CACHE_DURATION = 4 * 60 * 60 * 1000; // 4小时
    
    function shouldShowAnnouncement() {
        const closedTime = localStorage.getItem(CACHE_KEY);
        
        if (!closedTime) return true;
        
        const currentTime = new Date().getTime();
        const timeDiff = currentTime - parseInt(closedTime, 10);
        
        return timeDiff > CACHE_DURATION;
    }
    
    function saveCloseTime() {
        const currentTime = new Date().getTime();
        localStorage.setItem(CACHE_KEY, currentTime.toString());
    }
    
    if (shouldShowAnnouncement()) {
        urlBox.style.display = 'flex';
    }
    
    if (triggerElement) {
        triggerElement.addEventListener('click', function() {
            urlBox.style.display = 'flex';
        });
    }
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            urlBox.style.display = 'none';
            saveCloseTime();
        });
    }
});
