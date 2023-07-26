const menuBtn = document.querySelector('.menu-btn')
const mobailMenu = document.querySelector('.mobail-menu')
const mobailBtn = document.querySelector('.mobail-btn')
const cover = document.querySelector('.cover')

let isOpen = false

menuBtn.addEventListener('click', function () {

    if (isOpen) {
        mobailMenu.classList.add('mobil-menu-open')
        menuBtn.classList.add('menu-btn-close')
       


        isOpen = false
    } else {

        mobailMenu.classList.remove('mobil-menu-open')
     


        isOpen = true
    }


})

mobailBtn.addEventListener('click', function () {

    mobailMenu.classList.remove('mobil-menu-open')
    menuBtn.classList.remove('menu-btn-close')
})
////////////////Type///////////////////////

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString(' طراح سایت')
    .pauseFor(2500)
    .deleteChars(9)
    // .deleteAll()
    .typeString('توسعه دهنده ی وب')
    .pauseFor(2500)

    .start();


///////////////////////////////////////

const workItem=document.querySelectorAll('.work-item')

workItem.forEach(item=>{
    item.addEventListener('click',function(e){
        console.log(e.target);

        document.querySelector('.active').classList.remove('active')
        document.querySelector('.work-product-show').classList.remove('work-product-show')
        this.classList.add('active')

        let datawork=this.getAttribute('data-item')
        document.querySelector(datawork).classList.add('work-product-show')

    })
})

//////////////////////////////////////////
const swiper = new Swiper('.swiper', {
    slidesPerView:2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
  
      breakpoints: {
        300:{
            slidesPerView:1
        },
        576:{
            slidesPerView:1,
        },
        768: {
         slidesPerView: 2,
         
       },
       1200: {
         slidesPerView: 2,
       },
      
     }
   
  });

  //////////////////////////////////

