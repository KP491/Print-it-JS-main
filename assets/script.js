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

  displaySlide();
})


arrow_right.addEventListener('click', () => {

  currentIndex++;
  if (currentIndex === 4) {
       currentIndex = 0
  console.log(currentIndex)
  }
  displaySlide();
  
})
const bannerImg = document.querySelector('.banner-img');



bannerImg.src = "./assets/images/slideshow/slide3.jpg"

const dots = document.querySelector('.dots')
//boucle 'for' pour générer les bullet points
for(let i=0; i<4;i++){
  const span = document.createElement('span');
  span.classList.add("dot");

  if(i===0){
    span.classList.add("dot_selected");
  }

span.addEventListener('click', () => {

  currentIndex = i;

displaySlide();
})


  dots.appendChild(span)
}

const displaySlide = () => {
  const bannerImg = document.querySelector('.banner-img');
  bannerImg.src = "./assets/images/slideshow/" + slides[currentIndex].image
  activeBulletPoint();
}

const activeBulletPoint = () =>{
  const activedot = document.querySelector('.dot_selected');
  activedot.classList.remove('dot_selected');

  const listDots = document.querySelectorAll('.dot');
  listDots[currentIndex].classList.add('dot_selected');
}


