var counter = 1;
$("#navBar").load("navbar.html")
var counter = 1
$("head").append($('<link rel="stylesheet" href="css/navbar.css">'))
$("#next").click(function(){
    counter++;
    console.log(counter+ " " + counter%10)
    $("#imageHolder").attr("src",`extra/baking/${Math.abs(counter)%10}.jpg`)
    
})

$("#previous").click(function(){
    counter--;
    console.log(counter+ " " + counter%10)
    $("#imageHolder").attr("src",`extra/baking/${Math.abs(counter)%10}.jpg`)
    
})
$("#imageHolder").click(function(event){
    $("#fullscreen").css("display","block")
    $("#fullscreenimage").attr("src",event.target.attributes[1].value)
console.log(event.target.attributes[1].value)
})
$("#hide").click(function(){
    $("#fullscreen").css("display","none")
})