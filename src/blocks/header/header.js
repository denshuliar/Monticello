import Swiper from "swiper";

export function initBlock() {
    // TODO: add code here
    new Swiper(".header__sl", {
        direction: 'vertical',
        loop: true,
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        }
    });
}

export default initBlock();
// ---------------------------- END PUBLIC METHODS ----------------------------