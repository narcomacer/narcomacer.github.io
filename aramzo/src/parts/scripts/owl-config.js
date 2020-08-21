//.......................Owl-config

$(document).ready(function() {
    $('#owl-carousel').owlCarousel({
        loop: false, //Зацикливаем слайдер
        margin: 0, //Отступ от элемента справа в 50px
        nav: true, //Отключение навигации
        autoplay: false, //Автозапуск слайдера
        dots: false,
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            },

            600: {
                items: 2
            }
        }
    });

    $('#carousel-2').owlCarousel({
        loop: false, //Зацикливаем слайдер
        margin: 10, //Отступ от элемента справа в 10px
        nav: true, //Отключение навигации
        autoplay: false, //Автозапуск слайдера
        dots: false,
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 1
            }


        }
    });

    $('#c-3').owlCarousel({
        loop: true, //Зацикливаем слайдер
        margin: 25, //Отступ от элемента справа в 25px
        nav: true, //Отключение навигации
        autoplay: false, //Автозапуск слайдера
        dots: false,
        responsive: { //Адаптивность. Кол-во выводимых элементов при определенной ширине.
            0: {
                items: 2
            },

            700: {
                items: 3
            },

            1000: {
                items: 4
            }
        }
    });
});