const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector(".arrow_left")
const arrow_right = document.querySelector(".arrow_right")

let currentIndex = 0;

arrow_left.addEventListener('click', () => {

  currentIndex--;
  if (currentIndex === -1) {
       currentIndex = 3
  console.log(currentIndex)
  }

  const bannerImg = document.querySelector('.banner-img');
  bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image
  
})


arrow_right.addEventListener('click', () => {

  currentIndex++;
  if (currentIndex === 4) {
       currentIndex = 0
  console.log(currentIndex)
  }
  const bannerImg = document.querySelector('.banner-img');
  bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image
  
})
const bannerImg = document.querySelector('.banner-img');



bannerImg.src = "./assets/images/slideshow/slide3.jpg"

const dots = document.querySelector('.dots')

for(let i=0; i<4;i++){
  const span = document.createElement('span');
  span.classList.add("dot");

  if(i===0){
    span.classList.add("dot_selected");
  }
  dots.appendChild(span)
}


// let slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.querySelectorAll("#banner ol li");
//   let dots = document.querySelectorAll(".dots .bullet");

//   if (n >= slides.length) { slideIndex = 0 }
//   if (n < 0) { slideIndex = slides.length - 1 }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }

//   slides[slideIndex].style.display = "block";
//   dots[slideIndex].className += " active";
// }

// document.querySelectorAll(".arrow_left").forEach(button => {
//   button.addEventListener("click", () => plusSlides(-1));
// });

// document.querySelectorAll(".arrow_right").forEach(button => {
//   button.addEventListener("click", () => plusSlides(1));
// });

// // Mettre à jour le texte de l'élément <p> avec la tagLine actuelle
// const tagLine = slides[currentIndex].tagLine;
// document.querySelector('p').textContent = tagLine; // Utilisation de textContent pour éviter de traiter le texte comme du HTML

// // Afficher un message dans la console lors d'un clic sur une flèche, en indiquant la direction
// console.log(`Clic sur la flèche ${direction}`);
