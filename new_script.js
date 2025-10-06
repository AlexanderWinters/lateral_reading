// Meter System
class MeterSystem {
    constructor() {
        this.credibility = parseInt(localStorage.getItem('credibility') || '100');
        this.popularity = parseInt(localStorage.getItem('popularity') || '50');
        this.updateDisplay();
    }

    updateCredibility(change, reason = '') {
        this.credibility = Math.max(0, Math.min(200, this.credibility + change));
        localStorage.setItem('credibility', this.credibility.toString());
        this.showChange('credibility', change, reason);
        this.updateDisplay();
    }

    updatePopularity(change, reason = '') {
        this.popularity = Math.max(0, Math.min(200, this.popularity + change));
        localStorage.setItem('popularity', this.popularity.toString());
        this.showChange('popularity', change, reason);
        this.updateDisplay();
    }

    showChange(type, change, reason) {
        const changeElement = document.getElementById(`${type}-change`);
        if (!changeElement) return;

        const sign = change > 0 ? '+' : '';
        const changeText = reason ? `${sign}${change} ${reason}` : `${sign}${change}`;

        changeElement.textContent = changeText;
        changeElement.className = `meter-change show ${change > 0 ? 'positive' : 'negative'}`;

        setTimeout(() => {
            changeElement.classList.remove('show');
        }, 2000);
    }

    updateDisplay() {
        const credibilityElement = document.getElementById('credibility-value');
        const popularityElement = document.getElementById('popularity-value');

        if (credibilityElement) credibilityElement.textContent = this.credibility;
        if (popularityElement) popularityElement.textContent = this.popularity;
    }

    reset() {
        this.credibility = 100;
        this.popularity = 50;
        localStorage.removeItem('credibility');
        localStorage.removeItem('popularity');
        this.updateDisplay();
    }
}

// Sample posts data
const posts = [
    {
        id: 1,
        title: "HOUSES ON FIRE -- authorities COVERING THIS UP!",
        thumbnail: "20250331_1425_Lägereldens hemlighet_simple_compose_01jqp2mszhef1r8jj1zdssmmhw.png",
        image: "20250331_1425_Lägereldens hemlighet_simple_compose_01jqp2mszhef1r8jj1zdssmmhw.png",
        description: "The images show a burning area in the city. Comments are upset: 'Why is no one reporting this?' 'We deserve to know the truth!'",
        unread: true,
        processed: false,
        status: null,
        searchTerms: ["Fire in the city", "City fire reports", "Authorities hiding fire", "Emergency response"],
        searchResults: [
            { title: "WAKE UP NOW", description: "This is being covered up! All over the country there are fires, but the media is silent!", isAd: true },
            { title: "Emergency Services confirm: Fire in northern district", description: "Official update on the current situation", isAd: false },
            { title: "Fire under control -- no injuries. Cause still unknown", description: "Brief update on the situation", isAd: false }
        ],
        imageResults: [
            { src: "20250331_1425_Lägereldens hemlighet_simple_compose_01jqp2mszhef1r8jj1zdssmmhw.png", location: "Original fire location", date: "Yesterday" },
            { src: "20250331_1500_Brinnande Hamn_simple_compose_01jqp4ktw8eansnadja80tedtm.png", location: "Different fire from archive", date: "Two years ago" }
        ]
    },
    {
        id: 2,
        title: "Extremist group plans attack on the library!",
        thumbnail: "20250401_0909_Calm Library Entrance_remix_01jqr2xer9fgg8zcecg5yc67s0.png",
        image: "20250401_0909_Calm Library Entrance_remix_01jqr2xer9fgg8zcecg5yc67s0.png",
        description: "Check the map below -- it's clear where they will strike. We must act before it's too late.",
        unread: true,
        processed: false,
        status: null,
        searchTerms: ["Library attack plans", "Extremist library threat", "Public building security"],
        searchResults: [
            { title: "NEWSBLADE: Post about attack -- police investigating", description: "Security services confirm they are analyzing a post", isAd: true },
            { title: "Police: No credible threats to public buildings", description: "Official statement from authorities", isAd: false }
        ],
        imageResults: [
            { src: "20250401_0909_Calm Library Entrance_remix_01jqr2xer9fgg8zcecg5yc67s0.png", location: "Library entrance - normal day", date: "Today" },
            { src: "20250401_0912_Ominous Library Map_remix_01jqr33q6rfdcscx9dpgsrenw7.png", location: "Manipulated map overlay", date: "Unknown" }
        ]
    }
];

