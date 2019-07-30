$(document).ready(function () {

  $('#ad-form').submit(function (e) {
    e.preventDefault();
    $.ajax({
      url: "http://localhost:4000/users",
      dataType: 'json',
      type: 'post',
      contentType: 'application/json',
      data: JSON.stringify({
        "first_name": $('#first_name').val(),
        "last_name": $('#last_name').val(),
        "dob": $('#dob').val(),
        "date_created": $.now(),
        "date_updated": $.now(),
      }),
      processData: false,
      success: function () {
        //   $('#response').html(JSON.stringify(data));
        alert("User Added Successfully");
        window.location.assign('http://localhost:4000/all-users.html')
      },
      error: function (errorThrown) {
        console.log(errorThrown);
      }
    });
  })
});