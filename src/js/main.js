import AOS from "aos";
import lozad from "lozad";
import {
	setBackgroundElement,
	detectCloseElement,
	buttonToTop,
	clickScrollToDiv,
	appendCaptchaASP,
	countUpInit,
} from "./helper";
import { header } from "./header";
import { showMenu } from "./header-mobile";
import { swiperInit } from "./swiper";

$(document).ready(function () {
	setBackgroundElement();
	header.init();
	swiperInit();
	showMenu();
	countUpInit();

	buttonToTop();
	// clickTabMoveLine();
	indicatorSlide();
	handleTitleTab();

	watchObserveInputFile();
	handleTitleTab2();
	loadMoreJobs();

	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		trapFocus: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

function initTabsWithLine(tabWrapperSelector) {
	const $tabWrapper = $(tabWrapperSelector);
	if (!$tabWrapper.length) return;

	const $line = $tabWrapper.find(".line");

	// Handle click tab
	$tabWrapper.find("li a").on("click", function (e) {
		e.preventDefault();

		const $a = $(this);
		const $li = $a.parent();
		const targetTab = $a.attr("href");

		// Active state
		$tabWrapper.find("li").removeClass("active");
		$li.addClass("active");

		// Content toggle
		$(".tabslet-content").removeClass("active");
		$(targetTab).addClass("active");

		// Move line
		const width = $a.outerWidth();
		const position = $a.position().left;

		$line.css({
			width: width,
			left: position,
		});
	});

	// Set initial position after page load
	$(window).on("load", function () {
		requestAnimationFrame(() => {
			const $activeLi = $tabWrapper.find("li.active");
			const $activeA = $activeLi.find("a");

			if ($activeA.length) {
				const width = $activeA.outerWidth();
				const position = $activeA.position().left;

				$line.css({
					width: width,
					left: position,
				});
			}
		});
	});
}

initTabsWithLine(".tabslet-tab.home-7-nav");
initTabsWithLine(".tabslet-tab.product-detail-nav");

function loadMoreJobs() {
	const btnMore = document.querySelector(".more");
	if (!btnMore) return;

	const hiddenRows = document.querySelectorAll("tr.hidden");
	let index = 0;
	const showCount = 4;

	function handleLoadMore(event) {
		event.preventDefault();

		for (let i = index; i < index + showCount && i < hiddenRows.length; i++) {
			hiddenRows[i].classList.remove("hidden");
		}
		index += showCount;

		btnMore.style.display = index < hiddenRows.length ? "flex" : "none";
	}

	btnMore.addEventListener("click", handleLoadMore);

	btnMore.style.display = hiddenRows.length > 0 ? "flex" : "none";
}

function watchObserveInputFile() {
	$('input[name="file-cv"]').on("change", function () {
		const file = this.files[0];
		if (file) {
			const fileName = file.name;
			const fileNameDisplay = $("<span>", {
				class: "file-name text-sm text-body-text-66 mt-1 block",
				text: "File CV: " + fileName,
			});

			$(this).closest(".form-input-file").find(".file-name").remove();

			$(this).closest(".form-input-file").append(fileNameDisplay);
		}
	});
}

export function indicatorSlide() {
	if ($(".indicator-swipe").length > 0) {
		var callback = function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add("active");
					setTimeout(function () {
						entry.target.classList.remove("active");
					}, 3000);
				}
			});
		};

		var observer = new IntersectionObserver(callback);
		var animationItems = document.querySelectorAll(".indicator-swipe");
		animationItems.forEach(function (item) {
			observer.observe(item);
		});
	}
}

// fancyfox popup
document.addEventListener("DOMContentLoaded", function () {
	Fancybox.bind("[data-fancybox]", {
		dragToClose: false,
		backdropClick: false,
		template: {
			closeButton:
				'<button class="fancybox-button fancybox-button--close" title="Close"><i class="fa-duotone fa-solid fa-xmark"></i></button>',
		},
	});
});

function handleTitleTab() {
	const tabs = document.querySelectorAll(".product-detail-nav a");
	const title = document.querySelector("h2.title-tab"); // Chọn tiêu đề cần thay đổi

	tabs.forEach((tab) => {
		tab.addEventListener("click", function (event) {
			event.preventDefault(); // Ngăn chặn chuyển hướng mặc định

			// Lấy nội dung của tab
			const newTitle = tab.textContent.trim();

			// Cập nhật tiêu đề
			title.textContent = newTitle;

			// Xóa active cũ và thêm active mới
			document.querySelector(".product-detail-nav li.active")?.classList.remove("active");
			tab.parentElement.classList.add("active");

			// Xử lý hiển thị tab content
			const tabId = tab.getAttribute("href");
			document.querySelectorAll(".tabslet-content").forEach((content) => {
				content.classList.remove("active");
			});
			document.querySelector(tabId).classList.add("active");
		});
	});
}

function handleTitleTab2() {
	const tabs = document.querySelectorAll(".home-7-nav a");
	const title = document.querySelector("h2.title-tab-heading"); // Chọn tiêu đề cần thay đổi

	tabs.forEach((tab) => {
		tab.addEventListener("click", function (event) {
			event.preventDefault(); // Ngăn chặn chuyển hướng mặc định

			// Lấy nội dung của tab
			const newTitle = tab.textContent.trim();

			// Cập nhật tiêu đề
			title.textContent = newTitle;

			// Xóa active cũ và thêm active mới
			document.querySelector(".home-7-nav li.active")?.classList.remove("active");
			tab.parentElement.classList.add("active");

			// Xử lý hiển thị tab content
			const tabId = tab.getAttribute("href");
			document.querySelectorAll(".tabslet-content").forEach((content) => {
				content.classList.remove("active");
			});
			document.querySelector(tabId).classList.add("active");
		});
	});
}

/*==================== Aos Init ====================*/
AOS.init({
	offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();
