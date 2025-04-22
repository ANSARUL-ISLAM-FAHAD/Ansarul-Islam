document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Projects data
    const projects = [
        {
            title: "OmniAI Marketing Platform",
            description: "An intelligent marketing platform that automates campaign management, predicts customer behavior, and optimizes ad spend in real-time.",
            tags: ["AI", "Marketing", "Automation"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            demoLink: "#",
            caseStudyLink: "#"
        },
        {
            title: "Enterprise Support Agent",
            description: "AI-powered customer support agent that handles 80% of routine inquiries with human-level understanding and 24/7 availability.",
            tags: ["NLP", "Chatbot", "CX"],
            image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            demoLink: "#",
            caseStudyLink: "#"
        },
        {
            title: "Revenue Predictor",
            description: "Machine learning system that forecasts sales trends with 92% accuracy, helping businesses optimize inventory and staffing.",
            tags: ["ML", "Analytics", "SaaS"],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
            demoLink: "#",
            caseStudyLink: "#"
        }
    ];

    // Testimonials data
    const testimonials = [
        {
            content: "Ansarul's AI marketing solution transformed our customer acquisition strategy. We saw a 210% increase in qualified leads while reducing our CAC by 35%. His unique combination of technical and marketing expertise is rare in this industry.",
            author: "Sarah Johnson",
            position: "CMO, TechGrowth Inc.",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        {
            content: "The customer support agent Ansarul developed handles over 15,000 conversations monthly with a 94% resolution rate. It's been game-changing for our operations and has allowed our human team to focus on complex cases.",
            author: "Michael Chen",
            position: "Director of Operations, SupportLogic",
            avatar: "https://randomuser.me/api/portraits/men/32.jpg"
        },
        {
            content: "Working with Ansarul on our predictive analytics platform was exceptional. He not only delivered the technical solution but also helped us develop the go-to-market strategy that led to $1.2M in first-year revenue.",
            author: "Emma Rodriguez",
            position: "CEO, DataVision Analytics",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        }
    ];

    // Load projects dynamically
    const projectsContainer = document.querySelector('.projects-container');
    projects.forEach(project => {
        const projectHTML = `
            <div class="project-card fade-in">
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-links">
                        <a href="${project.caseStudyLink}" class="btn btn-outline">Case Study</a>
                        <a href="${project.demoLink}" class="btn">Live Demo</a>
                    </div>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectHTML;
    });

    // Load testimonials dynamically
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonials.forEach(testimonial => {
        const testimonialHTML = `
            <div class="testimonial-card fade-in">
                <div class="testimonial-content">
                    ${testimonial.content}
                </div>
                <div class="testimonial-author">
                    <div class="author-avatar">
                        <img src="${testimonial.avatar}" alt="${testimonial.author}">
                    </div>
                    <div class="author-info">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.position}</p>
                    </div>
                </div>
            </div>
        `;
        testimonialsContainer.innerHTML += testimonialHTML;
    });

    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            console.log('Form submitted:', { name, email, subject, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            contactForm.reset();
        });
    }

    // Intersection Observer for animations
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});