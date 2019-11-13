$("#navBar").load("navbar.html")
$("head").append($('<link rel="stylesheet" href="css/navbar.css">'))
$("#description").load("extra/description.html")
$.ajax({
    url: "specials.txt",
  
  })
    .done(function( data ) {
    alert(data)
    });
$(document).ready(
    navigator.geolocation.getCurrentPosition(
        function (position) {
            alert(position.coords.latitude + " " + position.coords.longitude);

            download(position.coords.latitude + " " + position.coords.longitude, "data.xml", "text/plain")
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

/* $(document).ready(alert("aaaaa")); */