// Dropdown Menu Click Handler
function setupDropdownMenu() {
    const navItemDropdown = document.querySelector('.nav-item-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const navLink = document.querySelector('.nav-item-dropdown > .nav-link');
    const dropdownLinks = document.querySelectorAll('.dropdown-link');

    if (!navLink || !dropdownMenu) return;

    // Toggle dropdown on click
    navLink.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownMenu.classList.toggle('active');
    });

    // Close dropdown when clicking on a category
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            dropdownMenu.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!navItemDropdown.contains(e.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
}

// Countdown Timer
function updateCountdown() {
    // Set the target date (anniversary date)
    const targetDate = new Date('2026-06-08').getTime();
    
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        // Calculate time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Update DOM
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
        
        // Clear interval if countdown is finished
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
        }
    }, 1000);
}

// Flag to track if scrolling from navigation click
let isNavigationScroll = false;
let scrollTimeout;

// Remove highlight animation from all sections
function removeHighlightFromAll() {
    document.querySelectorAll('section.section-highlight').forEach(section => {
        section.classList.remove('section-highlight');
    });
}

// Smooth scroll for navigation links
function setupSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href') !== '#') {
                e.preventDefault();
                // Set flag to prevent animation triggers during navigation scroll
                isNavigationScroll = true;
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    // Remove highlight from all sections first
                    removeHighlightFromAll();
                    
                    // Add highlight animation to target section
                    targetElement.classList.add('section-highlight');
                    
                    // Scroll to element
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                    
                    // Reset flag after scroll completes (800ms for smooth scroll)
                    clearTimeout(scrollTimeout);
                    scrollTimeout = setTimeout(() => {
                        isNavigationScroll = false;
                    }, 800);
                    
                    // Remove highlight animation after 3 seconds
                    setTimeout(() => {
                        targetElement.classList.remove('section-highlight');
                    }, 3000);
                }
            }
        });
    });
}

// Newsletter form submission
function setupNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            if (email) {
                alert(`Cảm ơn bạn đã đăng ký! Email: ${email}\nBạn sẽ nhận được bài viết mới tại ${email}`);
                form.reset();
            }
        });
    }
}

// Add active class to navigation on scroll
function setupScrollNavigation() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        // Find which section is currently in viewport
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Check if section is actually visible in viewport
            if (pageYOffset >= sectionTop - 200 && pageYOffset < sectionTop + sectionHeight - 200) {
                current = section.getAttribute('id');
            }
        });
        
        // If no section is active and we're near the top, active "home"
        if (!current && pageYOffset < 200) {
            current = 'home';
        }
        
        // Update nav links styling
        navLinks.forEach(link => {
            link.style.borderBottom = 'none';
            link.style.color = '#333';
            
            if (link.getAttribute('href') === `#${current}`) {
                link.style.borderBottom = '3px solid #6366f1';
                link.style.color = '#6366f1';
            }
        });
    });
}

// Animate elements on scroll
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Only trigger animation if not currently scrolling from navigation
            if (entry.isIntersecting && !isNavigationScroll) {
                entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            } else if (entry.isIntersecting && isNavigationScroll) {
                // If already visible and navigating, just show without animation
                entry.target.style.animation = 'none';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all cards
    const cards = document.querySelectorAll(
        '.article-card, .featured-card, .about-card'
    );
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });
}

// Add click handlers to article cards
function setupArticleCards() {
    const cards = document.querySelectorAll('.article-card, .featured-card');
    cards.forEach(card => {
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => {
            // In a real app, this would navigate to the article page
            const title = card.querySelector('h3, h4')?.textContent || 'Article';
            alert(`Bài viết: ${title}\n\nTrong ứng dụng thực tế, bạn sẽ được chuyển đến trang bài viết chi tiết.`);
        });
    });
}

// Contact cards now use href, no need for click handler

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setupDropdownMenu();
    updateCountdown();
    setupSmoothScroll();
    setupNewsletterForm();
    setupScrollNavigation();
    setupScrollAnimations();
    setupArticleCards();
    
    // Log initialization
    console.log('Blog website initialized successfully!');
});

// Handle mouse effects on hero section
const hero = document.querySelector('.hero');
if (hero) {
    hero.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX / window.innerWidth) * 20;
        const moveY = (e.clientY / window.innerHeight) * 20;
        hero.style.backgroundPosition = `${moveX}px ${moveY}px`;
    });
}
