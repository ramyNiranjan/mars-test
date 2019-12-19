const hamburger=document.querySelector('.nav__hamburger');
const navItemsContainer=document.querySelector('.nav__items');
const navItem=document.querySelectorAll('.nav__item');
const line = document.querySelector('.nav__line');

hamburger.addEventListener('click',e=>{
  navItemsContainer.classList.toggle('open')
  line.classList.toggle('open')
  navItem.forEach(item=>{
    item.classList.toggle('open')
  })
})

let prevScrollpos = window.pageYOffset;
console.log(prevScrollpos)
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  console.log(currentScrollPos)
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav").style.top = "0";
  } else {
    document.querySelector(".nav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
