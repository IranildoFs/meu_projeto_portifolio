
function inicio(){
        
    document.addEventListener("keyup", function(oi){
        var tecla=oi.keyCode;
        var h= document.getElementById("um");
        var r = Math.floor(Math.random()*255);
        var g = Math.floor(Math.random()*255);
        var b = Math.floor(Math.random()*255);

        if(tecla==32){
            h.style.backgroundColor= "rgb("+r+","+g+","+b+")";
        }
    });

}
window.addEventListener("load", inicio);