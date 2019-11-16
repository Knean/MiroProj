$("#navBar").load("navbar.html")
$("head").append($('<link rel="stylesheet" href="css/navbar.css">'))
$("form").submit(function(e){
    e.preventDefault()
    var email = $("#email").val()
    $("#errorField").css("display","none")
    if (email=="fakeemail@nowhere.com"){
        $("#errorField").css("display","block")
    }
    console.log(email)
  
})