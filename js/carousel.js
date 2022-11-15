// Editar características de la galería de imágenes
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0, //50
      stretch: -10, //0
      depth: 0, //100
      modifier: 1,
      slideShadows: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    // },
  });