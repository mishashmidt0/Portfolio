export const sectionObserve = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const navLinks = document.querySelectorAll(".nav__link");
            navLinks.forEach(link => link.classList.remove("nav__link--active"))

            navLinks.forEach(link => {
                if( link.getAttribute("data-id") === entry.target.id) link.classList.add("nav__link--active")
            })
        }
    })

}, { threshold: .4})



