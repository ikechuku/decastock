$(document).ready(function(){
  $.ajax({
      type:'GET',
      url:"http://localhost:4000/products",
      dataType:"json",
      contentType:'application/json',
      data:{
         format:'json'
      },
      
      success:function(data){
          var products = data;
          console.log(products);
          var output = '';
              for(i in products){
                  output += 
                  `<article class="card">
                  <div class="category category-offer">`+products[i].quantity+`</div>
                  <div class="category category-available">Available</div>
                <img src="`+products[i].img_url+ `" alt="Audi-A4">
                <div class="card-flex-item ">
                  <div><small>`+products[i].price+`</small></div>
                  <div><small>`+products[i].product_name+`</small></div>
                </div>
                
                <hr>
                <p>`+products[i].product_description+`</p>
                <input type="button" class="btn" value="Details">
                <input type="button" class="btn" value="Place Order">
              </article>`
              }
          $("#all-products").html(output);           
              
      },
  })
})