document.querySelector("body > header > div.header-right > a").addEventListener("click", function () {
    document.querySelector("body > header > div.hamburger-menu").classList.add("active");
});

document.querySelector("body > header > div.hamburger-menu > a").addEventListener("click", function () {
    document.querySelector("body > header > div.hamburger-menu").classList.remove("active");
});