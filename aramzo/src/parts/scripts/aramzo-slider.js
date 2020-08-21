// slider
function MoveSlideTo(direction) {

    let overlay = () => document.querySelector('.journal__overlay').classList.toggle('d-b');

    overlay();


    let cicle = {
        // объект считающий по кольцу конечного числа номеров
        counter: 0,
        number_of_items: 1,
        countPlus: function() {
            if (this.number_of_items <= 1) return;
            if (this.counter != (this.number_of_items - 1)) {
                this.counter += 1;
                return;
            } else {
                this.counter = 0;
                return;
            }

        },
        countMinus: function() {
            if (this.number_of_items <= 1) return;
            if (this.counter != 0) {
                this.counter -= 1;
                return;
            } else {
                this.counter = this.number_of_items - 1;
                return;
            }

        }
    }

    var slides = document.querySelectorAll('.journal__slide');



    cicle.number_of_items = slides.length;

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("a-s")) {
            cicle.counter = i;
        }
    }



    if (direction == 'left') {
        // slides[cicle.counter].classList.toggle('move__left');
        slides[cicle.counter].classList.toggle('a-s');
        let run = function(n) {

            // slides[cicle.counter].classList.toggle('move__left');
            cicle.countPlus();
            slides[cicle.counter].classList.toggle('a-s');
        }
        setTimeout(run, 500, 1);

    }

    if (direction == 'right') {
        // slides[cicle.counter].classList.toggle('move__right');
        slides[cicle.counter].classList.toggle('a-s');
        let run = function(n) {
            // slides[cicle.counter].classList.toggle('move__right');
            cicle.countMinus();
            slides[cicle.counter].classList.toggle('a-s');
        }


        setTimeout(run, 500, -1);



    }
    setTimeout(overlay, 500);

};
//