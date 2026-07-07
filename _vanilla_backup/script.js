/* ==========================================================================
   XORNETTIS SOLUTIONS - INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Sticky Header scroll state --- */
    const header = document.getElementById('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init call in case of refresh


    /* --- 2. Mobile Menu Toggle --- */
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    const toggleMenu = () => {
        const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    };

    const closeMenu = () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('active');
    };

    mobileToggle.addEventListener('click', toggleMenu);

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!header.contains(e.target) && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });


    /* --- 3. Hero Interactive Particle Canvas --- */
    const canvas = document.getElementById('hero-particles');
    const ctx = canvas.getContext('2d');

    let particles = [];
    let animationFrameId;
    const particleCount = window.innerWidth < 768 ? 40 : 80;
    const connectionDistance = 120;
    const mouse = { x: null, y: null, radius: 150 };

    const resizeCanvas = () => {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Bounce off borders
            if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
            if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;

            // Mouse interaction
            if (mouse.x && mouse.y) {
                const dx = this.x - mouse.x;
                const dy = this.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    const force = (mouse.radius - dist) / mouse.radius;
                    this.x += (dx / dist) * force * 1.5;
                    this.y += (dy / dist) * force * 1.5;
                }
            }
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0, 242, 254, 0.4)';
            ctx.fill();
        }
    }

    const initParticles = () => {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    };
    initParticles();

    const animateParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        // Draw connections
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectionDistance) {
                    const alpha = (1 - dist / connectionDistance) * 0.15;
                    ctx.strokeStyle = `rgba(138, 63, 252, ${alpha})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        animationFrameId = requestAnimationFrame(animateParticles);
    };
    animateParticles();

    window.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });


    /* --- 4. Stats Counter Animation --- */
    const statNums = document.querySelectorAll('.stat-num');
    let animated = false;

    const countUp = (el) => {
        const target = parseFloat(el.getAttribute('data-target'));
        const duration = 2000; // ms
        const startTime = performance.now();
        const isFloat = el.getAttribute('data-target').includes('.');

        const updateCount = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Ease out quad
            const ease = progress * (2 - progress);
            const currentVal = ease * target;

            if (isFloat) {
                el.textContent = currentVal.toFixed(2);
            } else {
                el.textContent = Math.floor(currentVal).toString();
            }

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                // Ensure exact target value is written at the end
                el.textContent = target + (isFloat ? '' : '+');
            }
        };

        requestAnimationFrame(updateCount);
    };

    const statsSection = document.getElementById('stats');
    const observerOptions = {
        root: null,
        threshold: 0.3
    };

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                statNums.forEach(num => countUp(num));
                animated = true;
                statsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    if (statsSection) {
        statsObserver.observe(statsSection);
    }


    /* --- 5. Contact Lead Capture Form --- */
    const leadForm = document.getElementById('lead-form');
    const formFeedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');

    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Disable submit to prevent double posts
            submitBtn.disabled = true;
            submitBtn.textContent = 'Verifying Security...';
            formFeedback.className = 'form-feedback';
            formFeedback.textContent = '';

            // Simulate enterprise API validation & submit delay
            setTimeout(() => {
                const name = document.getElementById('client-name').value.trim();
                const email = document.getElementById('client-email').value.trim();
                const message = document.getElementById('client-message').value.trim();

                if (!name || !email || !message) {
                    formFeedback.textContent = '❌ All fields are required. Please check your entries.';
                    formFeedback.classList.add('error');
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Send Project Brief';
                    return;
                }

                // Simulated success
                formFeedback.textContent = '✓ Brief secure. Our system architects have logged your request. Checking schedules...';
                formFeedback.classList.add('success');
                submitBtn.textContent = 'Project Brief Logged';
                
                // Clear inputs
                leadForm.reset();

                // Optional: Provide direct WhatsApp redirect transition option
                setTimeout(() => {
                    formFeedback.textContent = '✓ Redirecting backup copy to direct engineering channels...';
                    // Re-enable button after some time
                    setTimeout(() => {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Send Project Brief';
                        formFeedback.className = 'form-feedback';
                        formFeedback.textContent = '';
                    }, 5000);
                }, 3000);

            }, 1500);
        });
    }


    /* --- 6. Newsletter Subscription Form --- */
    const newsletterForm = document.getElementById('newsletter-form');
    const newsletterFeedback = document.getElementById('newsletter-feedback');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            const submitBtn = newsletterForm.querySelector('button');

            submitBtn.disabled = true;
            submitBtn.textContent = '⏳';

            setTimeout(() => {
                newsletterFeedback.textContent = '✓ Subscribed to Tech Bulletin.';
                newsletterFeedback.className = 'newsletter-feedback success';
                emailInput.value = '';
                
                setTimeout(() => {
                    newsletterFeedback.textContent = '';
                    newsletterFeedback.className = 'newsletter-feedback';
                    submitBtn.disabled = false;
                    submitBtn.textContent = '➔';
                }, 4000);
            }, 1000);
        });
    }

});
