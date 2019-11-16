$("#navBar").load("navbar.html")


$.ajax({
    url: "specials.txt",
  
  })
    .done(function( data ) {
    $("#specials").text(data)
    });
$(document).ready(
    navigator.geolocation.getCurrentPosition(
        function (position) {
            var text = "<location>" + "lattitude: " + position.coords.latitude  +" longitude: "+ position.coords.longitude + "</location"
//add headers
            download(text, "location.xml", "text/plain")
        })


)
function download(data, filename, type) {
    var file = new Blob([data], { type: type });

    // Others
    var a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);


}