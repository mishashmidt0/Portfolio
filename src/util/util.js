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

export function showScrollAnim(scrollItems) {
    for (let scrollItem of scrollItems) {
        // высота элемента
        const scrollItemHeight = scrollItem.offsetHeight;
        // положение на странице (прокрутка страницы top окна + положение элемента относительно окна)
        const scrollItemOffset =
            window.pageYOffset + scrollItem.getBoundingClientRect().top;
        // при прокрутке на какую часть элемента показываем его на странице (прокрутив 4 часть элемента)
        const scrollItemPart = 4;

        // определяем точку появления элемента - после появления в окне четверти элемента
        let viewPoint = window.innerHeight - scrollItemHeight / scrollItemPart;
        // если элемент больше окна, при прокрутке четверти окна
        if (scrollItemHeight > window.innerHeight) {
            viewPoint = window.innerHeight - window.innerHeight / scrollItemPart;
        }

        if ( window.pageYOffset > scrollItemOffset - viewPoint) {
            scrollItem.classList.add("scroll-item--active");
        }
    }
}

export function scrollToggle(elem, classActive,header) {
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


