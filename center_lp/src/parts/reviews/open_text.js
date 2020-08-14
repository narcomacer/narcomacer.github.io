function openText(e) {
    e.classList.toggle('reviews__card__arrow-up');
    e.parentNode.querySelector('.reviews__card__text').classList.toggle('reviews__card__text--full');
}