// Global variables
let currentPost = null;
let currentState = 'home';
let selectedImages = [];
let scrollTimeout;
let meterSystem;

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    meterSystem = new MeterSystem();
    initializeApp();
    setupEventListeners();
    setupCustomLanguageSelector();
    generateSidebarPosts();
});

function initializeApp() {
    showPage('videoInstructionsPage');
    currentState = 'home';
}

function setupEventListeners() {
    // Navigation buttons
    document.getElementById('homeButton').addEventListener('click', goHome);
    document.getElementById('publishButton').addEventListener('click', publishPost);
    document.getElementById('flagButton').addEventListener('click', flagPost);
    document.getElementById('imageSearchButton').addEventListener('click', showImageSearch);
    document.getElementById('textSearchButton').addEventListener('click', showTextSearch);
    document.getElementById('backButton').addEventListener('click', backToPost);

    // Tip verification buttons
    document.getElementById('tipTrueButton').addEventListener('click', () => verifyTipp(true));
    document.getElementById('tipFalseButton').addEventListener('click', () => verifyTipp(false));

    // Language selector
    document.getElementById('languageSelector').addEventListener('change', changeLanguage);

    // Scroll tracking for lateral reading
    document.addEventListener('scroll', trackScroll);
}

function setupCustomLanguageSelector() {
    const customSelect = document.getElementById('languageSelectorCustom');
    const selected = customSelect.querySelector('.selected');
    const options = customSelect.querySelector('.options');

    selected.addEventListener('click', function() {
        options.style.display = options.style.display === 'block' ? 'none' : 'block';
    });

    options.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            const value = e.target.getAttribute('data-value');
            const text = e.target.textContent;

            selected.textContent = text;
            document.getElementById('languageSelector').value = value;
            options.style.display = 'none';

            changeLanguage({ target: { value: value } });
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!customSelect.contains(e.target)) {
            options.style.display = 'none';
        }
    });
}

function generateSidebarPosts() {
    const sidebarPosts = document.getElementById('sidebarPosts');
    sidebarPosts.innerHTML = '';

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = `post-item ${post.unread ? 'unread' : ''} ${post.processed ? 'processed' : ''}`;
        postElement.onclick = () => showPost(post.id);

        postElement.innerHTML = `
            <img class="post-thumbnail" src="${post.thumbnail}" alt="Post thumbnail">
            <div class="post-info">
                <div class="post-title">${post.title}</div>
                ${post.status ? `
                    <div class="post-status ${post.status}">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            ${post.status === 'published' ?
            '<path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' :
            '<path d="M6 2L6 22" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6H20L18 12L20 18H6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
        }
                        </svg>
                        ${post.status === 'published' ? 'Published' : 'Flagged'}
                    </div>
                ` : ''}
            </div>
        `;

        sidebarPosts.appendChild(postElement);
    });
}

function showPost(postId) {
    currentPost = posts.find(p => p.id === postId);
    if (currentPost) {
        // Mark as read and update meters
        if (currentPost.unread) {
            currentPost.unread = false;
            meterSystem.updatePopularity(2, '(reading)');
            generateSidebarPosts(); // Refresh sidebar
        }

        // Update post content
        document.getElementById('postImage').src = currentPost.image;
        document.getElementById('postTitle').textContent = currentPost.title;
        document.getElementById('postDescription').textContent = currentPost.description;

        // Show post view
        showPage('postViewPage');
        document.getElementById('topMenu').style.display = 'block';
        document.getElementById('postActionButtons').style.display = 'flex';
        document.getElementById('backButton').style.display = 'none';

        currentState = 'post';
    }
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    // Show selected page
    document.getElementById(pageId).classList.add('active');
}

function goHome() {
    showPage('videoInstructionsPage');
    document.getElementById('topMenu').style.display = 'none';
    currentState = 'home';
    currentPost = null;
}

function publishPost() {
    if (!currentPost) return;

    currentPost.processed = true;
    currentPost.status = 'published';

    // Meter updates
    meterSystem.updatePopularity(8, '(published)');
    meterSystem.updateCredibility(-2, '(speed)');

    showFeedback('feedbackPublished', 'published');
}

