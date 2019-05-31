$(document).ready(function(){

      //GET ALL PRODUCTS

$('#loginForm').submit(function(e){
    e.preventDefault();

    $.ajax({
    type:'GET',
    url:"http://localhost:4000/users",
    dataType:"json",
    contentType:'application/json',
    data:{
       format:'json'
    },
    
    success:function(data){

        var email = $("#email").val();
        var pwd = $("#password").val();

        if (email == "admin@decastock.com" && pwd == "root"){
            alert("Login in as Administrator");
            window.location.assign("http://localhost:4000/admin")

        }
        else{
            var products = data;
            for(i in products){
                if(email == i.email && pwd==i.password)    {
                    alert("login successful");
                }
                else{
                    alert("user does not exist. Please Signup")
                }

             }      
        }

  

    },
})

})


});