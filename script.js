window.onscroll = function() {scrollFunction()}

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("header-inner").style.padding = "0.5em 1.5em";
        document.getElementById('logo').style.width = "2em"
    } else {
        document.getElementById("header-inner").style.padding = "";
        document.getElementById('logo').style.width = ""
    }
}