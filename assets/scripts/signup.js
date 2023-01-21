const btnSignup = document.querySelector('.btn-signup');
const popup = document.querySelector('.popup');
const btnConfirmPopup = document.querySelector('.popup__button');

const openModalWindow = (popup) => {
	popup.classList.add('popup_is-opened');
	popup.classList.remove('popup');
};

btnSignup.addEventListener('click', (e) => {
	e.preventDefault();
	openModalWindow(popup);
	btnSignup.setAttribute('disabled', '');
});

btnConfirmPopup.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = 'index.html';
});