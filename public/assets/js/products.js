$(document).ready(function(){

  //GET ALL PRODUCTS
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
          var output = '';
              for(i in products){
                  output += 
                  `<article class="card">
                  <div class="category category-offer">`+products[i].quantity+`</div>
                  <div class="category category-available">Available</div>
                <img src="`+products[i].img_url+ `" alt="Audi-A4">
                <div class="card-flex-item ">
                  <div><small> &#8358 `+products[i].price+`</small></div>
                  <div><small>`+products[i].product_name+`</small></div>
                </div>
                
                <hr>
                <p>`+products[i].product_description+`</p>
                <a href="product.html?`+products[i].id+`"><input type="button" class="btn" value="Details"></a>
              </article>`
              }
          $("#all-products").html(output);                         
      },
  })

  var productID = location.search.substring(1);

// GET PARTICULAR PRODUCT
  $.ajax({
    url:"http://localhost:4000/products/"+productID,
    dataType:"json",
    contentType:'application/json',
    type:'GET',
    data:{
       format: 'json'
    },

    success:function(data){
      
      var details = 
      `
      <article class="card">
      <h1>`+data.product_name+`</h1>
        <div class="category category-available">available</div>
      <img src="`+data.img_url+`" alt="Audi-A4">
      <div class="card-flex-item ">
        <div><h2 id="price">&#8358 `+data.price+`</h2></div>
      </div>
      <br>
      
      <h3>Details</h3>
      <hr>
      <p><strong>Manufacturer:</strong> &nbsp;&nbsp;&nbsp;&nbsp;`+data.manufacturer+`</p> 
      <p><strong>Quantity:</strong>&nbsp;&nbsp &nbsp;&nbsp;`+data.quantity+`</p>
     
      <br>
      <h3>Description</h3>
      <hr>
      <p> 
        <br>
        `+data.product_description+`
      </p>
      <br>
     <input id="delete" type="button" class="btn orange" >     
     <a href="update-product.html?`+productID+`"><input id="update" type="button" class="btn" value="Update"></a>          
     </article>
      `      
    $('#details').html(details);
    
  }
  });  
  

  
  

  // UPDATE A PRODUCT 
  $('#update-form').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:"http://localhost:4000/products/"+productID,
        dataType: 'json',
        type: 'put',
        contentType: 'application/json',
        data: JSON.stringify({
            "product_name": $('#product_name').val(),
            "manufacturer": $('#manufacturer').val(),
            "quantity": $('#quantity').val(),
            "price": $('#price').val(),
            "img_url": $('#img_url').val(),
            "product_description": $('#product_description').val()

          }),
        processData: false,
        success: function(){
          //   $('#response').html(JSON.stringify(data));
          alert("Product Updated Successfully");
          window.location.assign('http://localhost:4000/all-products.html')
        },
        error: function(errorThrown) {
            console.log(errorThrown);
        }  
      });
  })

});


// DELETE A PRODUCT 
$('#delete').click(function(){
  $.ajax({
    url:"http://localhost:4000/products/"+productID,
    // dataType:"json",
    // contentType:'application/json',
    type:'DELETE',
    // data:{
    //    format: 'json'
    // },

    success:function(){
    alert("deleted");
  }
  });  
})
