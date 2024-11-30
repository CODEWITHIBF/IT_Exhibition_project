const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});




// Responsive navigation bar
function navigation() {
    const mobile_nav = document.querySelector(".mobile-navbar-btn");
    const nav_header = document.querySelector(".header");

    const toggleNavbar = () => {
        nav_header.classList.toggle("active");
    };

    mobile_nav.addEventListener("click", () => toggleNavbar());





}

// Call the function 
navigation();






// Dawood Supermarket loading Animation
LodaingAnimation = () => {

    gsap.to("h1", {

        // opacity: 0,
        delay: 1,
        duration: 10,
        // stagger: 1,
        x: "10vw",
        y: 0,
        repeat: -1,
        yoyo: true,
        ease: "linear",


    })



    gsap.from(".page1 .video_container", {
        scale: 0.9,
        opacity: 0,
        delay: 0.7,
        duration: 1

    })



}

LodaingAnimation();




bodyMouse = () => {
    document.addEventListener("mousemove", function (dets) {
        gsap.to(".cursor", {
            left: dets.x,
            top: dets.y
        });
    });

    document.querySelector(".main").addEventListener("mouseenter", function () {
        gsap.to(".cursor", {
            transform: "translate(-50%, -50%) scale(1)",
            opacity: 1,
            zIndex: 100
        });
    });


};


bodyMouse();



// swiper
boxslider = () => {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            loop: true,
            autoplay: { delay: 3000 },
        },
    });


}


boxslider();



const box = () => {
    const closeBtn = document.querySelector(".icon");
    const PopUp = document.querySelector(".pop_up");

    closeBtn.addEventListener("click", function () {
        // Apply animation first
        gsap.to(PopUp, {
            scale: 0.9,
            opacity: 0,
            duration: 1,
            delay: 0.7,
            onComplete: function () {
                // After animation completes, hide the popup
                PopUp.style.display = "none";
            }
        });
    });

    // Initial animation when the popup appears
    gsap.from(PopUp, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        delay: 0.7
    });
};

box();


