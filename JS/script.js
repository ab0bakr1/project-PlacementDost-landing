let Buy = document.getElementById("buy");
function openBuy(){
    Buy.style.display = "block";
}
function closeBuy(){
    Buy.style.display = "none";
}



let Talk1 = document.getElementById("talk1");
let Talk2 = document.getElementById("talk2");
let Talk3 = document.getElementById("talk3");
let Talk4 = document.getElementById("talk4");
let Talk5 = document.getElementById("talk5");


window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled >= 1100) {
        Talk1.style.opacity = "1";
        Talk2.style.opacity = "0";
        Talk3.style.opacity = "0";
        Talk4.style.opacity = "0";
        Talk5.style.opacity = "0";
    }if(scrolled >= 1400){
        Talk1.style.opacity = "0";
        Talk2.style.opacity = "1";
        Talk3.style.opacity = "0";
        Talk4.style.opacity = "0";
        Talk5.style.opacity = "0";
    }if(scrolled >= 1800){
        Talk1.style.opacity = "0";
        Talk2.style.opacity = "0";
        Talk3.style.opacity = "1";
        Talk4.style.opacity = "0";
        Talk5.style.opacity = "0";
    }if(scrolled >= 2200){
        Talk1.style.opacity = "0";
        Talk2.style.opacity = "0";
        Talk3.style.opacity = "0";
        Talk4.style.opacity = "1";
        Talk5.style.opacity = "0";
    }if(scrolled >= 2400){
        Talk1.style.opacity = "0";
        Talk2.style.opacity = "0";
        Talk3.style.opacity = "0";
        Talk4.style.opacity = "0";
        Talk5.style.opacity = "1";
    }if(scrolled >= 2600){
        Talk1.style.opacity = "0";
        Talk2.style.opacity = "0";
        Talk3.style.opacity = "0";
        Talk4.style.opacity = "0";
        Talk5.style.opacity = "0";
    }
})

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });