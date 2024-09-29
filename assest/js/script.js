const nav1 = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
if (window.scrollY >= 100) {
nav1.classList.add('scroll-down')
}
else if (window.scrollY <= 100) {
nav1.classList.remove('scroll-down')
}
})

 
  AOS.init();
 
  new Swiper('.slider-wraper', {
     
    loop: true,
    gapCursor: true,
    spaceBetween: 10,
    autoplay:{
      delay:1500,
      disableOnInteraction:false
    },
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    //   clickablet: true,
    //   dynamicbulets:true,
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints:{

      0: {
        slidesPerView:2
      },

      576: {
        slidesPerView:3
      },

      768: {
        slidesPerView:4
      },

      1200: {
        slidesPerView:6
      },
    }
     
  });
