$(document).ready(function () {

    // To handle top-right dropdown menu for narrow screens
    $('.three-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });


    // Function to handle header scroll changes
    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if ($(window).scrollTop() > 35) {
            $('.header').css({ 'background': '#002e5f', 'box-shadow': '0 .2rem .5rem rgba(0,0,0,.4)' });
        }
        else {
            $('.header').css({ 'background': 'none', 'box-shadow': 'none' });
        }
    });


    // For company stat counters
    const counters = document.querySelectorAll('.counter');
    const speed = 120;
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const inc = target / speed;
            if (count < target) {
                counter.innerText = count + inc;
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };
        updateCount();
    });



    // Go back on top of the page
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    $('.accordion-header').click(function () {
        $('.accordion .accordion-body').slideUp(500);
        $(this).next('.accordion-body').slideDown(500);
        $('.accordion .accordion-header span').text('+');
        $(this).children('span').text('-');
    });
});



// Function to handle EQ title to EQ logo transition 
document.addEventListener("scroll", function () {
    let scrollPos = window.scrollY;
    let title = document.getElementById("nav-title");
    let logo = document.getElementById("nav-logo");

    let scrolled = scrollPos > 200; // Change happens at 200px

    if (scrolled && !title.classList.contains("hidden")) {
        // Transition OUT title
        title.classList.add("opacity-0", "-translate-x-4");
        
        setTimeout(() => {
            title.classList.add("hidden");
            logo.classList.remove("hidden");
            
            // Transition IN logo - tiny delay to ensure it's unhidden first
            setTimeout(() => {
                logo.classList.remove("opacity-0", "scale-50");
                logo.classList.add("opacity-100", "scale-100");
            }, 10);
        }, 300); // Wait for title to fade out before hiding
    } 
    
    else if (!scrolled && title.classList.contains("hidden")) {
        // Transition OUT logo
        logo.classList.add("opacity-0", "scale-50");
        
        setTimeout(() => {
            logo.classList.add("hidden");
            title.classList.remove("hidden");
            
            // Transition IN title - again, tiny delay
            setTimeout(() => {
                title.classList.remove("opacity-0", "-translate-x-4");
            }, 10);
        }, 300); // Wait for logo to fade out before hiding
    }
});
