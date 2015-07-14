

window.addEventListener('scroll', function () {
    var elem = document.getElementsByClassName('scroll-up')[0],
        scroll = window.pageYOffset;

    if (scroll > 500) {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
});

//console.log(document.getElementsByClassName('scroll-up')[0]);
//
//window.onload = document.getElementsByClassName('scroll-up')[0].addEventListener('click', function () {
//    console.log('____');
//    window.scrollBy(0, window.innerHeight);
//});
//

