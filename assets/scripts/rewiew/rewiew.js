const cardList = document.querySelector('.all');
const adminBtn = document.querySelector('.forma_submit');

const rewiews = (obj) => {
    const block = document.createElement('div');
    block.className = "comment";

    const div = document.createElement('div');
    div.className = "comment_commentator";

    const name = document.createElement('p');
    name.className = "comment_name";
    // name.textContent = document.getElementById('name').value;

    const rating = document.createElement('p');
    rating.className = "comment_rating";
    // rating.textContent = document.getElementById('').value;

    const comment = document.createElement('p');
    comment.className = "comment_first";
    // comment.textContent = document.getElementById('rewiew').value;
    
    block.append(div);
    block.append(name);
    block.append(rating);
    block.append(comment);
    console.log(block);
    return block;
}

rewiews();


