// начало слайдера
const images = document.querySelectorAll('.slider-mini__container .slider-mini__slider-line img');
const sliderLine = document.querySelector('.slider-mini__slider-line');
let count = 0;
let width;

function init() {
	width = document.querySelector('.slider-mini__container').offsetWidth;
	sliderLine.style.width = width/5 * images.length + 'px';
	images.forEach(item => {
		item.style.width = width + 'px';
		item.style.height = 'auto';
	});
	rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-mini__btn-next').addEventListener('click', function () {
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
});

document.querySelector('.slider-mini__btn-prev').addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = images.length - 1;
	}
	rollSlider();
});

function rollSlider() {
	const screenSize = window.innerWidth;
	sliderLine.style.transform = 'translate(-' + count * width/9 + 'px)';
	if (screenSize > 1180) {
		sliderLine.style.transform = 'translate(-' + count * width/7 + 'px)';
	} 
	else if (screenSize > 700) {
		sliderLine.style.transform = 'translate(-' + count * width/3 + 'px)';
	} 
	else if (screenSize > 500) {
		sliderLine.style.transform = 'translate(-' + count * width/2 + 'px)';
	}
}
// конец слайдера

// записываю id фильма в sessionStorage
const selectMovie = document.querySelectorAll('.slider-mini__img').getAttribute("id");
selectMovie.addEventListener('click', function saveIdMovie() {
	let idMovie = id.value;
	sessionStorage.setItem((idValue, idMovie));
});
// конец записи id фильма в sessionStorage

const movieContainer = document.querySelector('.movie-result');
document.addEventListener('DOMContentLoaded', function (event) {
	getMovies = async () => {
		let getId = JSON.parse(sessionStorage.getItem(idValue));
		const response = await fetch(
			'https://imdb-api.com/en/API/Title/k_sv52rf1y/${movie.image}'
		);
		const allMovies = await response.json();
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			movieContainer.innerHTML += `<div class="movie-card">
                    <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.title}</p>
					<p class="movie-card__title">${movie.directors}</p>
					<p class="movie-card__title">${movie.stars}</p>
                </div>`;
		});
	}
});
// // конец скрипта для получения id фильма из sessionStorage и вывода его на страницу











// это примеры из моих старых домашек по js, чтобы не подгружать новые файлы js в проект

// скрипт для получения id фильма из sessionStorage и вывод его на страницу
// function showMovie() {
// 	let heroes = JSON.parse(json);
// 	let heroesContent = ""; 
// 	let getId = JSON.parse(sessionStorage.getItem(idValue));
// 	for(let hero of heroes) {
// 		heroesContent += `<div class="card">
// 		<div><img src="${hero.photoSrc}" alt="${hero.name}"></div>
// 		<h2 class="card__title">${hero.name}</h2>
// 		<p><span class="card__subtitle">Вселенная: </span><span class="card__text">${hero.universe}</span></p>
// 	</div>`;
// 	}
// 	document.querySelector(".main__card").innerHTML = heroesContent;
// }
// // конец скрипта для получения id фильма из sessionStorage и вывода его на страницу



// получение из imdb
// const movieContainer = document.querySelector('.movie-result');
// document.addEventListener('DOMContentLoaded', function (event) {
// 	getMovies = async () => {
// 		const response = await fetch(
// 			'https://imdb-api.com/en/API/Title/k_sv52rf1y/tt1630029'
// 		);
// 		const allMovies = await response.json();
// 		show(allMovies.items);
// 	};
// 	getMovies();

// 	function show(allMovies) {
// 		allMovies.forEach((movie) => {
// 			movieContainer.innerHTML += `<div class="movie-card">
//                     <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
//                     <p class="movie-card__title">${movie.title}</p>
// 					<p class="movie-card__title">${movie.directors}</p>
// 					<p class="movie-card__title">${movie.stars}</p>
//                 </div>`;
// 		});
// 	}
// });
//конец получение из imdb











// получение из api информации о фильме через id фильма imdb с помощью fetch
// document.addEventListener("DOMContentLoaded", function (event) {

// 	fetch('https://imdb-api.com/en/API/Title/k_sv52rf1y/tt1630029')
// 	.then(response => response.json())
// 	.then(movie => {
// 		document.querySelector('.title').innerHTML = movie.title;
// 		document.querySelector('.directors').innerHTML = movie.directors;
// 		document.querySelector('.stars').innerHTML = movie.stars;
// 		document.querySelector('.image').src = movie.image;
// 	})

// 	});
//конец  получение из api информации о фильме через id фильма imdb с помощью fetch




// получение из api информации о фильме через id фильма imdb с помощью fetch и строительство html структуры с помощью js
// const movieContainer = document.querySelector('.movie-result');
// document.addEventListener('DOMContentLoaded', function (event) {
// 	getMovies = async () => {
// 		const response = await fetch(
// 			'https://imdb-api.com/en/API/Title/k_sv52rf1y/tt1375666'
// 		);
// 		const allMovies = await response.json();
// 		show(allMovies.items);
// 	};
// 	getMovies();

// 	function show(allMovies) {
// 		allMovies.forEach((movie) => {
// 			movieContainer.innerHTML += `<div class="movie-card">
//                     <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
//                     <p class="movie-card__title">${movie.fullTitle}</p>
//                 </div>`;
// 		});
// 	}
// });
//конец получение из api информации о фильме через id фильма imdb с помощью fetch и строительство html структуры с помощью js




