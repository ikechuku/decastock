$(document).ready(function(){

    $('#ad-form').submit(function(e){
        e.preventDefault();
        $.ajax({
            url: "http://localhost:4000/products",
            dataType: 'json',
            type: 'post',
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
              alert("Product Added Successfully");
              window.location.assign('http://localhost:4000/all-products.html')
            },
            error: function(errorThrown) {
                console.log(errorThrown);
            }  
          });
    })
});