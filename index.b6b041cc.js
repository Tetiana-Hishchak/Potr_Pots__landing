"use strict";
document.addEventListener("DOMContentLoaded", function() {
    let init = false;
    let swiper;
    function swiperGallery() {
        if (window.innerWidth < 1024) {
            if (!init) {
                init = true;
                // eslint-disable-next-line
                swiper = new Swiper(".swiper", {
                    slidesPerView: 1,
                    pagination: {
                        el: ".swiper-pagination",
                        bulletClass: "swiper-pagination-bullet",
                        bulletActiveClass: "swiper-pagination-bullet--active",
                        clickable: true
                    }
                });
            }
        } else if (init) {
            swiper.destroy();
            init = false;
        }
    }
    swiperGallery();
    window.addEventListener("resize", swiperGallery);
});

//# sourceMappingURL=index.b6b041cc.js.map
