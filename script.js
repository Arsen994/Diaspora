let phrases = [
  { text: 'Полина,когда видит Зота', image: 'tenor2.gif' },
  { text: 'мы на физре', image: 'tenor3.gif' },
  { text: 'когда Артем пошутил', image: 'tenor4.gif' },
  { text: 'Польский шпион в молодости', image: 'tenor5.gif' },
  { text: 'отдохните', image: 'tenor6.gif' },
  { text: 'Просто без слов', image: 'tenor7.gif' },
  { text: 'Любителям котов и кошек посвящается', image: 'tenor8.gif' },
  { text: 'надеюсь, пятерку поставят', image: 'tenor9.gif' },
  { text: 'я не знаю кто это, может Артем', image: 'tenor10.gif' },
  { text: 'салам', image: 'tenor11.gif' }
];

function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases);
  smoothly(phrase, 'textContent', randomElement.text)
  smoothly(image, 'src', randomElement.image)

  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});
for (let i = 0; i <= 2; i = i + 1) {
smoothly(phrase, 'textContent', phrases[i].text); 
smoothly(image, 'src', phrases[i].image);
} 