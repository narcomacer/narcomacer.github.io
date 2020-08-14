/* Scroll to Block 
                                                   ===================  */
$(document).ready(function() {

        $(".scroll").on("click", "a", function(event) {
            event.preventDefault();
            console.log(`function  works`);

            if ($(this).parent(".nav") == undefined) {
                console.log(`function mobile  works`);
                console.log(` parent(navbottom) =${$(this).parent()}`);
                document.location.href = $(this).attr('href');
                document.querySelector('.nav__bottom').classList.toggle('m-hide');
            } else {
                console.log(`else works`);

                if ($(this).attr('href').indexOf("#") == 0) {

                    var id = $(this).attr('href'),
                        top = $(id).offset().top - 30;
                    console.log(`animation works`);
                    $('body,html').animate({
                        scrollTop: top
                    }, 1000);

                } else {
                    document.location.href = $(this).attr('href');
                }
            }

        });
    }



);