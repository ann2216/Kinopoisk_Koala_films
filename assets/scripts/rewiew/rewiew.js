const cardList = document.querySelector('.wraper');
const adminBtn = document.querySelector('.forma_submit');

let data = localStorage.getItem('item')? JSON.parse(localStorage.getItem('item')): ;
localStorage.setItem('obj', JSON.stringify(data));

const storage = JSON.parse(localStorage.getItem('items'));

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
}

const addRewiews = (element, conteiner) => {
const item = rewiews(element);
conteiner.append(item);
}

adminBtn.addEventListener('click', () => {
    let radios = document.getElementsByName('rating');
    let radioSelected = Array.from(radios).find((radio) => radio.checked);
    let raiting = +radioSelected.value;
    const obj = {
        rating: raiting,
        name: document.getElementById('name').value,
        comment: document.getElementById('rewiew').value,
    }
    localStorage.setItem('obj', JSON.stringify('data'));
    addRewiews(obj, cardList);
    
    radioSelected.value = '';
    document.getElementById('name').value = '';
    document.getElementById('rewiew').value = '';
    
})


