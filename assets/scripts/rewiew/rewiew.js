const cardList = document.querySelector('.wraper');
const adminBtn = document.querySelector('.forma_submit');
const wraper = document.querySelector('.wraper');
const array = [];

let data = localStorage.getItem('obj')
	? JSON.parse(localStorage.getItem('obj'))
	: array;

localStorage.setItem('obj', JSON.stringify(data));

const stor = JSON.parse(localStorage.getItem('obj'));

const rewiews = (obj) => {
	const block = document.createElement('div');
	block.className = 'comment';

	const div = document.createElement('div');
	div.className = 'comment_commentator';

	const name = document.createElement('p');
	name.className = 'comment_name';
	name.textContent = obj.name;

	const rating = document.createElement('p');
	rating.className = 'comment_rating';
	rating.textContent = `${obj.rating}/10`;

	const comment = document.createElement('p');
	comment.className = 'comment_first';
	comment.textContent = obj.comment;

	const line = document.createElement('hr');
	line.className = 'long-lines';

	block.append(div);
	div.append(name);
	div.append(rating);
	block.append(comment);
	cardList.append(line);

	return block;
};

const addRewiews = (element, conteiner) => {
	console.log(conteiner);
	const item = rewiews(element);
	conteiner.append(item);
};

adminBtn.addEventListener('click', () => {
	let radios = document.getElementsByName('rating');
	let radioSelected = Array.from(radios).find((radio) => radio.checked);
	let raiting = +radioSelected.value;
	const obj = {
		rating: raiting,
		name: document.getElementById('name').value,
		comment: document.getElementById('rewiew').value,
	};
	array.push(obj);

	localStorage.setItem('obj', JSON.stringify(array));

	addRewiews(obj, cardList);

	radioSelected.value = '';
	document.getElementById('name').value = '';
	document.getElementById('rewiew').value = '';
});

// Object.keys(stor).forEach((item) => {
// 	rewiews(item);
// });

window.addEventListener('DOMContentLoaded', (event) => {
	stor.forEach((i) => {
		addRewiews(i, wraper);
	});
});