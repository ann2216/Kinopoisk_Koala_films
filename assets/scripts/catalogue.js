//catalogue

// const movieContainer = document.querySelector('.movie-result');

// document.addEventListener('DOMContentLoaded', function(event) {
//     getMovies = async() => {
//     const response = await fetch('https://imdb-api.com/en/API/Posters/k_ufnf8skn/tt1375666');
//     let allMovies = await response.json();
//     console.log(allMovies);
//     // let movieResult = '';
//     // for (let movie of allMovies) {
//     //     movieResult += 
//     //     `<div class="movie-card">
//     //             <img src="${movie.link}" alt="" class="movie-card__img">
//     //             <p class="movie-card__title">${movie.fullTitle}</p>
//     //         </div>`
//     // }
//     }
   
//     getMovies();

//     movieContainer.innerHTML = movieResult;
// })

// const movieContainer = document.querySelector('.movie-result');

// document.addEventListener('DOMContentLoaded', function(event) {
//     getMovies = async() => {
//     const response = await fetch('https://imdb-api.com/en/API/Top250Movies/k_ufnf8skn');
//     const allMovies = await response.json();
//     console.log(allMovies.items);
//     const parsedMovies = allMovies.items;
    
//     function show(parsedMovies) {
//     for (let movie of parsedMovies) {
//         movie += `<a class="movie-card__link"><div class=“movie-card”>
//                 <img src=“${movie.image}” alt=“” class=“movie-card__img”>
//                 <p class=“movie-card__title”>${movie.fullTitle}</p>
//             </div></a>`;

//             movieContainer.innerHTML += movie;
//     }};

//     show(parsedMovies);
//     }
   
//     getMovies();
// })

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
			movieContainer.innerHTML += `<div class="movie-card">
                    <img width="100px" height='100px' src='${movie.image}' alt="" class="movie-card__img">
                    <p class="movie-card__title">${movie.fullTitle}</p>
                </div>`;
		});
	}
});