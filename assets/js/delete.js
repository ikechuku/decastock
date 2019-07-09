$(document).ready(function(){

  var productID = location.search.substring(1);
  console.log(productID);
    $.ajax({
      url:"http://localhost:4000/products/"+productID,
      dataType:"json",
      type:'DELETE',     
      success:function(){
        alert("Product Deleted")
       window.location.assign('http://localhost:4000/all-products.html');
    }
    }); 
});