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
	ratingForm.value = "Rating";

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
		allSearchMovies.forEach((movie) => {
			const movieEl = document.createElement("div");
    		movieEl.classList.add("movie");
    		movieEl.innerHTML = `<div class="movie-card">
                    <img src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.fullTitle}</p><p class="movie-card__rating">Rating:<b>${movie.imDbRating}<b></p>
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
    	<h1 class="spiderMan">${respData.title}</h1>
		<button class="modal__button-close">X</button>
    <div class="rating">
        <p>Rating: ${respData.imDbRating}/a>
    </div>
    <div class="list">
        <a class="icon"><img src="${respData.image}" alt="icon"></a>
        <ul class="person">
            <li>Year</li>
            <li>Country</li>
            <li>Genres</li>
        </ul>
        <ul class="person-value">
            <li>${respData.year}</li>
            <li>${respData.countries}</li>
            <li>${respData.genres}</li>
        </ul>
    </div>
    <div class="description">${respData.plot}</div>
    <div>
        <p class="reviews">Reviews</p>
        <div class="comment">
            <div class="comment_commentator">
                <p>Natalia</p>
                <p>6/10</p>
            </div>
            <p class="comment_first">Peter Parker's life and reputation are in jeopardy as Mysterio reveals Spider-Man's
                identity to the world. In an attempt to rectify the situation, Peter turns to Stephen Strange for help,
                but things soon become much more dangerous.</p>
        </div>
        <hr class="long-line">
        <div class="comment">
            <div class="comment_commentator">
                <p>Ostin</p>
                <p>6/10</p>
            </div>
            <p class="comment_first">Peter Parker's life and reputation are in jeopardy as Mysterio reveals Spider-Man's
                identity to the world. In an attempt to rectify the situation, Peter turns to Stephen Strange for help,
                but things soon become much more dangerous. Peter Parker's life and reputation are in jeopardy as
                Mysterio reveals Spider-Man's identity to the world.</p>
        </div>
        <hr class="long-line">
    </div>
    <div class="forma">
        <p class="forma_rewiew">Leave Your Review</p>
        <div class="rating-area">
            <a class="forma_rating">Your Rating: </a>
            <input type="radio" id="star-10" name="rating" value="10">
            <label for="star-10" title="Оценка «10»"></label>
            <input type="radio" id="star-9" name="rating" value="9">
            <label for="star-9" title="Оценка «9»"></label>
            <input type="radio" id="star-8" name="rating" value="8">
            <label for="star-8" title="Оценка «8»"></label>
            <input type="radio" id="star-7" name="rating" value="7">
            <label for="star-7" title="Оценка «7»"></label>
            <input type="radio" id="star-6" name="rating" value="6">
            <label for="star-6" title="Оценка «6»"></label>
            <input type="radio" id="star-5" name="rating" value="5">
            <label for="star-5" title="Оценка «5»"></label>
            <input type="radio" id="star-4" name="rating" value="4">
            <label for="star-4" title="Оценка «4»"></label>
            <input type="radio" id="star-3" name="rating" value="3">
            <label for="star-3" title="Оценка «3»"></label>
            <input type="radio" id="star-2" name="rating" value="2">
            <label for="star-2" title="Оценка «2»"></label>
            <input type="radio" id="star-1" name="rating" value="1">
            <label for="star-1" title="Оценка «1»"></label>
        </div>
        <textarea rows="8" placeholder="Your Review" class="forma_textarea"></textarea>
        <div class="forma_button"><button class="forma_submit">Submit</button></div>
    </div>
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