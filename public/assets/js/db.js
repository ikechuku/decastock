$(document).ready(function () {

    //GET ALL USERS

    $.ajax({
        type: 'GET',
        url: "http://localhost:4000/users",
        dataType: "json",
        contentType: 'application/json',
        data: {
            format: 'json'
        },

        success: function (data) {
            var users = data;
            var output = '';
            for (i in users) {
                output +=
                    `<tr class="user-view-listitem">
                    <td id="user_id">
                        <h4>` + users[i].id + `</h4>
                    </td>
                    <td id="img_url">
                        <img src =` + users[i].img_url + `>
                    </td>
                    <td id="user_name">
                        <p>` + users[i].user_name + `</p>
                    </td>
                    <td id="dob">
                        <p>` + users[i].dob + `</p>
                    </td>
                    <td id="gender">
                        <p>` + users[i].gender + `</p>
                    </td>
                    <td id="action">
                    <a href="user.html?` + users[i].id + `"><button type="button" class="btn blue">update</button></a>
                    <a href="user.html?` + users[i].id + `">   <button type="button" class="btn orange">delete</button></a>
                     </td>
                </tr>`
            }
            $(".user-view-list").html(output);
            var user = location.search.substring(1);
            // $("#user").html(user);

        },
    })
})