// Game concept presentation interactivity
class GamePresentation {
    constructor() {
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupIntersectionObserver();
        this.setupBossCardInteractions();
        this.setupSmoothScrolling();
    }

    // Navigation functionality
    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav__link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Get target section ID from href attribute
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Remove active class from all links
                    navLinks.forEach(l => l.classList.remove('active'));
                    // Add active class to clicked link
                    link.classList.add('active');
                    
                    // Scroll to target section
                    const headerOffset = 80; // Account for fixed navigation
                    const elementPosition = targetSection.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Update active navigation link on scroll
        this.updateActiveNavLink();
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav__link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Check if the link's href matches the current section
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-100px 0px -50% 0px'
        });

        sections.forEach(section => observer.observe(section));
    }

    // Scroll-based animations
    setupScrollAnimations() {
        const animatedElements = document.querySelectorAll('[data-reveal]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    const animationType = element.getAttribute('data-reveal');
                    
                    switch (animationType) {
                        case 'fade-in':
                            element.classList.add('visible');
                            break;
                        case 'slide-up':
                            element.classList.add('visible');
                            break;
                        default:
                            element.classList.add('visible');
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        animatedElements.forEach(element => observer.observe(element));
    }

    // Intersection Observer for general visibility
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe story events
        const storyEvents = document.querySelectorAll('.story__event');
        storyEvents.forEach((event, index) => {
            event.style.transitionDelay = `${index * 0.2}s`;
            observer.observe(event);
        });

        // Observe mechanic cards
        const mechanicCards = document.querySelectorAll('.mechanic__card');
        mechanicCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.15}s`;
            observer.observe(card);
        });

        // Observe location items
        const locationItems = document.querySelectorAll('.location__item');
        locationItems.forEach((item, index) => {
            item.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(item);
        });
    }

    // Boss card interactions
    setupBossCardInteractions() {
        const bossCards = document.querySelectorAll('.boss__card');
        
        bossCards.forEach(card => {
            const bossType = card.getAttribute('data-boss');
            
            card.addEventListener('mouseenter', () => {
                this.activateBossCard(card, bossType);
            });
            
            card.addEventListener('mouseleave', () => {
                this.deactivateBossCard(card);
            });

            // Add click interaction for mobile
            card.addEventListener('click', () => {
                this.toggleBossCard(card, bossType);
            });
        });
    }

    activateBossCard(card, bossType) {
        // Add pulsing glow effect
        card.style.animation = 'bossCardPulse 2s ease-in-out infinite';
        
        // Add specific boss effects
        switch (bossType) {
            case 'scarecrow':
                this.addScarecrowEffect(card);
                break;
            case 'tinman':
                this.addTinmanEffect(card);
                break;
            case 'lion':
                this.addLionEffect(card);
                break;
        }
    }

    deactivateBossCard(card) {
        card.style.animation = '';
        card.style.filter = '';
    }

    toggleBossCard(card, bossType) {
        const isActive = card.classList.contains('boss-active');
        
        // Remove active state from all cards
        document.querySelectorAll('.boss__card').forEach(c => {
            c.classList.remove('boss-active');
            c.style.animation = '';
        });
        
        if (!isActive) {
            card.classList.add('boss-active');
            this.activateBossCard(card, bossType);
        }
    }

    addScarecrowEffect(card) {
        card.style.filter = 'hue-rotate(15deg) brightness(1.1)';
    }

    addTinmanEffect(card) {
        card.style.filter = 'hue-rotate(30deg) brightness(1.1) saturate(1.2)';
    }

    addLionEffect(card) {
        card.style.filter = 'hue-rotate(45deg) brightness(1.1) saturate(1.1)';
    }

    // Smooth scrolling enhancement
    setupSmoothScrolling() {
        // Add smooth scrolling behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Add scroll progress indicator
        this.createScrollProgress();
        
        // Add parallax effects
        this.setupParallax();
    }

    createScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        progressBar.innerHTML = '<div class="scroll-progress-bar"></div>';
        document.body.appendChild(progressBar);

        const progressBarFill = progressBar.querySelector('.scroll-progress-bar');

        window.addEventListener('scroll', () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            progressBarFill.style.width = `${progress}%`;
        });
    }

    setupParallax() {
        const parallaxElements = document.querySelectorAll('.hero__image, .section::before');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            parallaxElements.forEach(element => {
                if (element.classList.contains('hero__image')) {
                    element.style.transform = `translateY(${rate * 0.3}px)`;
                }
            });
        });
    }
}

// Utility functions for enhanced interactivity
class AnimationUtils {
    static typeWriter(element, text, speed = 50) {
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

    static fadeInStagger(elements, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * delay);
        });
    }

    static glowEffect(element, color = '#00ff88') {
        element.style.boxShadow = `0 0 20px ${color}`;
        element.style.borderColor = color;
        
        setTimeout(() => {
            element.style.boxShadow = '';
            element.style.borderColor = '';
        }, 2000);
    }
}

// Enhanced boss card interactions
class BossEffects {
    static createFloatingElements(container, count = 5) {
        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: #00ff88;
                border-radius: 50%;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: float ${2 + Math.random() * 3}s ease-in-out infinite;
                opacity: 0.7;
            `;
            container.appendChild(element);
            
            // Remove after animation
            setTimeout(() => {
                if (element.parentNode) {
                    element.parentNode.removeChild(element);
                }
            }, 5000);
        }
    }

    static scarecrowEffect(card) {
        // Create crow-like floating elements
        this.createFloatingElements(card, 3);
        
        // Add red glow
        AnimationUtils.glowEffect(card, '#ff3366');
    }

    static tinmanEffect(card) {
        // Create spark-like effects
        for (let i = 0; i < 8; i++) {
            const spark = document.createElement('div');
            spark.className = 'spark-effect';
            spark.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: #ff6633;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                animation: sparkle 1s ease-out forwards;
            `;
            card.appendChild(spark);
            
            setTimeout(() => {
                if (spark.parentNode) {
                    spark.parentNode.removeChild(spark);
                }
            }, 1000);
        }
    }

    static lionEffect(card) {
        // Create golden glow effect
        AnimationUtils.glowEffect(card, '#ffcc00');
        
        // Add shadow movement
        card.style.animation = 'shadowMove 3s ease-in-out infinite';
    }
}

// Add CSS animations dynamically
function addCustomAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bossCardPulse {
            0%, 100% { transform: translateY(-10px) scale(1.02); }
            50% { transform: translateY(-15px) scale(1.05); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes sparkle {
            0% { opacity: 1; transform: scale(0); }
            50% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
        }
        
        @keyframes shadowMove {
            0%, 100% { box-shadow: 0 20px 40px rgba(255, 204, 0, 0.3); }
            50% { box-shadow: 0 25px 50px rgba(255, 204, 0, 0.5); }
        }
        
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: rgba(0, 0, 0, 0.3);
            z-index: 9999;
        }
        
        .scroll-progress-bar {
            height: 100%;
            background: linear-gradient(90deg, #00ff88, #ff3366, #ffcc00, #3399ff);
            width: 0%;
            transition: width 0.3s ease;
        }
        
        .boss-active {
            z-index: 10;
            position: relative;
        }
        
        .floating-element {
            pointer-events: none;
            z-index: 1;
        }
        
        .spark-effect {
            pointer-events: none;
            z-index: 1;
        }
        
        /* Enhanced navigation active states */
        .nav__link.active {
            color: var(--accent-emerald) !important;
            text-shadow: 0 0 10px var(--accent-emerald);
        }
        
        .nav__link.active::after {
            width: 100% !important;
        }
    `;
    document.head.appendChild(style);
}

// Initialize the presentation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    addCustomAnimations();
    new GamePresentation();
    
    // Add enhanced boss effects
    const bossCards = document.querySelectorAll('.boss__card');
    bossCards.forEach(card => {
        const bossType = card.getAttribute('data-boss');
        
        card.addEventListener('mouseenter', () => {
            switch (bossType) {
                case 'scarecrow':
                    BossEffects.scarecrowEffect(card);
                    break;
                case 'tinman':
                    BossEffects.tinmanEffect(card);
                    break;
                case 'lion':
                    BossEffects.lionEffect(card);
                    break;
            }
        });
    });
    
    // Add Easter egg: Konami code
    let konamiCode = [];
    const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.keyCode);
        if (konamiCode.length > konami.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konami.join(',')) {
            // Activate special emerald effect
            document.body.style.animation = 'emeraldPulse 2s ease-in-out 3';
            
            // Add emerald pulse animation
            const emeraldStyle = document.createElement('style');
            emeraldStyle.textContent = `
                @keyframes emeraldPulse {
                    0%, 100% { filter: hue-rotate(0deg); }
                    50% { filter: hue-rotate(120deg) saturate(2); }
                }
            `;
            document.head.appendChild(emeraldStyle);
            
            // Reset after animation
            setTimeout(() => {
                document.body.style.animation = '';
                konamiCode = [];
            }, 6000);
        }
    });
});

// Performance optimization
class PerformanceOptimizer {
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static debounce(func, wait, immediate) {
        let timeout;
        return function() {
            const context = this, args = arguments;
            const later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }
}

// Optimize scroll events
window.addEventListener('scroll', PerformanceOptimizer.throttle(() => {
    // Scroll-based optimizations here
}, 16)); // ~60fps