var glide1 = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        1024: {
            perView: 1
        }
    }
});

glide1.mount();