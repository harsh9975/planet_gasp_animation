//Parallax
let scene = document.getElementById("scene");
let parallaxInstance = new Parallax(scene);

//SWIPER
let keys = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neputne"
];

let slider = new Swiper(".swiper-container",{
    slidesPerView: "auto",
    spaceBetween: 150,
    centeredSlides: true,
    mousewheel: true,
    pagination:{
        el: ".planet-links",
        clickable: true,
        renderBullet: function(index, className){
            return '<div class="'+ className + '">' + keys[index] + "</div>"
        }
    }
});