// скрипт домашки база супергероев
// // подгружаю скрипт при загрузке страницы, получаю информацию из json, вызываю функции для генерации разметки и получения оценок из local storage
// document.addEventListener("DOMContentLoaded", function(event){
// 	let heroes = JSON.parse(json);
// 	showHeroes();
// 	getRate();
//   });

//   //создаю разметку и отправляю на страницу информацию из json
//   function showHeroes() {
// 	let heroes = JSON.parse(json);
// 	let heroesContent = ""; 
// 	for(let hero of heroes) {
// 		heroesContent += `<div class="card">
// 		<div><img src="${hero.photoSrc}" alt="${hero.name}"></div>
// 		<h2 class="card__title">${hero.name}</h2>
// 		<p><span class="card__subtitle">Вселенная: </span><span class="card__text">${hero.universe}</span></p>
// 		<p><span class="card__subtitle">Альтер Эго: </span><span class="card__text">${hero.alterEgo}</span></p>
// 		<p><span class="card__subtitle">Род деятельности: </span><span class="card__text">${hero.occupation}</span></p>
// 		<p><span class="card__subtitle">Друзья: </span><span class="card__text">${hero.friends}</span></p>
// 		<p><span class="card__subtitle">Суперсилы: </span><span class="card__text">${hero.superPower}</span></p>
// 		<p><span class="card__subtitle">Подробнее: </span><p class="card__text">${hero.details}</p></p>
// 	</div>
// 	<div class="card__title ">Ваша оценка: </div>
// 	  <select name="rate" id="${hero.name}">
// 	  <option value="1">1</option>
// 	  <option value="2">2</option>
// 	  <option value="3">3</option>
// 	  <option value="4">4</option>
// 	  <option value="5">5</option>
// 	  </select>
// 	  <button class="btn" onclick='saveRate()'>Отправить оценку</button>
// 		  </div>`;
// 	}
// 	document.querySelector(".main__card").innerHTML = heroesContent;
//   }

//   //функция для сохранения оценок в local storage
//   function saveRate() {
// 	let heroes = JSON.parse(json);
// 	let select = document.querySelectorAll('select');
// 		for( i=0; i<heroes.length; i++){
// 		  let selectHero= select[i].value;
// 		  localStorage.setItem(heroes[i].name, selectHero);
// 		}
//   }

//   //функция для получения оценок из local storage
//   function getRate() {
// 	let heroes = JSON.parse(json);
// 	let select =document.querySelectorAll('select');
// 		for(i=0; i<heroes.length; i++){
// 	if (localStorage.getItem(heroes[i].name) != null){
// 		select[i].value= JSON.parse(localStorage.getItem(heroes[i].name));
// 	}}
//   }
// конец скрипта домашки база супергероев





// скрипт домашка получение из api через fetch запрос
// document.addEventListener("DOMContentLoaded", function (event) {

// 	fetch('https://api.nasa.gov/planetary/apod?api_key=1PmGMa75hCmBHTCNfjxabuhMbQHaes4kVJd8Mr3h')
// 	  .then(response => response.json())
// 	  .then(galaxy => {
// 		document.querySelector('.title').innerHTML = galaxy.title;
// 		document.querySelector('.date').innerHTML = galaxy.date;
// 		document.querySelector('.description').innerHTML = galaxy.explanation;
// 		document.querySelector('.img').src = galaxy.hdurl;
// 	})

// 	});
// конец скрипта домашка получение из api через fetch запрос




// // скрипт на localStorage из домашки
// "use strict";

// const form = document.querySelector('form');
// const text = document.querySelector('.text');
// const list = document.querySelector('.list');
// const button = document.querySelector('.deleteButton');

// // 11.let array = *localStorage.getItem('item') получаем значение из локального хранилища* *? спрашиваем, если в локальном хранилище есть значения с ключом item, которые мы можем взять, то записываем их в массив JSON.parse(localStorage.getItem('item'))* * а если в хранилище ничего нет, то пустой массив : []* ;
// let array = localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')): [];
// localStorage.setItem('item', JSON.stringify(array));

// // 12.берем значение по ключу из локального хранилища,преобразовываем из вида ключ-значение и складываем в массив
// const storage = JSON.parse(localStorage.getItem('item'));

// // 4.создаем функцию для добавления li при добавлении новой заметки
// let createLi = (note) => {
// 	// 5.создаем новый пункт списка li
// 	let li = document.createElement('li');
// 	// 6.добавляем текст заметки в новый li
// 	li.textContent = note;
// 	// 7.добавляем новый li в начало
// 	list.append(li);
// }

// form.addEventListener('submit', function(event){
// 	// 2.предотвращаем автоматическую отправку формы
// 	event.preventDefault();
// 	// 3.добавляем новые введенные заметки в массив
// 	array.push(text.value);
// 	// 10.сохраняем заметки в local storage и преобразуем значение предаваемого масива через JSON.stringify
// 	localStorage.setItem(('item'), JSON.stringify(array));
// 	// 8.добавляем текст новой заметки, введенной пользователем, при вызове фукции в функцию
// 	createLi(text.value);
// 	// 9.очищаем инпут ввода после заметки
// 	text.value = '';
// });

// // 13.проходимся по массиву и для каждого элемента создаем li
// storage.forEach(element => {
// 	createLi(element);
// });
// // конец скрипта на localStorage из домашки