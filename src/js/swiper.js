import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
/**
 * @param swiperInit
 */
export function swiperInit() {
	//   new Swiper(".section-home-banner .swiper", {
	//     slidesPerView: 1,
	//     spaceBetween: 0,
	//     speed: 1000,
	//     loop: true,
	//     effect: "fade",
	//     autoplay: {
	//       delay: 3500,
	//     },
	//     modules: [Pagination, Navigation, Autoplay, EffectFade],
	//     pagination: {
	//       el: ".section-home-banner .swiper-pagination",
	//       clickable: true,
	//       renderBullet: function (index, className) {
	//         const slide = this.slides[index];
	//         const title = slide.getAttribute("data-title") || `Slide ${index + 1}`;
	//         return `<span class="${className}">${title}</span>`;
	//       },
	//     },
	//     navigation: {
	//       nextEl: ".section-home-banner .btn-next",
	//       prevEl: ".section-home-banner .btn-prev",
	//     },
	//   });
	//   // Reuseable Swiper
	//   $(".swiper-cols-1 .swiper").each(function () {
	//     new Swiper(this, {
	//       slidesPerView: 1,
	//       spaceBetween: 20,
	//       modules: [Navigation],
	//       navigation: {
	//         nextEl: $(this).closest(".swiper-cols-1").find(".btn-next")[0],
	//         prevEl: $(this).closest(".swiper-cols-1").find(".btn-prev")[0],
	//       },
	//     });
	//   });
	//   $(".swiper-cols-2 .swiper").each(function () {
	//     new Swiper(this, {
	//       slidesPerView: 1,
	//       spaceBetween: 20,
	//       modules: [Navigation],
	//       navigation: {
	//         nextEl: $(this).closest(".swiper-cols-1").find(".btn-next")[0],
	//         prevEl: $(this).closest(".swiper-cols-1").find(".btn-prev")[0],
	//       },
	//       breakpoints: {
	//         768: {
	//           slidesPerView: 2,
	//           spaceBetween: 40,
	//         },
	//       },
	//     });
	//   });
	//   $(".swiper-cols-3 .swiper").each(function () {
	//     new Swiper(this, {
	//       slidesPerView: 1,
	//       spaceBetween: 20,
	//       modules: [Navigation],
	//       navigation: {
	//         nextEl: $(this).closest(".swiper-cols-3").find(".btn-next")[0],
	//         prevEl: $(this).closest(".swiper-cols-3").find(".btn-prev")[0],
	//       },
	//       breakpoints: {
	//         768: {
	//           slidesPerView: 2,
	//         },
	//         1200: {
	//           slidesPerView: 3,
	//           spaceBetween: 40,
	//         },
	//       },
	//     });
	//   });
	//   $(".swiper-cols-4 .swiper").each(function () {
	//     new Swiper(this, {
	//       slidesPerView: 1,
	//       spaceBetween: 20,
	//       modules: [Navigation],
	//       navigation: {
	//         nextEl: $(this).closest(".swiper-cols-4").find(".btn-next")[0],
	//         prevEl: $(this).closest(".swiper-cols-4").find(".btn-prev")[0],
	//       },
	//       breakpoints: {
	//         768: {
	//           slidesPerView: 3,
	//         },
	//         1200: {
	//           slidesPerView: 4,
	//           spaceBetween: 40,
	//         },
	//       },
	//     });
	//   });

	swiperBanner();
	swiperHome3();
	swiperCertificate();
	// swiperSteps();
}
function swiperBanner() {
	const swiper = new Swiper(".swiper-home-banner", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation, EffectFade], // Đảm bảo đã import EffectFade
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 4500,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-1 .btn-next",
			prevEl: ".home-1 .btn-prev",
		},
	});
}

function swiperHome3() {
	const swiper = new Swiper(".home-3-swiper", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-3 .btn-next",
			prevEl: ".home-3 .btn-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});
}

function swiperCertificate() {
	const swiper = new Swiper(".certificate-swiper", {
		slidesPerView: 1,
		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-5 .btn-next",
			prevEl: ".home-5 .btn-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 24,
			},
		},
	});
}

// function swiperSteps() {
// }
document.addEventListener("DOMContentLoaded", function () {
	// Khởi tạo Swiper cho các slide
	const swiper = new Swiper(".swiper-steps", {
		modules: [Autoplay, Navigation],
		loop: false,
		navigation: {
			nextEl: ".col-right-content .btn-next",
			prevEl: ".col-right-content .btn-prev",
		},
		on: {
			slideChange: function () {
				// Lấy chỉ số slide hiện tại
				const currentSlideIndex = swiper.activeIndex;

				// Cập nhật trạng thái active cho các bước
				updateActiveStep(currentSlideIndex);
			},
		},
	});

	// Hàm cập nhật class active cho các bước và thay đổi ảnh của arrow
	function updateActiveStep(index) {
		// Lấy tất cả các phần tử .step, h3 và ảnh arrow
		const steps = document.querySelectorAll(".home-6-steps .step");
		const titles = document.querySelectorAll(".home-6-steps h3");
		const arrows = document.querySelectorAll(".arrow img");

		// Chỉ xóa class 'active' của các bước chưa qua (index < activeIndex)
		steps.forEach((step, i) => {
			if (i < index) {
				step.classList.add("active"); // Giữ active cho các bước đã qua
			} else {
				step.classList.remove("active"); // Xóa active cho các bước chưa qua
			}
		});

		titles.forEach((title, i) => {
			if (i < index) {
				title.classList.add("active"); // Giữ active cho tiêu đề của các bước đã qua
			} else {
				title.classList.remove("active"); // Xóa active cho các bước chưa qua
			}
		});

		// Cập nhật ảnh của arrow
		arrows.forEach((arrow, i) => {
			if (i < index) {
				arrow.src = "./img/arrow-primary.png"; // Đổi ảnh cho các bước đã qua
			} else {
				arrow.src = "./img/arrow.png"; // Đặt lại ảnh mặc định cho các bước chưa qua
			}
		});

		// Thêm class 'active' vào bước và tiêu đề tương ứng với slide hiện tại
		const activeStep = document.querySelector(`#step-${index + 1}`);
		const activeTitle = titles[index];
		const activeArrow = arrows[index];

		if (activeStep) {
			activeStep.classList.add("active");
		}

		if (activeTitle) {
			activeTitle.classList.add("active");
		}

		if (activeArrow) {
			activeArrow.src = "./img/arrow-primary.png"; // Đổi ảnh khi active
		}
	}

	// Thiết lập bước đầu tiên là active
	updateActiveStep(swiper.activeIndex);

	// Thêm sự kiện click cho các phần tử .step
	const steps = document.querySelectorAll(".home-6-steps .step");
	steps.forEach((step, index) => {
		step.addEventListener("click", () => {
			// Di chuyển đến slide tương ứng với phần tử .step được click
			swiper.slideTo(index);
		});
	});
});
