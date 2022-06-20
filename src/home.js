function homeElement() {
    const intro = document.createElement('div');
    intro.setAttribute('id', 'intro');

    const photo = document.createElement('img');
    photo.setAttribute('src', 'images/bier.jpeg');
    
    const text1 = document.createElement('h1');
    text1.textContent = 'Welcome to the Biergarten!';

    const text2 = document.createElement('p');
    text2.textContent = "We offer the world's largest selection of draft beers!  Take a look at our enormous menu by clicking on the menu tab above.  For each of the 4 stories, we offer a different theme of beer.  Check out each floor in order to get the best experience!"

    intro.appendChild(photo);
    intro.appendChild(text1);
    intro.appendChild(text2);


    return intro;
}

function addHomeElement() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(homeElement());
}

export default addHomeElement;

