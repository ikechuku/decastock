$(document).ready(function(){

      //GET ALL PRODUCTS

$('#loginForm').submit(function(e){
    e.preventDefault();

    
    var email = $("#email").val();
    var password = $("#password").val();

    $.ajax({
    type:'GET',
    url:"http://localhost:4000/users",
    dataType:"json",
    contentType:'application/json',
    data:{
       format:'json'
    },
    
    success:function(data){

        if(email == "admin@decastock.com" && password == "root"){
            alert("Admistrator Login");
            window.location.assign("http://localhost:4000/admin-dashboard.html");
        }else{
            var user = data.find(
                element => element.email === email && element.password == password
            );
            if(user){
                let saveUser = {id:user.id, name:user.first_name};
                localStorage.setItem("user", JSON.stringify(saveUser));
                alert("Login Successful");
                window.location.assign("http://localhost:4000/all-products.html");
            }
            else{
                alert("Incorrect Credentials.. Please SignUp")
            }
        }

    },
})

})


});