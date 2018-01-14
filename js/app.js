//$('#myModal').modal('toggle')



var sesion = document.getElementById("myModal");
sesion.addEventListener("click", modalTrue);
console.log("hola", sesion)

var modalTrue = function() {
    if (sesion == true) {
        return $('#myModal').modal('show');
    }
}