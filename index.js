// $(document).ready(function(){

//     $.ajax({
//         method: "GET",
//         url: "http://localhost:4000/users",
//       })
//         .done(function( msg ) {
//           alert( "Data Saved: " + msg );
//         });
      

// });

function allProducts(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:4000/users', true);
    xhr.onload = function() {
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
    
            var output = '';
            for (var i in users){
                output += 
                `<article class="card">
                <div class="category category-offer">new</div>
                <div class="category category-available">Available</div>
              <img src="" alt="Audi-A4">
              <div class="card-flex-item ">
                <div><small>`+users[i].first_name+`</small></div>
              </div>
              
              <hr>
              <p>`+users[i].email+`</p>
              <input type="button" class="btn" value="Details">
              <input type="button" class="btn" value="Place Order">
            </article>
            `
            }
    
            document.getElementById('all-products').innerHTML = output;
        }
    }
    xhr.send();
}

window.onload = allProducts;