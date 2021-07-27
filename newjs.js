let sortBtn = document.querySelector('.gallery__tabs')
let tabs = document.querySelectorAll('.category');
const tabsContent = document.querySelectorAll('.gallery__image');


//HamBurger Menu
const navBurger = () => {
  const burger = document.querySelector('.navbar__burgerMenu');
  const nav = document.querySelector('.navbar__links');
  const navLinks = document.querySelectorAll(".navbar__links li");

  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
          link.style.animation = ""
      } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
  });
    //Burger Animation
  burger.classList.toggle("toggle");
  })
}



const scrollButtonJS = () =>
{
    const scrollButton = document.getElementById('scrollButton');
    scrollButton.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    })
}




navBurger();
scrollButtonJS();