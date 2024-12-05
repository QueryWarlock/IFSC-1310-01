document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const currentOpenItem = document.querySelector(".accordion-item.open");
            const parent = header.parentElement;

            if (currentOpenItem && currentOpenItem !== parent) {
                currentOpenItem.classList.remove("open");
                currentOpenItem.querySelector(".accordion-content").style.maxHeight = null;
            }

            if (!parent.classList.contains("open")) {
                parent.classList.add("open");
                const content = parent.querySelector(".accordion-content");
                content.style.maxHeight = `${content.scrollHeight}px`;
            } else {
                parent.classList.remove("open");
                parent.querySelector(".accordion-content").style.maxHeight = null;
            }
        });
    });
});
