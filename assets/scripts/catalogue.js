const search = document.querySelector(".catalogue-inputs__search");
const searchForm = document.querySelector(".search-form");
const genreForm = document.querySelector(".genre-form");
const ratingForm = document.querySelector(".rating-form");
const genreInput = document.querySelector(".catalogue-inputs__select_genre");
const movieContainer = document.querySelector('.movie-result');
const modalEl = document.querySelector(".modal");

// catalogue
document.addEventListener('DOMContentLoaded', function (event) {
	genreInput.value = "Genre";

	getMovies = async () => {
		const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ufnf8skn/?limit=10');
		const allMovies = await response.json();
		console.log(allMovies);
		show(allMovies.items);
	};
	getMovies();

	function show(allMovies) {
		allMovies.forEach((movie) => {
			const movieEl = document.createElement("div");
    		movieEl.classList.add("movie");
    		movieEl.innerHTML = `<div class="movie-card">
                    <img src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.fullTitle}</p><p class="movie-card__rating">Rating:<b>${movie.imDbRating}<b></p>
                </div>`;

				movieEl.addEventListener("click", () => openModal(movie.id));
				movieContainer.appendChild(movieEl);
		});
	}
});

//search
searchForm.addEventListener("submit", (e) => {
	e.preventDefault();
	movieContainer.innerHTML = "";

	if (search.value == "") {
		movieContainer.innerHTML = `<p class="subtitle">Please enter a movie</p>`;
		};
		
	getSearch = async () => {
		const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_ufnf8skn/${search.value}`);
		const allSearchMovies = await response.json();
		console.log(allSearchMovies);

		if (allSearchMovies.results.length == 0) {
		movieContainer.innerHTML = `<p class="subtitle">No Results found</p>`;
		} else {
		allSearchMovies.results.forEach((movie) => {
			const movieEl = document.createElement("div");
    		movieEl.classList.add("movie");
    		movieEl.innerHTML = `<div class="movie-card">
                    <img src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.title}</p>
                </div>`;

				movieEl.addEventListener("click", () => openModal(movie.id));
				movieContainer.appendChild(movieEl);
		})
		}
	}
		getSearch();
		search.value = "";
	})
	

//filters	
genreForm.addEventListener("click", (e) => {
	getGenre = async () => {
		const response = await fetch(`https://imdb-api.com/API/AdvancedSearch/k_ufnf8skn?genres=${genreInput.value}`);
		const genreMovies = await response.json();
		movieContainer.innerHTML = "";

		genreMovies.results.forEach((movie) => {
			const movieEl = document.createElement("div");
    		movieEl.classList.add("movie");
    		movieEl.innerHTML = `<div class="movie-card">
                    <img src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.title}</p><p class="movie-card__rating">Rating:<b>${movie.imDbRating}<b></p>
                </div>`;

				movieEl.addEventListener("click", () => openModal(movie.id));
				movieContainer.appendChild(movieEl);
		})};	
		
		switch (genreInput.value) {
		case "Action" : 
			getGenre();
			break;
		case "Comedy":
			getGenre();
			break;
		case "Adventure":
			getGenre();
			break;
		case "Crime":
			getGenre();
			break;
		case "Animation":
			getGenre();
			break;
		case "Si-Fi":
			getGenre();
			break;
		case "Horror":
			getGenre();
			break;
	}
})

//modal
async function openModal(id) {
	const API_details = "https://imdb-api.com/en/API/Title/k_ufnf8skn/"
	const resp = await fetch(API_details + id);
	const respData = await resp.json();

	modalEl.classList.add("modal_show");
	document.body.classList.add("stop-scrolling");

	modalEl.innerHTML = `
	<div class="modal__card">
	<div class="modal__container">
    	<h1 class="modal__title subtitle">${respData.title}</h1>
		<button class="modal__button-close"></button>
	</div>
    <p class="modal__rating">Rating: ${respData.imDbRating}</p>
    <div class="modal__info">
        <img src="${respData.image}" alt="Movie Poster." class="modal__img">
        <ul class="modal__list">
            <li class="modal__item">Year<span class="modal__item-data">${respData.year}</span></li> 
            <li class="modal__item">Country<span class="modal__item-data">${respData.countries}</span></li> 
            <li class="modal__item">Genres<span class="modal__item-data">${respData.genres}</span></li> 
            <li class="modal__item">Cast<span class="modal__item-data">${respData.stars}</span></li> 
			<p class="modal__description">${respData.plot}</p>
        </ul>
		
    </div>
    
    <a href="movicCard.html" class="modal__button_more button">Learn more</a>
</div>`;
	const btnClose = document.querySelector(".modal__button-close");
	btnClose.addEventListener("click", () => closeModal());

	function closeModal() {
		modalEl.classList.remove("modal_show");  
		document.body.classList.remove("stop-scrolling");
}
}

window.addEventListener("click", (e) =>{
	if (e.target === modalEl) {
		closeModal();
	}
})

window.addEventListener("keydown", (e) => {
	if (e.keyCode === 27) {
		modalEl.classList.remove("modal_show");
		document.body.classList.remove("stop-scrolling");
	}
})