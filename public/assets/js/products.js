$(document).ready(function(){
    $.ajax({
        type:'GET',
        url:"http://localhost:4000/products",
        dataType:"json",
        contentType:'application/json',
        data:{
           format: 'json'
        },
        
        success:function(data){
            var users = data;
            console.log(users);
            var output = '';
                for(i in users){
                    output += 
                    `<article class="card">
                    <div class="category category-offer">new</div>
                    <div class="category category-available">Available</div>
                  <img src="" alt="Audi-A4">
                  <div class="card-flex-item ">
                    <div><small>`+users[i].first_name+`</small></div>
                    <div><small>`+users[i].first_name+`</small></div>
                  </div>
                  
                  <hr>
                  <p>`+users[i].email+`</p>
                  <input type="button" class="btn" value="Details">
                  <input type="button" class="btn" value="Place Order">
                </article>`
                }
            $("#all-products").html(output);           
                
        },
    })
})