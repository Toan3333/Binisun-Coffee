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
		loop: false,
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
		on: {
			init: function () {
				disableNavIfNotEnough(this); // Gọi lúc khởi tạo
			},
			resize: function () {
				disableNavIfNotEnough(this); // Gọi lại nếu resize
			},
		},
	});

	function disableNavIfNotEnough(swiperInstance) {
		const totalSlides = swiperInstance.slides.length;
		const currentSlidesPerView = swiperInstance.params.slidesPerView;

		const prevBtn = document.querySelector(".home-3 .btn-prev");
		const nextBtn = document.querySelector(".home-3 .btn-next");

		// Nếu tổng số slide nhỏ hơn hoặc bằng số cần hiển thị
		if (totalSlides <= currentSlidesPerView) {
			prevBtn.style.display = "none";
			nextBtn.style.display = "none";
		} else {
			prevBtn.style.display = "";
			nextBtn.style.display = "";
		}
	}
}

function swiperCertificate() {
	const swiper = new Swiper(".certificate-swiper", {
		slidesPerView: 2,
		spaceBetween: 12,

		modules: [Autoplay, Navigation],
		loop: true,
		autoplay: {
			delay: 3500,
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
const swipers = {};
let currentActiveTab = null;

// Hàm cập nhật step active
function updateActiveStep(tabId, activeIndex) {
	const stepEls = document.querySelectorAll(`#${tabId} .step`);
	const itemEls = document.querySelectorAll(`#${tabId} .item`);

	stepEls.forEach((step, idx) => {
		step.classList.toggle("active", idx === activeIndex);
	});

	itemEls.forEach((item, idx) => {
		item.classList.toggle("active", idx === activeIndex);
	});
}

// Hàm cập nhật hình ảnh step
function updateStepImage(tabId, activeIndex) {
	const stepEls = document.querySelectorAll(`#${tabId} .step`);
	const imgEl = document.querySelector(
		`#${tabId} #step-image, #${tabId} #step-image2, #${tabId} #step-image3`
	);

	if (stepEls.length && imgEl) {
		const newImg = stepEls[activeIndex]?.dataset.img;
		if (newImg) {
			imgEl.src = newImg;
		}
	}
}

// Preload hình ảnh trong tab
function preloadTabImages(tabId) {
	const images = document.querySelectorAll(`#${tabId} [data-img]`);
	images.forEach((img) => {
		const src = img.dataset.img;
		if (src) {
			new Image().src = src;
		}
	});
}

// Hàm khởi tạo Swiper
function initSwiper(tabId) {
	if (swipers[tabId]) return swipers[tabId];

	const swiperContainer = document.querySelector(`#${tabId} .swiper-steps`);
	if (!swiperContainer) return null;

	preloadTabImages(tabId);

	const swiper = new Swiper(swiperContainer, {
		modules: [Autoplay, Navigation],
		slidesPerView: 1,
		spaceBetween: 20,
		autoHeight: true,
		preloadImages: true,
		updateOnWindowResize: true,
		navigation: {
			nextEl: `#${tabId} .btn-next`,
			prevEl: `#${tabId} .btn-prev`,
		},
		on: {
			slideChange: function () {
				updateActiveStep(tabId, this.realIndex);
			},
			init: function () {
				this.slideTo(0, 0);
				updateActiveStep(tabId, 0);
				updateStepImage(tabId, 0);
			},
		},
	});

	swipers[tabId] = swiper;
	return swiper;
}

// Hàm chuyển tab
function switchTab(tabId) {
	if (currentActiveTab === tabId) return;

	// Ẩn tab cũ
	if (currentActiveTab) {
		document.getElementById(currentActiveTab)?.classList.remove("active");
	}

	// Hiện tab mới
	const newTab = document.getElementById(tabId);
	if (!newTab) return;

	newTab.classList.add("active");
	currentActiveTab = tabId;

	if (!swipers[tabId]) {
		initSwiper(tabId);
	} else {
		swipers[tabId].update();
		swipers[tabId].slideTo(0, 0);
		updateActiveStep(tabId, 0);
		updateStepImage(tabId, 0);
	}
}

// Khởi tạo khi DOM ready
document.addEventListener("DOMContentLoaded", () => {
	// Khởi tạo tất cả Swiper từ đầu
	document.querySelectorAll(".tabslet-content").forEach((tab) => {
		initSwiper(tab.id);
	});

	// Kích hoạt tab đầu tiên
	const firstTab = document.querySelector(".tabslet-content");
	if (firstTab) {
		switchTab(firstTab.id);
	}

	// Sự kiện click tab
	document.querySelectorAll(".tabslet-tab li a").forEach((tabLink) => {
		tabLink.addEventListener("click", (e) => {
			e.preventDefault();
			const tabId = tabLink.getAttribute("href").substring(1);
			switchTab(tabId);
		});
	});

	// Sự kiện click step
	document.querySelectorAll(".tabslet-content").forEach((tab) => {
		const tabId = tab.id;
		tab.querySelectorAll(".step").forEach((step, index) => {
			step.addEventListener("click", () => {
				if (swipers[tabId]) {
					swipers[tabId].slideTo(index);
					updateActiveStep(tabId, index);
					updateStepImage(tabId, index);
				}
			});
		});
	});
});

// document.addEventListener("DOMContentLoaded", function () {
// 	const tabs = document.querySelectorAll(".tabslet-tab a");
// 	const allMainSections = document.querySelectorAll(".home-6-main");
// 	const swipers = {}; // Lưu swiper của từng tab (key theo id)

// 	// Ẩn hết, hiện cái đầu tiên
// 	allMainSections.forEach((section) => {
// 		if (section.dataset.tab !== "tab1") section.classList.add("hidden");
// 	});

// 	initSwiperForTab("tab1");

// 	// Xử lý chuyển tab
// 	tabs.forEach((tab) => {
// 		tab.addEventListener("click", function (e) {
// 			const target = this.getAttribute("href").replace("#", "");

// 			// Ẩn/hiện .home-6-main theo tab
// 			allMainSections.forEach((section) => {
// 				if (section.dataset.tab === target) {
// 					section.classList.remove("hidden");
// 				} else {
// 					section.classList.add("hidden");
// 				}
// 			});

// 			// Nếu swiper chưa khởi tạo thì khởi tạo
// 			if (!swipers[target]) {
// 				initSwiperForTab(target);
// 			}
// 		});
// 	});

// 	// Hàm khởi tạo swiper cho tab cụ thể
// 	function initSwiperForTab(tabId) {
// 		const section = document.querySelector(`.home-6-main[data-tab="${tabId}"]`);
// 		if (!section) return;

// 		const swiperContainer = section.querySelector(".swiper-steps");
// 		const btnNext = section.querySelector(".btn-next");
// 		const btnPrev = section.querySelector(".btn-prev");

// 		const swiper = new Swiper(swiperContainer, {
// 			modules: [Autoplay, Navigation],
// 			loop: false,
// 			navigation: {
// 				nextEl: btnNext,
// 				prevEl: btnPrev,
// 			},
// 			on: {
// 				slideChange: function () {
// 					updateActiveStep(swiper.activeIndex, section);
// 				},
// 			},
// 		});

// 		// Click vào step
// 		const stepElements = section.querySelectorAll(".home-6-steps .step");
// 		stepElements.forEach((step, index) => {
// 			step.addEventListener("click", () => {
// 				swiper.slideTo(index);
// 				updateActiveStep(index, section);
// 			});
// 		});

// 		// Khởi tạo bước đầu tiên
// 		updateActiveStep(swiper.activeIndex, section);

// 		// Lưu lại swiper
// 		swipers[tabId] = swiper;
// 	}

// 	// Hàm cập nhật active cho step trong section cụ thể
// 	function updateActiveStep(index, section) {
// 		const steps = section.querySelectorAll(".home-6-steps .step");
// 		const items = section.querySelectorAll(".home-6-steps .item");
// 		const titles = section.querySelectorAll(".steps h3");
// 		const contents = section.querySelectorAll(".home-6-steps .content");

// 		steps.forEach((step, i) => step.classList.toggle("active", i <= index));
// 		items.forEach((item, i) => item.classList.toggle("active", i <= index));
// 		titles.forEach((title, i) => title.classList.toggle("active", i <= index));
// 		contents.forEach((content, i) => content.classList.toggle("active", i === index));
// 	}
// });

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
	const colLeft = document.querySelector(".col-left");
	if (!colLeft) return;

	const thumb = colLeft.querySelector(".swiper-product-detail-thumb");
	const main = colLeft.querySelector(".swiper-product-detail");
	const prevBtn = colLeft.querySelector(".btn-prev");
	const nextBtn = colLeft.querySelector(".btn-next");

	const swiperThumb = new Swiper(thumb, {
		modules: [Autoplay],
		spaceBetween: 12,
		slidesPerView: 3.5,
		freeMode: true,
		observer: true,
		observeParents: true,
		watchSlidesProgress: true,
		loop: true,
		breakpoints: {
			768: {
				slidesPerView: 4,
				spaceBetween: 24,
				direction: "vertical",
			},
			1024: {
				spaceBetween: 15,
				slidesPerView: 5,
				direction: "vertical",
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 15,
				direction: "vertical",
			},
		},
	});

	const swiperDetail = new Swiper(main, {
		spaceBetween: 10,
		loop: true,
		observer: true,
		observeParents: true,
		modules: [Autoplay, Navigation, Thumbs],
		thumbs: {
			swiper: swiperThumb,
		},
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		},
	});

	window.productDetailSwiper = {
		element: colLeft,
		swiperThumb,
		swiperDetail,
	};

	const weightOptions = document.querySelectorAll(".product-detail-weight-list span");
	if (weightOptions.length > 0) {
		weightOptions[0].classList.add("active");
	}
}

function swiperProductOther() {
	const swiper = new Swiper(".product-detail-other", {
		slidesPerView: 1,
		spaceBetween: 16,
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
