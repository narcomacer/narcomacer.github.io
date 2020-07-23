// Scroll page to id
const pageRoll = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute('href');

    document.querySelector(href).scrollIntoView(top);

}
const links = document.querySelectorAll('.nav__link:not(.nav__telephone)');


for (let i of links) {

    i.addEventListener('click', pageRoll);

}