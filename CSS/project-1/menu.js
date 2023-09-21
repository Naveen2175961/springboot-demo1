function toggleMenu() {
    var x = document.getElementById("responsive-menu")
        if(x.className === "right-menu") {
            x.className += " responsive" ;

        }
        else {
            x.className= "right-menu";
        }
}       