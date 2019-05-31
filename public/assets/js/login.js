$(document).ready(function(){

    $('#signupForm').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "http://localhost:4000/users",
            dataType: 'json',
            type: 'post',
            contentType: 'application/json',
            data: JSON.stringify({
              "first_name": $('#first_name').val(),
              "last_name": $('#last_name').val(),
              "email": $('#email').val(),
              "password": $('#password').val(),
              }),

              
            processData: false,
            success: function(){
              var user = $('#first_name').val()
              alert("Account Created Successfully");
              window.location.assign('http://localhost:4000/all-products.html?'+user)
            },
            error: function(errorThrown) {
                console.log(errorThrown);
            }  
          });
    })
});