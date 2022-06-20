function menuElement() {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');

    menu.appendChild(makeItem('Island Coastal Lager', '5'));
    menu.appendChild(makeItem('Sour Monkey', '8'));
    menu.appendChild(makeItem('Wiseman IPA', '10'));
    menu.appendChild(makeItem('Giant Pretzel', '$12'));
    menu.appendChild(makeItem('Italian Sub', '10'));
    menu.appendChild(makeItem('Margherita Pizza', '15'));


    return menu;
}

function makeItem(name, price) {
    const item = document.createElement('div');
    item.classList.add('item');

    const photo = document.createElement('img');
    photo.setAttribute('src', `images/${name}.jpeg`)

    const description = document.createElement('p');
    description.textContent = name + ', $' + price;

    item.appendChild(photo);
    item.appendChild(description);
    return item;
}

function addMenuElement() {
    const main = document.getElementById('main');
    main.innerHTML = '';
    main.appendChild(menuElement());
}

export default addMenuElement;