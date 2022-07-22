import {scrollToggle} from "../../../util/util";


// функция закрытия меню бургер
export const resetNav =  (burgerBtn,header) =>{
    if (burgerBtn.classList.contains("burger--active")) {
        burgerBtn.classList.remove("burger--active");
        header.classList.remove("header--active-nav");
        scrollToggle(burgerBtn, "burger--active", header);
    }
};

export const clickBtn =  (burgerBtn,header)=> {
    header.classList.toggle("header--active-nav");
    burgerBtn.classList.toggle("burger--active");
    // блокируем/возобновляем скролл страницы
    scrollToggle(burgerBtn, "burger--active", header);
}