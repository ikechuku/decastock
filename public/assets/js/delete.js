$(document).ready(function(){

  var userID = location.search.substring(1);
  console.log(userID);
    $.ajax({
      url:"http://localhost:4000/users/"+userID,
      dataType:"json",
      type:'DELETE',     
      success:function(){
        alert("user Deleted")
       window.location.assign('http://localhost:4000/all-users.html');
    }
    }); 
});