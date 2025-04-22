// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Initialize Testimonial Slider
document.querySelectorAll(".testimonial-slider").length > 0 &&
    tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: !1,
        speed: 700,
        nav: !0,
        controls: !0,
        autoplay: !0,
        autoplayHoverPause: !0,
        autoplayTimeout: 3500,
        autoplayButtonOutput: !1,
    });

// Quantity Control Functionality
!(function () {
    var e,
        t = document.getElementsByClassName("quantity-container");

    function a(t) {
        var a = t.getElementsByClassName("quantity-amount")[0],
            n = t.getElementsByClassName("increase")[0],
            l = t.getElementsByClassName("decrease")[0];

        n.addEventListener("click", function (t) {
            var n, l;
            (n = t), (l = a), (e = parseInt(l.value, 10)), console.log(l, l.value), (e = isNaN(e) ? 0 : e), e++, (l.value = e);
        });

        l.addEventListener("click", function (t) {
            var n, l;
            (n = t), (l = a), (e = isNaN((e = parseInt(l.value, 10))) ? 0 : e) > 0 && e--, (l.value = e);
        });
    }

    !(function e() {
        for (var n = 0; n < t.length; n++) a(t[n]);
    })();
})();
