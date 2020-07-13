
function SimpleMailer(this_button) {

  let form = $(this_button).parent();
  tema = form.attr('data-tema');


  err = 0;
  input_name = $(form).children(".contact-form__input_name").val();

  input_tel = $(form).children(".contact-form__input_tel").val();

  // t3 = $("#mail_vopros").val();
  if (input_name == '') {
    $(form).children(".contact-form__input_name").css({
      "border": "solid 1px #f00"
    })
    err = 1;
  }
  if (input_tel == '') {
    $(form).children(".contact-form__input_tel").css({
      "border": "solid 1px #f00"
    })
    err = 1;
  }
  // if (t3 == '') {
  //   $("#mail_consult").css({
  //     "border-bottom": "solid 1px #f00"
  //   })
  //   err = 1;
  // }
  if (err == '0') {
    $.ajax({
      type: "POST",
      url: "/ajax_script/os_zvonok.php",
      data: 'name=' + input_name + '&tel=' + input_tel + '&tema=' + tema,
      // +        '&mail=' + $('#mail_consult').val(),
      success: function (response) {
        $(form).html(response);

      }
    });
  }
  else {
    $(form).children(".contact-form__description").html("<b>Заполните все поля формы</b>");
  }
};





