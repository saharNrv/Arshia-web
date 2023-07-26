const menuBtn=document.querySelector('.menu-btn')
const dashbord=document.querySelector('.dashbord')
const bg=document.querySelector('.bg')
const menuLine=document.querySelector('.menu-line')


menuBtn.addEventListener('click',function(){
   dashbord.classList.toggle('dashbord-show')
   bg.classList.toggle('bg-show')
   menuBtn.classList.toggle('menu-show')
   menuLine.classList.toggle('close')
   menuLine.classList.toggle('menu-line-bg')

})

bg.addEventListener('click',function(){
    dashbord.classList.toggle('dashbord-show')
    bg.classList.toggle('bg-show')
    menuBtn.classList.toggle('menu-show')
    menuLine.classList.remove('close')
    menuLine.classList.toggle('menu-line-bg')
   

 
})