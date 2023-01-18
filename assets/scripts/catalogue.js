//catalogue

// document.addEventListener("DOMContentLoaded", function(event){

// async function getData() {
// 	const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ufnf8skn');
// 	const data = await response.json();
// 	console.log(data);
// };

// async function main() {
	// const allMovies = await getData();
	// let currentPage = 1;
	// let movies = 12;

// 	function displayMovies(arrData, moviesPerPage, page) {
// 		const movieContainer = document.querySelector('.movie-result');
// 		movieContainer.innerHTML = "";

// 		const start = moviesPerPage * page;
// 		const end = start + moviesPerPage;
// 		paginatedData = arrData.slice(start, end);

// 		paginatedData.forEach((movie) => {
// 			movieContainer.innerHTML += `<a href="./movieCard.html" class="movie-card__link"><div class="movie-card">
//                     <img width="100px" height='100px' src='${movie.image}' alt="Movie Poster." class="movie-card__img">
//                     <p class="movie-card__title">${movie.fullTitle}</p>
//                 </div></a>`});
// 	};


// 	// function displayPagination() {}
// 	// function displayPaginationBtn() {}

// 	displayMovies(allMovies, movies, currentPage);
// };

// main();

// })

// document.addEventListener('DOMContentLoaded', function (event) {
// 	getMovies = async () => {
// 		const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ufnf8skn');
// 		const allMovies = await response.json();
		
// 		show(allMovies, movies, currentPage);
// 	};
		
// 		let currentPage = 1;
// 		let movies = 12;

// 	function show(arrData, moviesPerPage, page) {
		
// 		const start = moviesPerPage * page;
// 		const end = start + moviesPerPage;
// 		paginatedData = arrData.slice(start, end);

// 		allMovies.items.forEach((movie) => {
// 			movieContainer.innerHTML += `<a href="./movieCard.html" class="movie-card__link"><div class="movie-card">
//                     <img width="100px" height='100px' src='${movie.image}' alt="Movie Poster." class="movie-card__img">
//                     <p class="movie-card__title">${movie.fullTitle}</p>
//                 </div></a>`;
// 		});
// 	}

// 	function displayPagination(arrData, moviesPerPage) {
//     	const paginationEl = document.querySelector('.pagination');
//     	const pagesCount = Math.ceil(arrData.length / moviesPerPage);
//     	const ulEl = document.createElement("ul");
//     	ulEl.classList.add('pagination__list');

//     	for (let i = 0; i < pagesCount; i++) {
//       		const liEl = displayPaginationBtn(i + 1);
//       		ulEl.appendChild(liEl)
//     }
//     paginationEl.appendChild(ulEl)
//   }


//   	function displayPaginationBtn(page) {
//     	const liEl = document.createElement("li");
//     	liEl.classList.add('pagination__item');
//     	liEl.innerText = page;

//    		 if (currentPage == page) liEl.classList.add('pagination__item_active');

//     liEl.addEventListener('click', () => {
//       currentPage = page
//       displayList(postsData, rows, currentPage)

//       let currentItemLi = document.querySelector('li.pagination__item--active');
//       currentItemLi.classList.remove('pagination__item--active');

//       liEl.classList.add('pagination__item--active');
//     })

//     return liEl;
//   }

//   getMovies();
//   displayPagination(allMovies, moviesPerPage)

// });

//search
const search = document.querySelector(".catalogue-inputs__search");
const form = document.querySelector(".catalogue-inputs");
const movieContainer = document.querySelector('.movie-result');

form.addEventListener("submit", (e) => {
	e.preventDefault();

	if (search.value == "") {
		movieContainer.innerHTML = `<p class="subtitle">No Results found</p>`;
	} else {
		getSearch = async () => {
		const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_ufnf8skn/${search.value}`);
		const allSearchMovies = await response.json();
		console.log(allSearchMovies);

		allSearchMovies.results.forEach((movie) => {
			movieContainer.innerHTML += `<a href="./movieCard.html" class="movie-card__link"><div class="movie-card">
                    <img src='${movie.image}' alt="Movie Poster." class="movie-card__img">
                    <p class="movie-card__title">${movie.title}</p>
                </div></a>`;
		});
	};
		getSearch();
		search.value = "";
	}
})

// sorting
const genreInput = document.querySelector(".catalogue-inputs__select_genre");
// const URLSorting = "https://imdb-api.com/API/AdvancedSearch/k_ufnf8skn?genres=";

genreInput.addEventListener("change", (e) => {
	switch (genreInput.value) {
		case "Action" : 
		getGenre = async () => {
		const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_ufnf8skn?genres=${genreInput.value}`);
		const actionMovies = await response.json();
		console.log(actionMovies);
		actionMovies.results.forEach((movie) => {
			movieContainer.innerHTML += `<a href="./movieCard.html" class="movie-card__link"><div class="movie-card">
                    <img width="100px" height='100px' src='${movie.image}' alt="Movie Poster." class="movie-card__img">
                    <p class="movie-card__title">${movie.title}</p>
                </div></a>`;
		})};
		break;
	}
})

//clickable cards

//pagination
