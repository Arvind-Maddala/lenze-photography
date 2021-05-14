

const navBurger = () => {
  const burger = document.querySelector('.burger-menu');
  const nav = document.querySelector('.navbar-links');
  const navLinks = document.querySelectorAll(".navbar-links li");

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

const imgFilter = () => {
    let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let targetData = this.getAttribute('data-target');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('delete');

            if(sortItem[k].getAttribute('data-item') == targetData || targetData == "all"){
                sortItem[k].classList.remove('delete');
                sortItem[k].classList.add('active');
            }
        }
    });
}
}

const scrollButtonJS = ()=>{
    const scrollButton = document.getElementById('scroll-button');
    scrollButton.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        })
    })

}




navBurger();
imgFilter();
scrollButtonJS();