function getInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var xhttp = new XMLHttpRequest();
    var url = "https://www.instagram.com/web/search/topsearch/?context=user&count=1&query="+user;
    xhttp.overrideMimeType("application/json");
    xhttp.open('GET', url, true);
    xhttp.onload = function () {
        //if the response is successful show the user's details
        if (xhttp.status == 200) {
            showUser(JSON.parse(xhttp.responseText));
            //else display suitable message
        } else {
            $("#h2id").text("Sorry, No Such User '"+user +"' Exists");
            $(".avatar").text('');
            $(".information").html('');
        }
    };

    xhttp.send();
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $("#h2id").text(user.login);
    $(".avatar").html("<img src='"+ user.users[0].user.profile_pic_url+"' style='width='40%; height='40%' ' '/>");
    var link = "<a target='_blank' href='"+user.html_url+"'> Click here </a>";

}



$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
            //get what the user enters
            username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
            getInfo(username);
        }
    })
});
