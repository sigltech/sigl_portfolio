const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'flip',

    flipEffect: {
        slideShadows: false,
      },

    autoplay: {
        delay: 6000,
        disableOnInteraction: true,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
