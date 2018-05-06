function openy(Year) {
    var i;
    var x = document.getElementsByClassName("Year");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    document.getElementById(Year).style.display = "block";  
}
