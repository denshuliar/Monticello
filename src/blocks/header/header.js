import Swiper from 'swiper';

export default function () {
    // TODO: add code here
    new Swiper('.header__sl', {
        direction: 'vertical',
        loop: true,
        clickable: true,
        pagination: {
            el: '.swiper-pagination',
        }
    });
}
// ---------------------------- END PUBLIC METHODS ----------------------------