function flagPost() {
    if (!currentPost) return;

    currentPost.processed = true;
    currentPost.status = 'flagged';

    // Meter updates
    meterSystem.updateCredibility(5, '(flagged)');
    meterSystem.updatePopularity(-3, '(caution)');

    showFeedback('feedbackFlagged', 'flagged');
}

function showTextSearch() {
    if (!currentPost) return;

    // Reward for using fact-checking tools
    meterSystem.updateCredibility(3, '(research)');
    meterSystem.updatePopularity(-1, '(time)');

    // Generate search buttons
    const searchButtons = document.getElementById('searchButtons');
    searchButtons.innerHTML = '';

    currentPost.searchTerms.forEach(term => {
        const button = document.createElement('button');
        button.className = 'search-button';
        button.textContent = term;
        button.onclick = () => performTextSearch(term);
        searchButtons.appendChild(button);
    });

    showPage('textSearchOptionsPage');
    document.getElementById('backButton').style.display = 'flex';
    document.getElementById('postActionButtons').style.display = 'none';
    currentState = 'textSearch';
}

function performTextSearch(term) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    currentPost.searchResults.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = `search-result-item ${result.isAd ? 'ad' : ''}`;
        if (result.isAd) {
            resultElement.setAttribute('data-ad-text', 'Advertisement');
        }

        resultElement.innerHTML = `
            <h3>${result.title}</h3>
            <p>${result.description}</p>
        `;

        searchResults.appendChild(resultElement);
    });

    showPage('textSearchResultsPage');
}

function showImageSearch() {
    if (!currentPost) return;

    // Reward for using image verification
    meterSystem.updateCredibility(4, '(verification)');
    meterSystem.updatePopularity(-2, '(thorough)');

    // Generate image grid
    const imageGrid = document.getElementById('imageGrid');
    imageGrid.innerHTML = '';
    selectedImages = [];

    currentPost.imageResults.forEach((image, index) => {
        const imageElement = document.createElement('div');
        imageElement.className = 'image-item';
        imageElement.onclick = () => toggleImageSelection(index);

        imageElement.innerHTML = `
            <img src="${image.src}" alt="Search result image">
            <div class="image-info">
                <div>${image.location}</div>
                <div>${image.date}</div>
            </div>
        `;

        imageGrid.appendChild(imageElement);
    });

    showPage('imageSearchResultsPage');
    document.getElementById('backButton').style.display = 'flex';
    document.getElementById('postActionButtons').style.display = 'none';
    currentState = 'imageSearch';
}

function toggleImageSelection(index) {
    const imageElements = document.querySelectorAll('.image-item');
    const imageElement = imageElements[index];

    if (selectedImages.includes(index)) {
        selectedImages = selectedImages.filter(i => i !== index);
        imageElement.classList.remove('selected');
    } else {
        selectedImages.push(index);
        imageElement.classList.add('selected');
    }
}



function showFeedback(messageKey, status) {
    const feedbackMessage = document.getElementById('feedbackMessage');
    feedbackMessage.textContent = messageKey === 'feedbackPublished' ?
        'Content has been suggested for publication!' :
        'Content has been flagged as false!';
    feedbackMessage.className = `feedback-message ${status === 'flagged' ? 'error' : ''}`;

    showPage('feedbackPage');
    generateSidebarPosts(); // Refresh sidebar to show status

    // Auto return to home after feedback
    setTimeout(() => {
        goHome();
    }, 3000);
}

function backToPost() {
    if (currentPost) {
        showPost(currentPost.id);
    }
}

function changeLanguage(event) {
    const selectedLanguage = event.target.value;
    // Language switching logic would go here
    // For now, just update the custom selector display
    const customSelect = document.getElementById('languageSelectorCustom');
    const selected = customSelect.querySelector('.selected');
    const option = customSelect.querySelector(`[data-value="${selectedLanguage}"]`);
    if (option) {
        selected.textContent = option.textContent;
    }
}

function trackScroll() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (currentState === 'textSearch') {
            // Reward for scrolling past initial results (lateral reading)
            meterSystem.updateCredibility(1, '(lateral)');
        }
    }, 1000);
}

// Translation support (basic implementation)
function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        // Translation logic would use the translations object from translation.js
        // This is a placeholder for the actual translation system
    });
}