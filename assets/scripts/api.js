// получение 250 популярных фильмов из апи
const movieContainer = document.querySelector('.movie-result');
document.addEventListener('DOMContentLoaded', function (event) {
	getMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_sv52rf1y');
		const allMovies = await response.json();
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			movieContainer.innerHTML += `<div class="movie-card">
                    <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.fullTitle}</p>
                </div>`;
		});
	}
});

// получение 250 популярных фильмов из апи
const movieContainer2 = document.querySelector('.movie-result');
document.addEventListener('DOMContentLoaded', function (event) {
	getMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/Top250TVs/k_sv52rf1y');
		const allMovies = await response.json();
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			movieContainer2.innerHTML += `<div class="movie-card">
                    <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.fullTitle}</p>
                </div>`;
		});
	}
});