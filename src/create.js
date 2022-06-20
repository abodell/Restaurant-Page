import addHomeElement from './home'
import addMenuElement from './menu'
import addContactElement from './contact'

function headerElement() {
    const header = document.createElement('div');
    const name = document.createElement('div');
    header.setAttribute('id', 'header');
    name.setAttribute('id', 'name');
    name.textContent = 'Clemson Biergarten'
    header.appendChild(name);
    header.appendChild(navElement());

    return header;
}

function navElement() {

    const nav = document.createElement('div');
    nav.setAttribute('id', 'nav');

    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home';
    homeBtn.setAttribute('id', 'home');
    homeBtn.setAttribute('class', 'btn');
    homeBtn.addEventListener('click', addHomeElement);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute('id', 'Menu');
    menuBtn.setAttribute('class', 'btn');
    menuBtn.addEventListener('click', addMenuElement);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = 'Contact Us';
    contactBtn.setAttribute('id', 'contact');
    contactBtn.setAttribute('class', 'btn');
    contactBtn.addEventListener('click', addContactElement);

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function mainElement() {
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
    return main;
}

function footerElement() {
    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    const gitHub = document.createElement('a');
    gitHub.setAttribute('href', 'https://github.com/abodell');
    gitHub.textContent = 'Check out my Github';

    const photoA = document.createElement('a');
    photoA.setAttribute('href', 'https://github.com/abodell');

    const photo = document.createElement('img');
    photo.setAttribute('src', 'images/github.png');

    photoA.appendChild(photo);

    footer.appendChild(gitHub);
    footer.appendChild(photoA);

    return footer;
}

function initialize() {
    const content = document.getElementById('content');
    content.appendChild(headerElement());
    content.appendChild(mainElement());
    content.appendChild(footerElement());
    addHomeElement();
    return content;
}

export default initialize;