import 'swiper/swiper-bundle.css';
import Swiper, { Pagination, Autoplay } from 'swiper';
Swiper.use([Pagination, Autoplay]);

const reviewsSlider = () => {
	const swiper = new Swiper('.reviews-slider__container', {
		direction: 'horizontal',
		loop: true,
		speed: 400,
		pagination: {
			el: '.reviews-slider-pagination',
			bulletClass: 'reviews-slider-pagination__dot',
			bulletActiveClass: 'reviews-slider-pagination__dot--active',
			clickable: true,
		},
		autoHeight: true,
		autoplay: {
			delay: 5000,
		},
	});

	// fix autoheight
	const swiperWrapper = document.querySelector('.swiper-wrapper');
	const activeSlide = document.querySelector('.swiper-slide-active');
	setTimeout(() => {
		swiperWrapper.style.height = activeSlide.offsetHeight + 'px';
	}, 100);
};

export default reviewsSlider;
