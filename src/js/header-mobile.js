export function showMenu() {
	document.addEventListener("DOMContentLoaded", function () {
		const barBtn = document.querySelector(".header-bar-mobile");
		const menu = document.querySelector(".header-nav-mobile");

		if (barBtn && menu) {
			barBtn.addEventListener("click", () => {
				menu.classList.toggle("open");

				const icon = barBtn.querySelector("i");
				icon.classList.toggle("fa-bars", !menu.classList.contains("open"));
				icon.classList.toggle("fa-times", menu.classList.contains("open"));
			});
		}

		const searchBtns = document.querySelectorAll(".header-search, .header-search-mobile");
		const searchBar = document.querySelector(".search-bar-container");
		const searchMobileClose = document.querySelector(".search-mobile-close");

		if (searchBar && searchBtns.length) {
			searchBtns.forEach((btn) => {
				btn.addEventListener("click", () => toggleSearchBar(btn));
			});
		}

		if (searchMobileClose) {
			searchMobileClose.addEventListener("click", closeSearchBar);
		}

		searchBar.addEventListener("click", (e) => {
			if (e.target === searchBar) closeSearchBar();
		});

		function toggleSearchBar(btn) {
			searchBar.classList.toggle("active");
			document.body.classList.toggle("search-open");

			const icon = btn.querySelector("i");
			icon.classList.toggle("fa-magnifying-glass", !searchBar.classList.contains("active"));
			icon.classList.toggle("fa-times", searchBar.classList.contains("active"));
		}

		function closeSearchBar() {
			searchBar.classList.remove("active");
			document.body.classList.remove("search-open");
			resetSearchIcons();
		}

		function resetSearchIcons() {
			searchBtns.forEach((btn) => {
				const icon = btn.querySelector("i");
				icon.classList.remove("fa-times");
				icon.classList.add("fa-magnifying-glass");
			});
		}
	});
}

showMenu();
