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












// script for ChatBot
const chat = document.querySelector(".chatbot-container");
const ai = document.querySelector(".assistant img");

ai.addEventListener("click", function () {

    if (chat.style.visibility === "visible") {
        chat.style.visibility = "hidden";



    }



    else {
        chat.style.visibility = "visible";

        gsap.to(chat, {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay: 0.7,


        });

    }
});





document.getElementById('sendButton').addEventListener('click', sendMessage);

function sendMessage() {
    const userInput = document.getElementById('userInput').value.trim();
    if (!userInput) return;

    appendMessage('user', userInput);
    document.getElementById('userInput').value = '';

    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        appendMessage('bot', botResponse);
    }, 1000);
}

function appendMessage(sender, message) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;
    messageDiv.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Auto-scroll to the bottom
}




function getBotResponse(input) {
    const lowerInput = input.toLowerCase();

    // Keyword-based responses
    const responses = [
        {
            keywords: ['time', 'timing', 'hours', 'open', 'close'],
            response: 'Dawood Super Mart is open daily from 8:00 AM to 7:30 PM.',
        },
        {
            keywords: ['hi', 'hello', 'how are you'],
            response: 'Hello... I am fine... What about You. <br> I am Developed by: Muhammad Ibraheem',
        },





        {
            keywords: ['product', 'groceries', 'clothing', 'cosmetics', 'electronics', 'tools', 'toys'],
            response: 'We offer a wide range of products including groceries, household items, clothing, cosmetics, electronics, tools, and toys.',
        },
        {
            keywords: ['groceries', 'fruits', 'vegetables'],
            response: 'We have fresh fruits, vegetables, and daily essentials in our grocery section.',
        },
        {
            keywords: ['clothing', 'garments'],
            response: 'Our clothing section includes garments for men, women, and children, including branded and locally sourced options.',
        },
        {
            keywords: ['cosmetics', 'beauty', 'perfumes', 'skincare'],
            response: 'We offer perfumes, skincare, and beauty products in the cosmetics section.',
        },
        {
            keywords: ['service', 'facilities', 'accessibility', 'wheelchair'],
            response: 'Our services include escalators, lifts, and wheelchair accessibility for a comfortable shopping experience. Parking is also available, though limited during peak hours.',
        },
        {
            keywords: ['parking'],
            response: 'Parking space is available but can be limited during peak hours.',
        },
        {
            keywords: ['discount', 'offers', 'promotions', 'price'],
            response: 'We offer competitive prices with occasional discounts compared to local markets.',
        },
        {
            keywords: ['events', 'activities'],
            response: 'Regular promotional offers and seasonal discounts make us a go-to spot for families and bulk shopping.',
        },
        {
            keywords: ['feedback', 'reviews'],
            response: 'Visitors appreciate our variety, cleanliness, and reasonable pricing. Some have noted parking issues and delays at checkout counters.',
        },
        {
            keywords: ['location', 'address'],
            response: 'Dawood Super Mart is located at Autobahn Road, Hyderabad, surrounded by branded outlets and a busy commercial area.',
        },
        {
            keywords: ['contact', 'website', 'information'],
            response: 'For more information, visit our website: www.dawoodsupermarket.com.',
        },
    ];

    // Find a matching response
    for (const item of responses) {
        if (item.keywords.some(keyword => lowerInput.includes(keyword))) {
            return item.response;
        }
    }

    // Default response for unrecognized queries
    return "Sorry, I couldn't understand that. Can you please clarify?";
}


