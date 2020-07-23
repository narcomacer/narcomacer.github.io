function openText(e) {
    e.classList.toggle('landings__card__arrow-up');
    e.parentNode.querySelector('.landings__card__text').classList.toggle('landings__card__text--full');
}