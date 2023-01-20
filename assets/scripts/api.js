// получение 250 популярных фильмов из апи
const movieContainer = document.querySelector('.movie-result-popular');
document.addEventListener('DOMContentLoaded', function (event) {
	getMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/MostPopularMovies/k_sv52rf1y');
		const allMovies = await response.json();
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			movieContainer.innerHTML += `<div class="movie-card-popular">
                    <div class="movie-card__img-popular"><img class="movie-card__img-popular-container" src='${movie.image}' alt=""></div>
                    <div class="movie-card__info"><div class="movie-card__info-title">${movie.fullTitle}</div></div>
                </div>`;
		});
	}
});

// получение 250 популярных тв шоу из апи
const movieContainer2 = document.querySelector('.movie-result-popularTV');
document.addEventListener('DOMContentLoaded', function (event) {
	getMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/MostPopularTVs/k_sv52rf1y');
		const allMovies = await response.json();
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			movieContainer2.innerHTML += `<div class="movie-card-popular">
			<div class="movie-card__img-popular"><img class="movie-card__img-popular-container" src='${movie.image}' alt=""></div>
			<div class="movie-card__info"><div class="movie-card__info-title">${movie.fullTitle}</div></div>
		</div>`;
		});
	}
});