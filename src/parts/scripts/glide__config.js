var glide1 = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 3,
    breakpoints: {
        1024: {
            perView: 2
        },
        600: {
            perView: 1
        }
    }
});


if (window.matchMedia("(max-width: 1200px)").matches) {
    var glide2 = new Glide('.glide2', {
        type: 'carousel',
        startAt: 0,
        perView: 1,

    });

    glide2.mount();
}



glide1.mount();