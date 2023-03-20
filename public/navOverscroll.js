// FIXME declare this script inside ts

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("f-nav-id").style.top = "0";
    } else {
        document.getElementById("f-nav-id").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
}