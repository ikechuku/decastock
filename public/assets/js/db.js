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
                    `<tr class="user-view-listitem">
                    <td id="user_id">
                        <h4>`+products[i].id+`</h4>
                    </td>
                    <td id="car_id">
                        <img src =`+products[i].img_url+`>
                    </td>
                    <td id="car_name">
                        <p>`+products[i].product_name+`</p>
                    </td>
                    <td id="body_type">
                        <p>`+products[i].quantity+`</p>
                    </td>
                    <td id="condition">
                        <p>`+products[i].product_description+`</p>
                    </td>
                    <td id="listitem6">
                        <p> &#8358 `+products[i].price+`</p>
                    </td>
                    <td id="action">
                    <a href="product.html?`+products[i].id+`"><button type="button" class="btn blue">update</button></a>
                    <a href="product.html?`+products[i].id+`">   <button type="button" class="btn orange">delete</button></a>
                     </td>
                </tr>`                    
                }
            $(".user-view-list").html(output);
            var user = location.search.substring(1);       
            // $("#user").html(user);
  
        },
    })
})
//     var productID = location.search.substring(1);
  
//   // GET PARTICULAR PRODUCT
//     $.ajax({
//       url:"http://localhost:4000/products/"+productID,
//       dataType:"json",
//       contentType:'application/json',
//       type:'GET',
//       data:{
//          format: 'json'
//       },
  
//       success:function(data){
        
//         var details = 
//         `
//         <article class="card">
//         <h1>`+data.product_name+`</h1>
//           <div class="category category-available">available</div>
//         <img src="`+data.img_url+`" alt="Audi-A4">
//         <div class="card-flex-item ">
//           <div><h2 id="price">&#8358 `+data.price+`</h2></div>
//         </div>
//         <br>
        
//         <h3>Details</h3>
//         <hr>
//         <p><strong>Manufacturer:</strong> &nbsp;&nbsp;&nbsp;&nbsp;`+data.manufacturer+`</p> 
//         <p><strong>Quantity:</strong>&nbsp;&nbsp &nbsp;&nbsp;`+data.quantity+`</p>
       
//         <br>
//         <h3>Description</h3>
//         <hr>
//         <p> 
//           <br>
//           `+data.product_description+`
//         </p>
//         <br>
//        <a href="update-product.html?`+productID+`"><input id="update" type="button" class="btn" value="Update"></a>          
//        <a href="delete-product.html?`+productID+`"><input id="delete" type="button" class="btn orange" value="Delete"></a>               
         
//        </article>
//         `      
//       $('#details').html(details);
      
//     }
//     });  
  
  
//     // UPDATE A PRODUCT 
//     $('#update-form').submit(function(e){
//       e.preventDefault();
//       $.ajax({
//           url:"http://localhost:4000/products/"+productID,
//           dataType: 'json',
//           type: 'put',
//           contentType: 'application/json',
//           data: JSON.stringify({
//               "product_name": $('#product_name').val(),
//               "manufacturer": $('#manufacturer').val(),
//               "quantity": $('#quantity').val(),
//               "price": $('#price').val(),
//               "img_url": $('#img_url').val(),
//               "product_description": $('#product_description').val()
  
//             }),
//           processData: false,
//           success: function(){
//             alert("Product Updated Successfully");
//             window.location.assign('http://localhost:4000/all-products.html')
//           },
//           error: function(errorThrown) {
//               console.log(errorThrown);
//           }  
//         });
//     })
  
//   });
  