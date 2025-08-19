//  Smooth scrolling function for navigation
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize page animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial state for animated elements
    const elements = document.querySelectorAll('.project_box_1, .project_box_2, .tech_item');
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    // Trigger initial animation check
    handleScrollAnimations();
});

// Handle scroll-based animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.project_box_1, .project_box_2, .tech_item');
    const windowHeight = window.innerHeight;
    const elementVisible = 150;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Add scroll event listener for animations
window.addEventListener('scroll', handleScrollAnimations);

// Add click event for arrow down icon to scroll to contact
document.addEventListener('DOMContentLoaded', function() {
    const arrowDown = document.querySelector('.fa-arrow-down');
    if (arrowDown && arrowDown.parentElement) {
        arrowDown.parentElement.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSection('contact');
        });
    }
});

// Add smooth hover animations for tech items
document.addEventListener('DOMContentLoaded', function() {
    const techItems = document.querySelectorAll('.tech_item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Add typing effect for the name (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Add navbar active state on scroll
window.addEventListener('scroll', function() {
    const sections = ['projects', 'tech-stack', 'contact'];
    const navItems = document.querySelectorAll('.list_item');
    
    let current = '';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = sectionId;
            }
        }
    });
    
    navItems.forEach((item, index) => {
        item.classList.remove('active');
        if (sections[index] === current) {
            item.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .list_item.active {
            color: orange;
            background-color: rgba(255, 165, 0, 0.1);
            border-radius: 20px;
        }
    `;
    document.head.appendChild(style);
});

// Add loading animation (optional)
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add CSS for loading state
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .project_box_1,
        .project_box_2 {
            transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
        }
        
        .tech_item {
            transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.6s ease;
        }
    `;
    document.head.appendChild(style);
});

// Handle form submission (if you add a contact form later)
function handleFormSubmission(event) {
    event.preventDefault();
    // Add form handling logic here
    console.log('Form submitted');
}

// Add intersection observer for better performance (modern browsers)
if ('IntersectionObserver' in window) {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        const elements = document.querySelectorAll('.project_box_1, .project_box_2, .tech_item');
        elements.forEach(element => {
            observer.observe(element);
        });
    });
}

