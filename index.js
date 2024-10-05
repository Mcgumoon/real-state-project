const sidebar = document.querySelector('.sideMenu')
const menuBtn = document.querySelector('.menuBtn')
const carouselBtn = document.querySelectorAll("[data-carouselBtn]")

let active = false

function toggleMenu(){
    if(active){
        sidebar.classList.remove('show')
        menuBtn.classList.remove('change')
        active = !active;
        return active;
    } else {
        sidebar.classList.add('show')
        menuBtn.classList.add('change')
        active = !active;
        return active;
    }
}

carouselBtn.forEach(element => {
    element.addEventListener("click", () =>{
        const offset = element.dataset.carouselBtn === "next" ? 1 : -1
        const slide = element.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slide.querySelector("[data-active]")

        let newIndex = [...slide.children].indexOf(activeSlide) + offset

        if(newIndex < 0) newIndex = slide.children.length - 1
        if(newIndex >= slide.children.length) newIndex = 0

        slide.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
});