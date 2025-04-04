import Swiper from "swiper";
import { Autoplay, Navigation, EffectFade, Thumbs } from "swiper/modules";
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
	swiperBannerMobile();
	swiperHome3();
	swiperCertificate();
	swiperHome9();
	swiperGallery();
	swiperGallery2();
	swiperProductDetail();
	swiperProductOther();

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

function swiperBannerMobile() {
	const swiper = new Swiper(".swiper-home-banner-mobile", {
		slidesPerView: 1,
		modules: [Autoplay, EffectFade], // Đảm bảo đã import EffectFade
		loop: true,
		effect: "fade",
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
	});
}

function swiperHome3() {
	const swiper = new Swiper(".home-3-swiper", {
		slidesPerView: 2,
		spaceBetween: 16,

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
			1024: {
				slidesPerView: 3,
				spaceBetween: 24,
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
		slidesPerView: 2,
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
				spaceBetween: 12,
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 24,
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
	// Khởi tạo Swiper
	const swiper = new Swiper(".swiper-steps", {
		modules: [Autoplay, Navigation],
		loop: false,
		navigation: {
			nextEl: ".col-right-content .btn-next",
			prevEl: ".col-right-content .btn-prev",
		},
		on: {
			slideChange: function () {
				updateActiveStep(swiper.activeIndex);
			},
		},
	});

	// Hàm cập nhật trạng thái active
	function updateActiveStep(index) {
		const steps = document.querySelectorAll(".home-6-steps .step");
		const items = document.querySelectorAll(".home-6-steps .item");
		const titles = document.querySelectorAll(".steps h3");
		const contents = document.querySelectorAll(".home-6-steps .content");

		// Giữ trạng thái active cho tất cả bước trước đó và bước hiện tại
		steps.forEach((step, i) => step.classList.toggle("active", i <= index));
		items.forEach((item, i) => item.classList.toggle("active", i <= index));
		titles.forEach((title, i) => title.classList.toggle("active", i <= index));
		contents.forEach((content, i) => content.classList.toggle("active", i === index));
	}

	// Thiết lập bước đầu tiên là active
	updateActiveStep(swiper.activeIndex);

	// Click vào step thì giữ active cho bước đó và tất cả bước trước
	document.querySelectorAll(".home-6-steps .step").forEach((step, index) => {
		step.addEventListener("click", () => {
			swiper.slideTo(index);
			updateActiveStep(index);
		});
	});
});

function swiperHome9() {
	const swiper = new Swiper(".home-9-swiper", {
		slidesPerView: 2,
		spaceBetween: 12,

		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".home-9 .btn-next",
			prevEl: ".home-9 .btn-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 3,
			},
			1024: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1200: {
				slidesPerView: 7,
				spaceBetween: 24,
			},
		},
	});
}

function swiperGallery() {
	// Khởi tạo Swiper Thumb trước
	const swiperThumb = new Swiper(".about-5-swiper-thumb", {
		modules: [Autoplay],
		spaceBetween: 12,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		loop: true,

		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1024: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
		},
	});

	// Khởi tạo Swiper chính
	const swiperDetail = new Swiper(".about-5-swiper", {
		spaceBetween: 10,
		loop: true,
		modules: [Autoplay, Navigation, Thumbs],
		thumbs: {
			swiper: swiperThumb, // Liên kết thumbnail với Swiper chính
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".about-5 .btn-next",
			prevEl: ".about-5 .btn-prev",
		},
	});
}

function swiperGallery2() {
	// Khởi tạo Swiper Thumb trước
	const swiperThumb = new Swiper(".about-6-swiper-thumb", {
		modules: [Autoplay],
		spaceBetween: 12,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		loop: true,

		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 24,
			},
			1024: {
				spaceBetween: 20,
				slidesPerView: 3,
			},
		},
	});

	// Khởi tạo Swiper chính
	const swiperDetail = new Swiper(".about-6-swiper", {
		spaceBetween: 10,
		loop: true,
		modules: [Autoplay, Navigation, Thumbs],
		thumbs: {
			swiper: swiperThumb, // Liên kết thumbnail với Swiper chính
		},
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".about-6 .btn-next",
			prevEl: ".about-6 .btn-prev",
		},
	});
}

function swiperProductDetail() {
	const colLefts = document.querySelectorAll(".col-left");
	const swiperInstances = [];
	colLefts.forEach((colLeft) => {
		const thumb = colLeft.querySelector(".swiper-product-detail-thumb");
		const main = colLeft.querySelector(".swiper-product-detail");
		const prevBtn = colLeft.querySelector(".btn-prev");
		const nextBtn = colLeft.querySelector(".btn-next");

		const swiperThumb = new Swiper(thumb, {
			modules: [Autoplay],
			spaceBetween: 12,
			slidesPerView: 3.5,
			freeMode: true,
			watchSlidesProgress: true,
			loop: false,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 24,
					direction: "vertical",
				},
				1024: {
					spaceBetween: 15,
					slidesPerView: 5,
					direction: "vertical",
				},
				1200: {
					spaceBetween: 15,
					slidesPerView: 5,
					direction: "vertical",
				},
			},
		});

		const swiperDetail = new Swiper(main, {
			spaceBetween: 10,
			loop: false,
			modules: [Autoplay, Navigation, Thumbs],
			thumbs: {
				swiper: swiperThumb,
			},
			navigation: {
				nextEl: nextBtn,
				prevEl: prevBtn,
			},
		});

		swiperInstances.push({
			index: Number(colLeft.dataset.index),
			element: colLeft,
			swiperThumb,
			swiperDetail,
		});
	});

	window.productDetailSwiper = swiperInstances || [];

	const weightOptions = document.querySelectorAll(".product-detail-weight-list span");

	weightOptions.forEach((el, index) => {
		el.setAttribute("data-index", index);
		el.addEventListener("click", () => {
			weightOptions.forEach((s) => s.classList.remove("active"));
			el.classList.add("active");

			swiperInstances.forEach((instance) => {
				if (instance.index === index) {
					instance.element.classList.remove("hidden");
				} else {
					instance.element.classList.add("hidden");
				}
			});
		});
	});

	if (weightOptions.length > 0) {
		weightOptions[0].classList.add("active");
	}
}

function swiperProductOther() {
	const swiper = new Swiper(".product-detail-other", {
		slidesPerView: 2,
		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		speed: 1500,
		navigation: {
			nextEl: ".product-detail-3 .btn-next",
			prevEl: ".product-detail-3 .btn-prev",
		},

		breakpoints: {
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
}
