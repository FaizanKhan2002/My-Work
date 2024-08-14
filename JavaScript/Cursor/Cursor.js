// var cursorDot = document.querySelector("[data-cursor-dot]");
// var cursorOutline = document.querySelector("[data-cursor-outline]");
// var cursorScale = document.querySelectorAll(".cursor-scale")

// window.addEventListener("mousemove", function (e) {
//     posX = e.clientX;
//     posY = e.clientY;

//     cursorDot.style.left = `${posX}px`;
//     cursorDot.style.top = `${posY}px`;

//     //  cursorOutline.style.left = `${posX}px`;
//     //  cursorOutline.style.left = `${posY}px`;

//     cursorOutline.animate({
//         left: `${posX}px`,
//         top: `${posY}px`,
//     }, { duration: 500, fill: "forwards" });
// });


// CURSOR
var $circle = $('.circle'),
    $follow = $('.circle-follow');

function moveCircle(e) {
    TweenLite.to($circle, 0.1, {
        x: e.clientX,
        y: e.clientY
    });

    TweenLite.to($follow, 0.7, {
        x: e.clientX,
        y: e.clientY
    });
}

function hoverFunc(e) {
    TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 0
    });
    TweenLite.to($follow, 0.3, {
        scale: 2
    });
}

function unhoverFunc(e) {
    TweenLite.to($circle, 0.3, {
        opacity: 1,
        scale: 1
    });
    TweenLite.to($follow, 0.7, {
        scale: 1
    });
}

$(window).on('mousemove', moveCircle);

$(" h1").hover(hoverFunc, unhoverFunc);

const buttons = gsap.utils.toArray(".button");
buttons.forEach((item) => {
    let span = item.querySelector("span");
    let tl = gsap.timeline({ paused: true });

    tl.to(span, { duration: 0.2, yPercent: -150, ease: "power2.in" });
    tl.set(span, { yPercent: 150 });
    tl.to(span, { duration: 0.2, yPercent: 0 });

    item.addEventListener("mouseenter", () => tl.play(0));
});