document.addEventListener('DOMContentLoaded', () => {
    
    // --- A. Dynamic Search & Navigation ---
    
    const searchInput = document.querySelector('#search-input');
    const articles = document.querySelectorAll('.blog-post');

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();

        articles.forEach(article => {
            // Using innerText to grab all text inside the article
            const articleText = article.innerText.toLowerCase();
            
            // includes() checks if the text exists
            if (articleText.includes(searchTerm)) {
                article.classList.remove('hidden');
            } else {
                article.classList.add('hidden');
            }
        });
    });

    // Navigation Smooth Scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent instant jump
            const targetId = link.getAttribute('href'); 
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- B. The Engagement Score ---
    
    let score = 0; // Global score variable
    const scoreDisplay = document.querySelector('#score-display');
    const likeButtons = document.querySelectorAll('.like-btn');

    const updateScore = () => {
        score++; // Add 1 to total
        scoreDisplay.innerText = score; // Update DOM
        
        // If statement to turn gold at 10
        if (score >= 10) {
            scoreDisplay.classList.add('score-gold');
        }
    };

    // Attach click listener to all Like buttons
    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            updateScore();
            
            // Optional: Provide visual feedback that it was clicked
            button.innerHTML = `<b><i class="fa fa-check"></i> Liked!</b>`;
            button.disabled = true; // Prevents spam clicking the same button
        });
    });

    // --- C. Tag Cloud Filtering (Contextual Display) ---
    
    const tags = document.querySelectorAll('.tag-btn');
    const mainHeading = document.querySelector('#main-heading');

    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const selectedTagText = tag.innerText;
            
            // Change the heading of the blog page
            mainHeading.innerText = `JANE BLOGLIFE: ${selectedTagText.toUpperCase()}`;

            // Optional enhancement: Filter articles to show only those matching the tag
            articles.forEach(article => {
                const articleText = article.innerText.toLowerCase();
                if (articleText.includes(selectedTagText.toLowerCase())) {
                    article.classList.remove('hidden');
                } else {
                    article.classList.add('hidden');
                }
            });
        });
    });

    // --- D. Back to Top Behavior ---
    
    const backToTopBtn = document.querySelector('#back-to-top');

    window.addEventListener('scroll', () => {
        // Appears after scrolling down 200px
        if (window.scrollY > 200) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    // Make the button actually scroll to top when clicked
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});