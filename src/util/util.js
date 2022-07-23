const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    },
};

export const scrollObserve = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.id !== "portfolio" ?
                entry.target.classList.add("scroll-item--active")
                : entry.target.classList.add("scroll-item--active-portfolio");
            observer.unobserve(entry.target)
        }
    })

}, {})


export function scrollToggle(elem, classActive, header) {
    // ширина скролла
    let body = document.body;
    let paddingOffset = window.innerWidth - body.offsetWidth + "px";

    // функция блокировки скролла
    if (elem.classList.contains(classActive)) {
        document.body.style.overflow = "hidden";

        // если десктоп - убираем скачок страницы - компенсируем скролл
        if (!isMobile.any()) {
            body.style.paddingRight = paddingOffset;
            header.style.paddingRight = paddingOffset;
        }
    } else {
        document.body.style.overflow = "";

        // если десктоп - убираем компенсацию скролла
        if (!isMobile.any()) {
            body.style.paddingRight = "0px";
            header.style.paddingRight = "0px";
        }
    }
}


