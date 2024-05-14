function validateEmail(email) {

    return /\S+@\S+\.\S+/.test(email);

}



const $loginForm = $('form#login');

$loginForm.on('submit', function(e) {

    e.preventDefault();

    const $email = $(this).find('#email');

    const emailValue = $email.val().trim();

    //check for empty

    if ( !emailValue ) {

        $email.addClass('border border-danger');

    }
    else {

        $email.removeClass('border border-danger');

        // check for email pattern...

    }


    const $password = $(this).find('#password');

    const passwordValue = $password.val().trim();

    if ( !passwordValue ) {

        $password.addClass('border border-danger');

    }
    else {

        $password.removeClass('border border-danger');

    }


});


$('#searchBttn').on('click', (e) => $('#searchForm').addClass('active'));

$('#closeBttn').on('click', (e) => $('#searchForm').removeClass('active'));

$('#serviceTabs a').on('click', function(e) {

    e.preventDefault();

    const service = parseInt($(this)[0].dataset.service);

    // console.log(service);

    if ( !$(this).hasClass('active') ) {

        $('#serviceTabs a.active').removeClass('active').parent('li').removeClass('active-tab');

        $(this).addClass('active').parent('li').addClass('active-tab');
    }

    $('.service_content .card').removeClass('service_hide');

    if ( service ) {

        $('.service_content .card').not(`[data-service_block="${service}"]`).addClass('service_hide');
    }

});

$('form.subscribe').on('submit', function(e) {

    e.preventDefault();

    const $email = $(this).find('input[name="email"');
    const email = $email.val().trim();

    if ( !email ) {

        //check for empty email


        $email.addClass('alert alert-danger');
    }
    else {

        //validate email
        if ( !validateEmail(email) ) {

            $email.attr('placeholder', 'Invalid email, try again...').val('');

        }
        else {

            $email.removeClass('alert-danger').addClass('alert-success').attr('placeholder', 'Enter Your Email');
            
        }

    }

});