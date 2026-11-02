document.addEventListener("DOMContentLoaded", () => {
    const pageHeader = document.getElementById("page-header");
    const exploreButton = document.getElementById("explore-button");

    if (!pageHeader || !exploreButton) {
        return;
    }

    const updateHeaderBackground = () => {
        const headerBottom = pageHeader.getBoundingClientRect().bottom;
        const buttonBottom = exploreButton.getBoundingClientRect().bottom;

        pageHeader.classList.toggle(
            "header-scrolled",
            buttonBottom <= headerBottom,
        );
    };

    updateHeaderBackground();
    window.addEventListener("scroll", updateHeaderBackground, {
        passive: true,
    });
    window.addEventListener("resize", updateHeaderBackground);
});
