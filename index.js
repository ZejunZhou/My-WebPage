var widths = 1000;

var replace1_innerHTML = document.querySelector(".replace1").innerHTML;

var replace2_innerHTML = document.querySelector(".replace2").innerHTML;


function resizeFn() {
if (window.innerWidth < 1000) {
    document.querySelector(".replace1").innerHTML = replace2_innerHTML;
    document.querySelector(".replace2").innerHTML = replace1_innerHTML;
} 
else {
    document.querySelector(".replace2").innerHTML = replace2_innerHTML;
    document.querySelector(".replace1").innerHTML = replace1_innerHTML;
    
}
}
window.onresize = resizeFn;
resizeFn();