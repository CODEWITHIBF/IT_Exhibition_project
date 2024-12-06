const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


const dawood = document.querySelector(".logo");
dawood.addEventListener("click", function () {
    location.href = "index.html";


})



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
            response: 'Dawood Super Mart welcomes you daily from 8:00 AM to 7:30 PM. Whether it’s morning errands or evening shopping, we’re here to serve you!',
        },
        {
            keywords: ['hi', 'hello', 'how are you'],
            response: 'Hello! 👋 How’s it going? I’m here to assist you with any queries about Dawood Super Mart.',
        },
        {
            keywords: ['product', 'grocery','groceries', 'cloth', 'clothing', 'cosmetics', 'electronics', 'tools', 'toys'],
            response: 'At Dawood Super Mart, we provide everything you need under one roof, including groceries, household items, stylish clothing, premium cosmetics, the latest electronics, durable tools, and fun toys for kids!',
        },
        {
            keywords: ['groceries', 'fruits', 'vegetables'],
            response: 'Our grocery section is stocked with fresh fruits, vegetables, and all your daily essentials to make your meals healthy and delicious.',
        },
        {
            keywords: ['clothing', 'garments'],
            response: 'Explore our clothing section featuring trendy outfits for men, women, and kids. We offer both branded items and high-quality local designs!',
        },
        {
            keywords: ['cosmetics', 'beauty', 'perfumes', 'skincare'],
            response: 'Indulge in our cosmetics section with a wide range of perfumes, skincare products, and beauty essentials to keep you looking and feeling great.',
        },
        {
            keywords: ['service', 'facilities', 'accessibility', 'wheelchair'],
            response: 'We prioritize your comfort with escalators, lifts, and wheelchair accessibility. Enjoy hassle-free shopping with our customer-friendly facilities.',
        },
        {
            keywords: ['parking'],
            response: 'Convenient parking is available for our customers, but it may be limited during peak shopping hours. Plan your visit accordingly!',
        },
        {
            keywords: ['discount', 'offers', 'promotions', 'price'],
            response: 'Save more at Dawood Super Mart! We offer regular discounts, special promotions, and competitive prices compared to local markets.',
        },
        {
            keywords: ['events', 'activities'],
            response: 'Join us for exciting events and seasonal promotions that add fun to your shopping experience. Keep an eye out for our special family deals!',
        },
        {
            keywords: ['feedback', 'reviews'],
            response: 'We value your feedback! Customers love our variety, cleanliness, and reasonable prices. Some mention parking and checkout delays, and we’re always working to improve.',
        },
        {
            keywords: ['location', 'address'],
            response: 'Find us at Autobahn Road, Hyderabad, in the heart of a bustling commercial area surrounded by branded outlets. A perfect spot for all your shopping needs!',
        },
        {
            keywords: ['contact', 'website', 'information'],
            response: 'Need more details? Visit our official website: [www.dawoodsupermarket.com](http://www.dawoodsupermarket.com) or reach out to us for assistance!',
        },
        {
            keywords: ['kids', 'children', 'fun', 'family'],
            response: 'Bring your family along! We have a range of kids’ toys and products, making Dawood Super Mart a fun and convenient shopping destination for everyone.',
        },
        {
            keywords: ['seasonal', 'festive', 'decorations'],
            response: 'Celebrate the season with us! Check out our festive decorations, themed items, and exclusive seasonal offers to brighten up your celebrations.',
        },
        {
            keywords: ['return', 'exchange', 'policy'],
            response: 'We stand by our products! Returns and exchanges are hassle-free. Just ensure you have the original receipt and check our policy terms on our website.',
        },
        {
            keywords: ['delivery', 'home', 'online', 'shopping'],
            response: 'Enjoy convenience with our home delivery services and online shopping options. Visit our website to explore and place your order today!',
        },
        {
            keywords: ['membership', 'loyalty', 'points'],
            response: 'Join our loyalty program and earn points with every purchase! Redeem them for exciting discounts and rewards on your next visit.',
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


