



// --------- //
// --------- // --------- //
// On key up // --------- // --------- //
// --------- // --------- //
// --------- //



$(function() {
    $("input[type='text']").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border-bottom-color', '#FF5C58');

        } else {

            $(this).css('border-bottom-color', 'rgb(106, 230, 188)');
            $('.error-message-name').fadeOut(150);

        }
    });
});

$(function() {
    $("input[type='email']").on("keyup", function() {
        if(!$(this).val().match(/^\S+@\S+\.\S+$/)) {

            $(this).css('border-bottom-color', '#FF5C58)');

        } else {

            $(this).css('border-bottom-color', 'rgb(106, 230, 188)');
            $('.error-message-mail').fadeOut(150);

        }
    });
});

$(function() {
    $("textarea").on("keyup", function() {
        if(!$(this).val()) {

            $(this).css('border-bottom-color', '#FF5C58');

        } else if($(this).val().length < 10) {

            $(this).css('border-bottom-color', '#FF5C58');

        } else {

            $(this).css('border-bottom-color', 'rgb(106, 230, 188)');
            $('.error-message-msg').fadeOut(150);
            $('.error-message-msg-2').fadeOut(150);

        }
    });
});



// -------- //
// -------- // -------- //
// On Blur  // -------- // -------- //
// -------- // -------- //
// -------- //



$(function() {
    $("input[type='text']").on("blur", function() {
        if(!$(this).val()) {
 
            $(this).css('border-color', '#FF5C58');
            $('.error-message-name').fadeIn(150);
 
        } else {

            $('.error-message-msg').fadeOut(150);
        
        }
    });
});

$(function() {
    $("input[type='email']").on("blur", function() {
        if(!$(this).val().match(/^\S+@\S+\.\S+$/)) {
 
            $(this).css('border-color', '#FF5C58');
            $('.error-message-mail').fadeIn(150);
 
        } else {

            $('.error-message-mail').fadeOut(150);
        
        }
    });
});

$(function() {
    $("textarea").on("blur", function() {
        if(!$(this).val()) {
 
            $(this).css('border-color', '#FF5C58');
            $('.error-message-msg').fadeIn(150);
            $('.error-message-msg-2').fadeOut(150);
 
        } else if($(this).val().length < 10) {

            $(this).css('border-color', '#FF5C58');
            $('.error-message-msg-2').fadeIn(150);
            $('.error-message-msg').fadeOut(150);
        
        } else {

            $('.error-message-msg').fadeOut(150);
            $('.error-message-msg-2').fadeOut(150);
        
        }
    });
});



// -------------- //
// -------------- // ------------------- //
// Handle Submit  // ------------------- // ------------------- //
// -------------- // ------------------- // 
// -------------- //



// $(function() {
    
//     $('#contact-form-submit').on('click', function(e) {        
     
//         if (
//             !$('input[type="text"]').val() ||
//             !$('input[type="email"]').val().match(/^\S+@\S+\.\S+$/) ||
//             !$('textarea').val()
//         ) {
            
//             e.preventDefault();

//             if (!$('input[type="text"]').val()) {

//                 $('input[type="text"]').css('border-color', '#FF5C58');
//                 $('.error-message-name').fadeIn(150);

//             }
            
//             if (!$('input[type="email"]').val().match(/^\S+@\S+\.\S+$/)) {

//                 $('input[type="email"]').css('border-color', '#FF5C58');
//                 $('.error-message-mail').fadeIn(150);

//             }
            
//             if (!$('textarea').val()) {

//                 $('textarea').css('border-color', '#FF5C58');
//                 $('.error-message-msg').fadeIn(150); 

//             } else if ($('textarea').val().length < 10) {

//                 $('textarea').css('border-color', '#FF5C58');
//                 $('.error-message-msg-2').fadeIn(150);

//             }
        
//         } else {
            
//             // Do Nothing
        
//         }
//     });
// });



// ------------------- //
// End Form Validation //
// ------------------- //



// -------------------- // -------------------- // 
//                      // -------------------- // 
// -------------------- // -------------------- // -------------------- // 
// Handle Form Output   // -------------------- // -------------------- // 
// -------------------- // -------------------- // -------------------- // 
//                      // -------------------- // 
// -------------------- // -------------------- // 



function SubmitFormData() {
    if (
        !$('input[type="text"]').val() ||
        !$('input[type="email"]').val().match(/^\S+@\S+\.\S+$/) ||
        !$('textarea').val()
    ) {

        if (!$('input[type="text"]').val()) {

            $('input[type="text"]').css('border-color', '#FF5C58');
            $('.error-message-name').fadeIn(150);

        }
        
        if (!$('input[type="email"]').val().match(/^\S+@\S+\.\S+$/)) {

            $('input[type="email"]').css('border-color', '#FF5C58');
            $('.error-message-mail').fadeIn(150);

        }
        
        if (!$('textarea').val()) {

            $('textarea').css('border-color', '#FF5C58');
            $('.error-message-msg').fadeIn(150); 

        } else if ($('textarea').val().length < 10) {

            $('textarea').css('border-color', '#FF5C58');
            $('.error-message-msg-2').fadeIn(150);

        }
    
    } else {

        $('#contact-form').fadeOut(250);
        $('#contact-response').delay(350).fadeIn(300);
        
        var name = $("input[type='text']").val();
        var email = $("input[type='email']").val();
        var message = $("textarea").val();
        $.post("/php-files/contact-form-submit.php", { name: name, email: email, message: message },
        function(data) {
            $('#contact-response').html(data);
            $('#contact-form')[0].reset();
        });
    
    }
};

