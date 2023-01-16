//catalogue
const movieContainer = document.querySelector('.movie-result');

document.addEventListener('DOMContentLoaded', function (event) {
	getMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ufnf8skn');
		const allMovies = await response.json();
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			movieContainer.innerHTML += `<a href="./movieCard.html" class="movie-card__link"><div class="movie-card">
                    <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.fullTitle}</p>
                </div></a>`;
		});
	}
});

//load more

