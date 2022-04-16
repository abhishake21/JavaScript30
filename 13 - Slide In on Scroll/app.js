const images = document.querySelectorAll('.slide-in');

function checkScroll(e){
    // console.log(e);
    images.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight) - img.height/2;
        // console.log(slideInAt);
        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        
        if(isHalfShown && isNotScrolledPast){
            img.classList.add('active');
        } else {
            // img.classList.remove('active');
        }
    })
}

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
};

window.addEventListener('scroll', debounce(checkScroll))