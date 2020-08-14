$(document).ready(function() {
        $(".scroll").on("click", "button", function(event) {
            event.preventDefault();



            if ($(this).attr('href').indexOf("#") == 0) {
                var id = $(this).attr('href'),
                    top = $(id).offset().top - 30;
                $('body,html').animate({
                    scrollTop: top
                }, 1000);
                console.log(`animation works`);

            } else {
                document.location.href = $(this).attr('href');
                console.log(`animation not works`);
            }

        });
    }



);