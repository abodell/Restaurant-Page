function hoursElement() {
    const hours = document.createElement('div');
    hours.setAttribute('id', 'hours');

    const text = document.createElement('h1');
    text.textContent = 'Hours';

    hours.appendChild(text);
    hours.appendChild(makeHours('Mon-Thurs', 'Noon-9pm'));
    hours.appendChild(makeHours('Fri-Sat', 'Noon-2am'));
    hours.appendChild(makeHours('Sunday', 'Closed'));

    return hours;
}

function makeHours(days, hours) {
    const display = document.createElement('div');
    display.setAttribute('class', 'hour');
    const text1 = document.createElement('p');
    text1.textContent = days;
    const text2 = document.createElement('p');
    text2.textContent = hours;
    display.appendChild(text1);
    display.appendChild(text2);

    return display;
}

function infoElement() {
    const info = document.createElement('div');
    info.setAttribute('id', 'contacts');
    const text1 = document.createElement('h1');
    text1.textContent = 'Phone';

    const number = document.createElement('p');
    number.textContent = '864-292-8762';

    const text2 = document.createElement('h1');
    text2.textContent = 'Email';

    const email = document.createElement('p');
    email.textContent = 'clemsonbiergarten@gmail.com';
    info.appendChild(text1);
    info.appendChild(number);
    info.appendChild(text2);
    info.appendChild(email);

    return info;
}

function addContactElement() {
    const main = document.getElementById('main');
    main.appendChild(hoursElement());
    main.appendChild(infoElement());
}

export default addContactElement;