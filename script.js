function translateKey(key) {
    return languageData[currentLanguage][key] || key;
}

// Updated posts data structure that works with the existing code
const postsData = [
    {
        id: 1,
        title: "burnalertTitle",
        thumbnail: "img/burn_intro.png",
        image: "img/burn_intro.png",
        description: "burnalertDescription",
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        searchTerms: ["burnalertsearchTerms1", "burnalertsearchTerms2", "burnalertsearchTerms3", "burnalertsearchTerms4"],
        searchResults: [
            { title: "burnalerttitle1", description: "burnalertdescription1", isAd: true },
            { title: "burnalerttitle2", description: "burnalertdescription2", isAd: true },
            { title: "burnalerttitle3", description: "burnalertdescription3", isAd: true },
            { title: "burnalerttitle4", description: "burnalertdescription4", isAd: false },
            { title: "burnalerttitle5", description: "burnalertdescription5", isAd: false },
            { title: "burnalerttitle6", description: "burnalertdescription6", isAd: false },
            { title: "burnalerttitle7", description: "burnalertdescription7", isAd: false },
            { title: "burnalerttitle8", description: "burnalertdescription8", isAd: true },
            { title: "burnalerttitle9", description: "burnalertdescription9", isAd: false },
            { title: "burnalerttitle10", description: "burnalertdescription10", isAd: false },
            { title: "burnalerttitle11", description: "burnalertdescription11", isAd: true },
            { title: "burnalerttitle12", description: "burnalertdescription12", isAd: false },
            { title: "burnalerttitle13", description: "burnalertdescription13", isAd: false },
            { title: "burnalerttitle14", description: "burnalertdescription14", isAd: true },
            { title: "burnalerttitle15", description: "burnalertdescription15", isAd: false }
        ],
        imageResults: [
            { src: "img/burn1.png", location: "burnalertlocation1", date: "burnalertdate1" },
            { src: "img/burn2.png", location: "burnalertlocation2", date: "burnalertdate2" },
            { src: "img/burn3.png", location: "burnalertlocation3", date: "burnalertdate3" },
            { src: "img/burn4.png", location: "burnalertlocation4", date: "burnalertdate4" }
        ]
    },
    {
        id: 2,
        title: "libraryTitle",
        thumbnail: "img/extrimistalert.png",
        image: "img/extrimistalert.png",
        description: "libraryDescription",
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        searchTerms: ["librarysearchTerms1", "librarysearchTerms2", "librarysearchTerms3", "librarysearchTerms4"],
        searchResults: [
            { title: "librarytitle1", description: "librarydescription1", isAd: true },
            { title: "librarytitle2", description: "librarydescription2", isAd: true },
            { title: "librarytitle3", description: "librarydescription3", isAd: true },
            { title: "librarytitle4", description: "librarydescription4", isAd: false },
            { title: "librarytitle5", description: "librarydescription5", isAd: false },
            { title: "librarytitle6", description: "librarydescription6", isAd: false },
            { title: "librarytitle7", description: "librarydescription7", isAd: false },
            { title: "librarytitle8", description: "librarydescription8", isAd: true },
            { title: "librarytitle9", description: "librarydescription9", isAd: false },
            { title: "librarytitle10", description: "librarydescription10", isAd: false },
            { title: "librarytitle11", description: "librarydescription11", isAd: true },
            { title: "librarytitle12", description: "librarydescription12", isAd: false },
            { title: "librarytitle13", description: "librarydescription13", isAd: false },
            { title: "librarytitle14", description: "librarydescription14", isAd: true },
            { title: "librarytitle15", description: "librarydescription15", isAd: false },
            { title: "librarytitle16", description: "librarydescription16", isAd: false },
            { title: "librarytitle17", description: "librarydescription17", isAd: true },
            { title: "librarytitle18", description: "librarydescription18", isAd: false }
        ],
        imageResults: [
            { src: "img/lib1.png", location: "librarylocation1", date: "librarydate1" },
            { src: "img/lib2.png", location: "librarylocation2", date: "librarydate2" },
            { src: "img/lib3.png", location: "librarylocation3", date: "librarydate3" },
            { src: "img/lib4.png", location: "librarylocation4", date: "librarydate4" }
        ]
    },
    {
        id: 3,
        title: "extrimistalertTitle",
        thumbnail: "img/military_convoy.png",
        image: "img/military_convoy.png",
        description: "extrimistalertDescription",
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        searchTerms: ["extrimistalertsearchTerms1", "extrimistalertsearchTerms2", "extrimistalertsearchTerms3", "extrimistalertsearchTerms4"],
        searchResults: [
            { title: "extrimistalerttitle1", description: "extrimistalertdescription1", isAd: true },
            { title: "extrimistalerttitle2", description: "extrimistalertdescription2", isAd: true },
            { title: "extrimistalerttitle3", description: "extrimistalertdescription3", isAd: true },
            { title: "extrimistalerttitle4", description: "extrimistalertdescription4", isAd: false },
            { title: "extrimistalerttitle5", description: "extrimistalertdescription5", isAd: false },
            { title: "extrimistalerttitle6", description: "extrimistalertdescription6", isAd: false },
            { title: "extrimistalerttitle7", description: "extrimistalertdescription7", isAd: false },
            { title: "extrimistalerttitle8", description: "extrimistalertdescription8", isAd: true },
            { title: "extrimistalerttitle9", description: "extrimistalertdescription9", isAd: false },
            { title: "extrimistalerttitle10", description: "extrimistalertdescription10", isAd: false },
            { title: "extrimistalerttitle11", description: "extrimistalertdescription11", isAd: true },
            { title: "extrimistalerttitle12", description: "extrimistalertdescription12", isAd: false },
            { title: "extrimistalerttitle13", description: "extrimistalertdescription13", isAd: false },
            { title: "extrimistalerttitle14", description: "extrimistalertdescription14", isAd: true },
            { title: "extrimistalerttitle15", description: "extrimistalertdescription15", isAd: false },
            { title: "extrimistalerttitle16", description: "extrimistalertdescription16", isAd: false },
            { title: "extrimistalerttitle17", description: "extrimistalertdescription17", isAd: true },
            { title: "extrimistalerttitle18", description: "extrimistalertdescription18", isAd: false },
            { title: "extrimistalerttitle19", description: "extrimistalertdescription19", isAd: false },
            { title: "extrimistalerttitle20", description: "extrimistalertdescription20", isAd: true }
        ],
        imageResults: [
            { src: "img/military_convoy_day.png", location: "extrimistalertlocation1", date: "extrimistalertdate1" },
            { src: "img/military_exercise.png", location: "extrimistalertlocation2", date: "extrimistalertdate2" },
            { src: "img/extrimistalert3.png", location: "extrimistalertlocation3", date: "extrimistalertdate3" },
            { src: "img/military_coup.png", location: "extrimistalertlocation4", date: "extrimistalertdate4" }
        ]
    },
    {
        id: 4,
        title: "waterpoisoningTitle",
        thumbnail: "img/waterpoisoning.png",
        image: "img/waterpoisoning.png",
        description: "waterpoisoningDescription",
        unread: false,
        processed: false,
        status: null,
        correctAnswer: false,
        searchTerms: ["waterpoisoningsearchTerms1", "waterpoisoningsearchTerms2", "waterpoisoningsearchTerms3", "waterpoisoningsearchTerms4"],
        searchResults: [
            { title: "waterpoisoningtitle1", description: "waterpoisoningdescription1", isAd: true },
            { title: "waterpoisoningtitle2", description: "waterpoisoningdescription2", isAd: true },
            { title: "waterpoisoningtitle3", description: "waterpoisoningdescription3", isAd: true },
            { title: "waterpoisoningtitle4", description: "waterpoisoningdescription4", isAd: false },
            { title: "waterpoisoningtitle5", description: "waterpoisoningdescription5", isAd: false },
            { title: "waterpoisoningtitle6", description: "waterpoisoningdescription6", isAd: false },
            { title: "waterpoisoningtitle7", description: "waterpoisoningdescription7", isAd: false },
            { title: "waterpoisoningtitle8", description: "waterpoisoningdescription8", isAd: true },
            { title: "waterpoisoningtitle9", description: "waterpoisoningdescription9", isAd: false },
            { title: "waterpoisoningtitle10", description: "waterpoisoningdescription10", isAd: false },
            { title: "waterpoisoningtitle11", description: "waterpoisoningdescription11", isAd: true },
            { title: "waterpoisoningtitle12", description: "waterpoisoningdescription12", isAd: false },
            { title: "waterpoisoningtitle13", description: "waterpoisoningdescription13", isAd: false },
            { title: "waterpoisoningtitle14", description: "waterpoisoningdescription14", isAd: true },
            { title: "waterpoisoningtitle15", description: "waterpoisoningdescription15", isAd: false },
            { title: "waterpoisoningtitle16", description: "waterpoisoningdescription16", isAd: false },
            { title: "waterpoisoningtitle17", description: "waterpoisoningdescription17", isAd: true },
            { title: "waterpoisoningtitle18", description: "waterpoisoningdescription18", isAd: false }
        ],
        imageResults: [
            { src: "img/waterpoisoning1.png", location: "waterpoisoninglocation1", date: "waterpoisoningdate1" },
            { src: "img/waterpoisoning2.png", location: "waterpoisoninglocation2", date: "waterpoisoningdate2" },
            { src: "img/waterpoisoning3.png", location: "waterpoisoninglocation3", date: "waterpoisoningdate3" },
            { src: "img/waterpoisoning4.png", location: "waterpoisoninglocation4", date: "waterpoisoningdate4" }
        ]
    },
    {
        id: 5,
        title: "petsTitle",
        thumbnail: "img/pets.png",
        image: "img/pets.png",
        description: "petsDescription",
        unread: false,
        processed: false,
        status: null,
        correctAnswer: false,
        searchTerms: ["petssearchTerms1", "petssearchTerms2", "petssearchTerms3", "petssearchTerms4"],
        searchResults: [
            { title: "petstitle1", description: "petsdescription1", isAd: true },
            { title: "petstitle2", description: "petsdescription2", isAd: true },
            { title: "petstitle3", description: "petsdescription3", isAd: true },
            { title: "petstitle4", description: "petsdescription4", isAd: false },
            { title: "petstitle5", description: "petsdescription5", isAd: false },
            { title: "petstitle6", description: "petsdescription6", isAd: false },
            { title: "petstitle7", description: "petsdescription7", isAd: false },
            { title: "petstitle8", description: "petsdescription8", isAd: true },
            { title: "petstitle9", description: "petsdescription9", isAd: false },
            { title: "petstitle10", description: "petsdescription10", isAd: false },
            { title: "petstitle11", description: "petsdescription11", isAd: true },
            { title: "petstitle12", description: "petsdescription12", isAd: false },
            { title: "petstitle13", description: "petsdescription13", isAd: false },
            { title: "petstitle14", description: "petsdescription14", isAd: true },
            { title: "petstitle15", description: "petsdescription15", isAd: false },
            { title: "petstitle16", description: "petsdescription16", isAd: false },
            { title: "petstitle17", description: "petsdescription17", isAd: true },
            { title: "petstitle18", description: "petsdescription18", isAd: false },
            { title: "petstitle19", description: "petsdescription19", isAd: false },
            { title: "petstitle20", description: "petsdescription20", isAd: true },
            { title: "petstitle21", description: "petsdescription21", isAd: false },
            { title: "petstitle22", description: "petsdescription22", isAd: false }
        ],
        imageResults: [
            { src: "img/pets1.png", location: "petslocation1", date: "petsdate1" },
            { src: "img/pets2.png", location: "petslocation2", date: "petsdate2" },
            { src: "img/pets3.png", location: "petslocation3", date: "petsdate3" },
            { src: "img/pets4.png", location: "petslocation4", date: "petsdate4" }
        ]
    },
    {
        id: 6,
        title: "celebrityDeathTitle",
        thumbnail: "img/memorial.png",
        image: "img/memorial.png",
        description: "celebrityDeathDescription",
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        searchTerms: ["celebrityDeathSearchTerms1", "celebrityDeathSearchTerms2", "celebrityDeathSearchTerms3", "celebrityDeathSearchTerms4"],
        searchResults: [
            { title: "celebrityDeathtitle1", description: "celebrityDeathdescription1", isAd: true },
            { title: "celebrityDeathtitle2", description: "celebrityDeathdescription2", isAd: true },
            { title: "celebrityDeathtitle3", description: "celebrityDeathdescription3", isAd: false },
            { title: "celebrityDeathtitle4", description: "celebrityDeathdescription4", isAd: false },
            { title: "celebrityDeathtitle5", description: "celebrityDeathdescription5", isAd: false },
            { title: "celebrityDeathtitle6", description: "celebrityDeathdescription6", isAd: true },
            { title: "celebrityDeathtitle7", description: "celebrityDeathdescription7", isAd: false },
            { title: "celebrityDeathtitle8", description: "celebrityDeathdescription8", isAd: false },
            { title: "celebrityDeathtitle9", description: "celebrityDeathdescription9", isAd: true },
            { title: "celebrityDeathtitle10", description: "celebrityDeathdescription10", isAd: false }
        ],
        imageResults: [
            { src: "img/celeb1.png", location: "celebrityDeathlocation1", date: "celebrityDeathdate1" },
            { src: "img/celeb2.png", location: "celebrityDeathlocation2", date: "celebrityDeathdate2" },
            { src: "img/celeb3.png", location: "celebrityDeathlocation3", date: "celebrityDeathdate3" },
            { src: "img/celeb4.png", location: "celebrityDeathlocation4", date: "celebrityDeathdate4" }
        ]
    },
    {
        id: 7,
        title: "weatherAlertTitle",
        thumbnail: "img/storm.png",
        image: "img/storm.png",
        description: "weatherAlertDescription",
        unread: true,
        processed: false,
        status: null,
        correctAnswer: true,
        searchTerms: ["weatherAlertsearchTerms1", "weatherAlertsearchTerms2", "weatherAlertsearchTerms3", "weatherAlertsearchTerms4"],
        searchResults: [
            { title: "weatherAlerttitle1", description: "weatherAlertdescription1", isAd: true },
            { title: "weatherAlerttitle2", description: "weatherAlertdescription2", isAd: false },
            { title: "weatherAlerttitle3", description: "weatherAlertdescription3", isAd: false },
            { title: "weatherAlerttitle4", description: "weatherAlertdescription4", isAd: true },
            { title: "weatherAlerttitle5", description: "weatherAlertdescription5", isAd: false },
            { title: "weatherAlerttitle6", description: "weatherAlertdescription6", isAd: false },
            { title: "weatherAlerttitle7", description: "weatherAlertdescription7", isAd: true },
            { title: "weatherAlerttitle8", description: "weatherAlertdescription8", isAd: false },
            { title: "weatherAlerttitle9", description: "weatherAlertdescription9", isAd: false },
            { title: "weatherAlerttitle10", description: "weatherAlertdescription10", isAd: true },
            { title: "weatherAlerttitle11", description: "weatherAlertdescription11", isAd: false },
            { title: "weatherAlerttitle12", description: "weatherAlertdescription12", isAd: false }
        ],
        imageResults: [
            { src: "img/storm2.png", location: "weatherAlertlocation1", date: "weatherAlertdate1" },
            { src: "img/storm1.png", location: "weatherAlertlocation2", date: "weatherAlertdate2" },
            { src: "img/storm3.png", location: "weatherAlertlocation3", date: "weatherAlertdate3" },
            { src: "img/storm4.png", location: "weatherAlertlocation4", date: "weatherAlertdate4" }
        ]
    },
    {
        id: 8,
        title: "dogfluencerTitle",
        thumbnail: "img/dogfluencer.png",
        image: "img/dogfluencer.png",
        description: "dogfluencerDescription",
        unread: false,
        processed: false,
        status: null,
        correctAnswer: true,
        searchTerms: ["dogfluencersearchTerms1", "dogfluencersearchTerms2", "dogfluencersearchTerms3", "dogfluencersearchTerms4"],
        searchResults: [
            { title: "dogfluencertitle1", description: "dogfluencerdescription1", isAd: true },
            { title: "dogfluencertitle2", description: "dogfluencerdescription2", isAd: true },
            { title: "dogfluencertitle3", description: "dogfluencerdescription3", isAd: true },
            { title: "dogfluencertitle4", description: "dogfluencerdescription4", isAd: false },
            { title: "dogfluencertitle5", description: "dogfluencerdescription5", isAd: false },
            { title: "dogfluencertitle6", description: "dogfluencerdescription6", isAd: false },
            { title: "dogfluencertitle7", description: "dogfluencerdescription7", isAd: false },
            { title: "dogfluencertitle8", description: "dogfluencerdescription8", isAd: true },
            { title: "dogfluencertitle9", description: "dogfluencerdescription9", isAd: false },
            { title: "dogfluencertitle10", description: "dogfluencerdescription10", isAd: false },
            { title: "dogfluencertitle11", description: "dogfluencerdescription11", isAd: true },
            { title: "dogfluencertitle12", description: "dogfluencerdescription12", isAd: false },
            { title: "dogfluencertitle13", description: "dogfluencerdescription13", isAd: false },
            { title: "dogfluencertitle14", description: "dogfluencerdescription14", isAd: true },
            { title: "dogfluencertitle15", description: "dogfluencerdescription15", isAd: false }
        ],
        imageResults: [
            { src: "img/dogfluencer3.png", location: "dogfluencerlocation1", date: "dogfluencerdate1" },
            { src: "img/dogfluencer2.png", location: "dogfluencerlocation2", date: "dogfluencerdate2" },
            { src: "img/dogfluencer1.png", location: "dogfluencerlocation3", date: "dogfluencerdate3" },
            { src: "img/dogfluencer4.png", location: "dogfluencerlocation4", date: "dogfluencerdate4" }
        ]
    }
];

        // DOM elements
        const languageSelector = document.getElementById('languageSelector');
        const homeButton = document.getElementById('homeButton');
        const sidebarPosts = document.getElementById('sidebarPosts');
        const topMenu = document.getElementById('topMenu');
        const postActionButtons = document.getElementById('postActionButtons');
        const postStatusMessage = document.getElementById('postStatusMessage');
        const backButton = document.getElementById('backButton');
        const contentArea = document.getElementById('contentArea');
        const publishButton = document.getElementById('publishButton');
        const imageSearchButton = document.getElementById('imageSearchButton');
        const textSearchButton = document.getElementById('textSearchButton');
        const flagButton = document.getElementById('flagButton');
        const tipTrueButton = document.getElementById('tipTrueButton');
        const tipFalseButton = document.getElementById('tipFalseButton');

        // Page elements
        const videoInstructionsPage = document.getElementById('videoInstructionsPage');
        const postViewPage = document.getElementById('postViewPage');
        const textSearchOptionsPage = document.getElementById('textSearchOptionsPage');
        const textSearchResultsPage = document.getElementById('textSearchResultsPage');
        const imageSearchResultsPage = document.getElementById('imageSearchResultsPage');
        const feedbackPage = document.getElementById('feedbackPage');

        // Content elements
        const postImage = document.getElementById('postImage');
        const postTitle = document.getElementById('postTitle');
        const postDescription = document.getElementById('postDescription');
        const searchButtons = document.getElementById('searchButtons');
        const searchResults = document.getElementById('searchResults');
        const imageGrid = document.getElementById('imageGrid');
        const feedbackMessage = document.getElementById('feedbackMessage');
        const feedbackVideo = document.getElementById('feedbackVideo');

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

// Initialize meter system
const meterSystem = new MeterSystem();

        // Current state
let currentLanguage = 'en';
let currentPostId = null;
let selectedImages = [];
let usedEvidenceCount = 0; // Track how many results have been used as evidence
const MAX_EVIDENCE_PER_STORY = 2; // Maximum evidence items per story

localStorage.removeItem('correctDecisions');
localStorage.removeItem('totalProcessed');

let correctDecisions = parseInt(localStorage.getItem('correctDecisions') || '0');
let totalProcessed = parseInt(localStorage.getItem('totalProcessed') || '0');
const TOTAL_STORIES = 8;
const WIN_THRESHOLD = 7;

function updateCompletionCounter() {
    const completionValue = document.getElementById('completion-value');
    if (completionValue) {
        completionValue.textContent = `${correctDecisions}/${WIN_THRESHOLD}`;
    }
}


        // Initialize the application
        function init() {
            // Set up language switching
            languageSelector.addEventListener('change', function() {
                currentLanguage = this.value;
                updateLanguage();
            });

            // Generate posts in sidebar
            generatePosts();

            // Set up event listeners
            setupEventListeners();

            const metersContainer = document.querySelector('.meters-container');

            updateCompletionCounter();

            // Set initial language
            updateLanguage();

            // Show landing page
            showPage(videoInstructionsPage);
        }

        // Set up event listeners
        function setupEventListeners() {
            // Home button
            homeButton.addEventListener('click', function() {
                showPage(videoInstructionsPage);
                hideTopMenu();
            });

            // Post actions
            publishButton.addEventListener('click', function() {
                processPost('published');
            });

            flagButton.addEventListener('click', function() {
                processPost('flagged');
            });

            imageSearchButton.addEventListener('click', function() {
                if (currentPostId) {
                    showImageSearchResults();
                }
            });

            textSearchButton.addEventListener('click', function() {
                if (currentPostId) {
                    showTextSearchOptions();
                }
            });

            // Back button
            backButton.addEventListener('click', function() {
                loadPost(currentPostId);
            });

            // Image verification
            document.getElementById('tipTrueButton').addEventListener('click', () => processPost('published'));
            document.getElementById('tipFalseButton').addEventListener('click', () => processPost('flagged'));

        }


        // Generate posts in sidebar
        function generatePosts() {
            sidebarPosts.innerHTML = '';
            
            postsData.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = `post-item${post.unread ? ' unread' : ''}${post.processed ? ' processed' : ''}`;
                postElement.dataset.postId = post.id;
                
                let statusHTML = '';
                if (post.status === 'published') {
                    statusHTML = `
                        <div class="post-status">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span data-lang-key="published">Suggested to be published</span>
                        </div>
                    `;
                } else if (post.status === 'flagged') {
                    statusHTML = `
                        <div class="post-status flagged">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span data-lang-key="flagged">Flagged as false</span>
                        </div>
                    `;
                }
                
                postElement.innerHTML = `
                    <img src="${post.thumbnail}" alt="" class="post-thumbnail">
                    <div class="post-info">
                        <div class="post-title">${translateKey(post.title)}</div>
                        ${statusHTML}
                    </div>
                `;
                
                postElement.addEventListener('click', function() {
                    loadPost(post.id);
                });
                
                sidebarPosts.appendChild(postElement);
            });
        }

        // Load a post
function loadPost(postId) {
    currentPostId = postId;
    const post = postsData.find(p => p.id === postId);

    if (post) {
        // Reset evidence count when loading a different post
        usedEvidenceCount = post.usedEvidenceCount || 0;

        // Reset fact-checking tracking for fresh start
        post.performedTextSearch = false;
        post.performedImageSearch = false;

        // Update post content
        postImage.src = post.image;
        postTitle.textContent = translateKey(post.title);
        postDescription.textContent = translateKey(post.description);

        // Show post view
        showPage(postViewPage);

        // Update top menu
        showTopMenu();

        // Mark as read
        if (post.unread) {
            post.unread = false;
            generatePosts(); // Refresh sidebar
        }
    }
}

// Process a post (publish or flag)
function processPost(status) {
    if (currentPostId) {
        const post = postsData.find(p => p.id === currentPostId);

        if (post && !post.processed) {
            // Check if user performed any fact-checking
            const performedTextSearch = post.performedTextSearch || false;
            const performedImageSearch = post.performedImageSearch || false;
            const hasPerformedFactChecking = performedTextSearch || performedImageSearch;

            // Determine if the user's decision is correct
            const userDecision = status === 'published'; // true if published, false if flagged
            const isCorrect = userDecision === post.correctAnswer;

            // Update post status
            post.processed = true;
            post.status = status;

            let credibilityChange, credibilityReason, popularityChange, popularityReason;

            // Apply penalties/rewards based on fact-checking and correctness
            if (hasPerformedFactChecking) {
                // Normal scoring with fact-checking performed
                if (isCorrect) {
                    // Correct decision with fact-checking
                    if (userDecision) {
                        credibilityChange = 8;
                        credibilityReason = '(correct: published true story)';
                        popularityChange = 5;
                        popularityReason = '(shared accurate info)';
                    } else {
                        credibilityChange = 10;
                        credibilityReason = '(correct: flagged false story)';
                        popularityChange = 2;
                        popularityReason = '(prevented misinformation)';
                    }
                } else {
                    // Incorrect decision even with fact-checking
                    if (userDecision) {
                        credibilityChange = -8;
                        credibilityReason = '(incorrect: published false story)';
                        popularityChange = -5;
                        popularityReason = '(spread misinformation)';
                    } else {
                        credibilityChange = -5;
                        credibilityReason = '(incorrect: flagged true story)';
                        popularityChange = -3;
                        popularityReason = '(suppressed accurate info)';
                    }
                }
            } else {
                // No fact-checking performed - apply penalties
                if (isCorrect) {
                    // Correct decision but without proper fact-checking - reduced rewards
                    if (userDecision) {
                        credibilityChange = Math.floor(8 * 0.25); // Quarter of normal reward
                        credibilityReason = '(correct but no verification)';
                        popularityChange = Math.floor(5 * 0.25);
                        popularityReason = '(lucky guess)';
                    } else {
                        credibilityChange = Math.floor(10 * 0.25); // Quarter of normal reward
                        credibilityReason = '(correct but no verification)';
                        popularityChange = Math.floor(2 * 0.25);
                        popularityReason = '(unverified decision)';
                    }
                } else {
                    // Incorrect decision without fact-checking - double penalty
                    if (userDecision) {
                        credibilityChange = Math.floor(-8 * 2); // Double penalty
                        credibilityReason = '(published false story without verification)';
                        popularityChange = Math.floor(-5 * 2);
                        popularityReason = '(reckless journalism)';
                    } else {
                        credibilityChange = Math.floor(-5 * 2); // Double penalty
                        credibilityReason = '(flagged true story without verification)';
                        popularityChange = Math.floor(-3 * 2);
                        popularityReason = '(censorship without research)';
                    }
                }
            }

            // Apply the meter changes
            meterSystem.updateCredibility(credibilityChange, credibilityReason);
            meterSystem.updatePopularity(popularityChange, popularityReason);

            totalProcessed++;
            localStorage.setItem('totalProcessed', totalProcessed.toString());
            if (isCorrect) {
                correctDecisions++;
                localStorage.setItem('correctDecisions', correctDecisions.toString());
            }
            updateCompletionCounter();

            // Update sidebar
            generatePosts();

            // Show decision feedback popup
            showDecisionFeedback(post, status, isCorrect, hasPerformedFactChecking);
        }
    }
}

function showDecisionFeedback(post, userDecision, isCorrect, hasPerformedFactChecking) {
    const decisionText = userDecision === 'published' ? 'PUBLISH' : 'FLAG AS FALSE';
    const decisionClass = isCorrect ? 'correct' : 'incorrect';
    const correctDecisionText = post.correctAnswer ? 'PUBLISH' : 'FLAG AS FALSE';

    // Generate explanation based on the post and correctness
    const explanation = generateDecisionExplanation(post, userDecision, isCorrect, hasPerformedFactChecking);

    const popupHTML = `
        <div class="decision-popup-overlay" id="decisionPopupOverlay">
            <div class="decision-popup">
                <div class="popup-header">
                    <h3>Decision Complete</h3>
                </div>
                <div class="popup-content">
                    <div class="decision-result ${decisionClass}">
                        <div class="decision-icon">
                            ${isCorrect ?
        '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>' :
        '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/><path d="M15 9L9 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 9L15 15" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
    }
                        </div>
                        <div class="decision-text">
                            <h4 class="${isCorrect ? 'correct' : 'incorrect'}">
                                ${isCorrect ? '✓ Correct Decision' : '✗ Incorrect Decision'}
                            </h4>
                            <p class="decision-details">You chose to: <strong>${decisionText}</strong></p>
                            ${!isCorrect ? `<p class="correct-choice">Correct choice was: <strong>${correctDecisionText}</strong></p>` : ''}
                            <p class="post-title-ref">"${translateKey(post.title)}"</p>
                        </div>
                    </div>
            
                    ${!hasPerformedFactChecking ? `
                        <div class="fact-check-warning">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <div class="warning-content">
                                <h5>⚠️ ${getLanguageText('noFactCheckingWarning')}</h5>
                                <p>${getLanguageText('factCheckingRequired')}</p>
                            </div>
                        </div>
                    ` : ''}
            
                    <div class="decision-analysis">
                        <h4>Analysis:</h4>
                        <div class="analysis-content">
                            ${explanation.reasoning}
                        </div>
                    
                        <div class="meter-impact">
                            <h5>Impact on Your Metrics:</h5>
                            <div class="metric-changes">
                                <div class="metric-change credibility">
                                    <span class="metric-name">Credibility:</span>
                                    <span class="change-value ${explanation.credibilityChange > 0 ? 'positive' : 'negative'}">
                                        ${explanation.credibilityChange > 0 ? '+' : ''}${explanation.credibilityChange}
                                        ${explanation.credibilityReason}
                                    </span>
                                </div>
                                <div class="metric-change popularity">
                                    <span class="metric-name">Popularity:</span>
                                    <span class="change-value ${explanation.popularityChange > 0 ? 'positive' : 'negative'}">
                                        ${explanation.popularityChange > 0 ? '+' : ''}${explanation.popularityChange}
                                        ${explanation.popularityReason}
                                    </span>
                                </div>
                            </div>
                        </div>
                    
                        ${!isCorrect || !hasPerformedFactChecking ? `
                            <div class="learning-tip">
                                <h5>💡 Learning Tip:</h5>
                                <p>${explanation.learningTip}</p>
                            </div>
                        ` : `
                            <div class="success-message">
                                <h5>🎯 Well Done!</h5>
                                <p>Your fact-checking skills are improving. Keep using evidence to make informed decisions!</p>
                            </div>
                        `}
                    </div>
                </div>
                <div class="popup-actions">
                    <button class="action-btn secondary" onclick="closeDecisionPopup(); loadPost(${currentPostId});">Review Again</button>
                    <button class="action-btn primary" onclick="closeDecisionPopupAndCheckWin()">Continue</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function generateDecisionExplanation(post, userDecision, isCorrect, hasPerformedFactChecking) {
    const userChosePublish = userDecision === 'published';

    // Define explanations for each post
    const explanations = {
        1: { // Fire alert post - SHOULD BE FLAGGED
            correct: {
                reasoning: "Excellent decision! This post contains classic hallmarks of misinformation: sensationalized language ('COVERING THIS UP!'), emotional manipulation, and lack of credible sources. The dramatic presentation and conspiracy-style framing are red flags for false emergency alerts designed to create panic rather than inform.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This post should have been flagged as false. The sensationalized language, conspiracy claims about authorities 'covering up' information, and emotional manipulation are classic signs of misinformation designed to spread panic rather than provide factual emergency information." :
                    "This should not happen with current post setup",
                learningTip: "Look for official sources when dealing with emergency information. Legitimate emergency alerts come through official channels with clear, factual language rather than conspiracy theories about cover-ups."
            }
        },
        2: { // Library attack post - SHOULD BE FLAGGED
            correct: {
                reasoning: "Correct choice! This post spreads unsubstantiated fear about terrorist threats without credible evidence. The vague, threatening language combined with calls for immediate action are typical of posts designed to spread anxiety and potentially incite panic or vigilante responses rather than inform about real threats.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This post should have been flagged. It spreads unverified threats that could cause public panic. Legitimate security threats are handled by official law enforcement channels, not through social media posts with vague claims and dramatic language." :
                    "This should not happen with current post setup",
                learningTip: "When encountering posts about security threats, always look for official law enforcement sources and concrete evidence. Vague threats with dramatic language are often designed to spread fear rather than inform."
            }
        },
        3: { // Military vehicles post - SHOULD BE FLAGGED
            correct: {
                reasoning: "Well done! This post misrepresents routine military exercises as something sinister. The dramatic language about 'coups' and 'martial law' transforms normal defense training into conspiracy theories. Good fact-checking would reveal this is a scheduled exercise, not a threat to democracy.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This should have been flagged as misleading. The post takes routine military exercises and frames them as threatening 'takeovers.' The sensationalized interpretation misrepresents normal defense training activities." :
                    "This should not happen with current post setup",
                learningTip: "Military exercises are routine and publicly announced. Always check official defense department sources before sharing posts that claim normal military activities are threats to civilian government."
            }
        },
        4: { // Water poisoning post - SHOULD BE FLAGGED
            correct: {
                reasoning: "Excellent fact-checking! This post spreads health misinformation by making alarming claims about water safety without credible evidence. The vague complaints about 'chemical smells' combined with conspiracy implications about official silence are classic signs of health-related disinformation. Real water contamination events involve immediate official responses, testing results, and clear public health guidance.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This post should have been flagged as health misinformation. It makes alarming claims about water contamination based on anecdotal reports without official verification. Real water safety issues involve immediate official testing, public health warnings, and clear guidance - not mysterious 'chemical smells' with implied cover-ups." :
                    "This should not happen with current post setup",
                learningTip: "Always verify health claims through official public health agencies. Water quality is heavily regulated and monitored - legitimate contamination events trigger immediate official responses with testing data, not vague social media rumors about chemical odors."
            }
        },
        5: { // Pet infection post - SHOULD BE FLAGGED
            correct: {
                reasoning: "Great decision! This post spreads false animal health information designed to create unnecessary panic among pet owners. The dramatic language about 'authorities being silent' combined with alarming images creates fear without credible veterinary evidence. Real disease outbreaks among animals involve official veterinary health alerts, specific symptoms, and clear guidance from animal health authorities.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This should have been flagged as animal health misinformation. It uses fear tactics and vague claims about pet diseases without credible veterinary sources. Real pet health emergencies are reported through official veterinary channels with specific symptoms, affected areas, and clear prevention guidance - not mysterious 'new infections' with implied cover-ups." :
                    "This should not happen with current post setup",
                learningTip: "Verify pet health claims through official veterinary associations and animal health departments. Legitimate disease outbreaks involve specific symptoms, geographic patterns, and official health guidance rather than vague social media warnings with alarming images."
            }
        },
        6: { // Celebrity death hoax - SHOULD BE FLAGGED
            correct: {
                reasoning: "Excellent detection of a celebrity death hoax! These false death announcements spread rapidly on social media and cause real emotional distress to fans while generating clicks for unscrupulous sites. The post likely lacks official confirmation from representatives, family, or credible news sources. Real celebrity deaths are confirmed through multiple official channels simultaneously, not through single viral social media posts.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This should have been flagged as a celebrity death hoax. These false announcements are common social media phenomena that spread emotional misinformation for clicks and engagement. Legitimate celebrity deaths are confirmed through multiple official sources - management, family statements, and established news outlets - not single viral posts with dramatic language." :
                    "This should not happen with current post setup",
                learningTip: "Always verify celebrity death claims through official representatives, family statements, or established entertainment news sources. Death hoaxes are unfortunately common and cause real distress. Look for confirmation across multiple credible sources before sharing such sensitive information."
            }
        },
        7: { // Weather alert post - SHOULD BE PUBLISHED
            correct: {
                reasoning: userChosePublish ?
                    "Correct! This appears to be a legitimate weather alert with appropriate urgency. While the language is strong, it's proportionate to a genuine severe weather event. Official meteorological sources would support publishing accurate weather warnings to help public safety." :
                    "Good instincts to be cautious, but this appears to be a legitimate severe weather alert. The language, while urgent, is appropriate for a genuine emergency situation and would be supported by official meteorological sources.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This should not happen with current post setup" :
                    "This post should have been published as it appears to be a legitimate weather emergency. While it's good to be cautious about sensationalized content, genuine emergency alerts often use urgent language to ensure public safety.",
                learningTip: "Distinguish between sensationalized misinformation and legitimate emergency warnings. Check official weather services to verify severe weather alerts - urgent language can be appropriate when public safety is at risk."
            }
        },

        8: { // Dogfluencer post - SHOULD BE PUBLISHED (true story)
            correct: {
                reasoning: userChosePublish ?
                    "Excellent decision! This is a legitimate investigative story about social media fraud that affects consumers and businesses. The evidence includes verifiable data analytics, documented communication, and follows established patterns of influencer fraud that regulatory bodies actively monitor. This type of investigative journalism serves the public interest by exposing deceptive practices in digital marketing." :
                    "Good instincts to investigate thoroughly, but this appears to be a credible investigative report. While social media can contain false accusations, this story presents verifiable evidence including analytics data, communication records, and fits documented patterns of influencer fraud that affect real businesses and consumers.",
                learningTip: ""
            },
            incorrect: {
                reasoning: userChosePublish ?
                    "This should not happen with current post setup" :
                    "This story should have been published as it represents legitimate investigative journalism. The evidence presented - including analytics data, communication records, and industry context - supports the claims. Influencer fraud is a real, documented problem that affects consumers and businesses, making this newsworthy content that serves the public interest.",
                learningTip: "Distinguish between personal attacks and legitimate investigations. Look for verifiable evidence like data analytics, documented communications, and broader industry context. Real investigative stories about fraud typically include multiple sources of evidence and address issues that affect consumers or the public interest."
            }
        }
        // Add explanations for other posts...
    };

    const postExplanation = explanations[post.id];
    let explanation = isCorrect ? postExplanation.correct : postExplanation.incorrect;

    // Calculate meter changes and add fact-checking context
    let credibilityChange, credibilityReason, popularityChange, popularityReason;
    let learningTip = explanation.learningTip;

    if (hasPerformedFactChecking) {
        // Normal scoring with fact-checking performed
        if (isCorrect) {
            if (userChosePublish) {
                credibilityChange = 8;
                credibilityReason = '(correctly published true story)';
                popularityChange = 5;
                popularityReason = '(shared accurate information)';
            } else {
                credibilityChange = 10;
                credibilityReason = '(correctly flagged false story)';
                popularityChange = 2;
                popularityReason = '(prevented misinformation)';
            }
        } else {
            if (userChosePublish) {
                credibilityChange = -8;
                credibilityReason = '(incorrectly published false story)';
                popularityChange = -5;
                popularityReason = '(spread misinformation)';
            } else {
                credibilityChange = -5;
                credibilityReason = '(incorrectly flagged true story)';
                popularityChange = -3;
                popularityReason = '(suppressed accurate information)';
            }
        }
    } else {
        // No fact-checking performed - apply penalties and modify explanations
        if (isCorrect) {
            // Correct decision but without proper fact-checking - reduced rewards
            if (userChosePublish) {
                credibilityChange = Math.floor(8 * 0.25);
                credibilityReason = '(correct but no verification)';
                popularityChange = Math.floor(5 * 0.25);
                popularityReason = '(lucky guess)';
            } else {
                credibilityChange = Math.floor(10 * 0.25);
                credibilityReason = '(correct but no verification)';
                popularityChange = Math.floor(2 * 0.25);
                popularityReason = '(unverified decision)';
            }

            // Override reasoning to include fact-checking context
            explanation.reasoning = `While your decision was correct, you made it without conducting proper fact-checking research. ${explanation.reasoning} Professional journalism requires verification through multiple sources before making publication decisions, even when your instincts prove right.`;
            learningTip = "Always perform fact-checking before making editorial decisions. Even correct decisions made without proper verification damage your credibility as a journalist. Use text search and image verification tools to build a solid evidence base.";
        } else {
            // Incorrect decision without fact-checking - double penalty
            if (userChosePublish) {
                credibilityChange = Math.floor(-8 * 2);
                credibilityReason = '(published false story without verification)';
                popularityChange = Math.floor(-5 * 2);
                popularityReason = '(reckless journalism)';
            } else {
                credibilityChange = Math.floor(-5 * 2);
                credibilityReason = '(flagged true story without verification)';
                popularityChange = Math.floor(-3 * 2);
                popularityReason = '(censorship without research)';
            }

            // Override reasoning to emphasize the lack of fact-checking
            explanation.reasoning = `Your decision was incorrect AND you failed to conduct any fact-checking research. ${explanation.reasoning} This represents a fundamental failure of journalistic practice - making editorial decisions without verification is professionally unacceptable.`;
            learningTip = "Never make editorial decisions without fact-checking! The combination of being wrong AND not researching is the worst possible outcome for a journalist. Always use available verification tools - text search to check claims and sources, image search to verify visual content.";
        }
    }

    return {
        reasoning: explanation.reasoning,
        learningTip,
        credibilityChange,
        credibilityReason,
        popularityChange,
        popularityReason
    };
}

// Close decision feedback popup
function closeDecisionPopup() {
    const popup = document.getElementById('decisionPopupOverlay');
    if (popup) {
        popup.remove();
    }
}

function closeDecisionPopupAndCheckWin() {
    closeDecisionPopup();
    if (correctDecisions >= WIN_THRESHOLD) {
        showWinPopup();
    } else {
        goHome();
    }
}

function showWinPopup() {
    const popupHTML = `
    <div class="decision-popup-overlay" id="winPopupOverlay">
        <div class="decision-popup">
            <div class="popup-header">
                <h3>Congratulations! You've Won!</h3>
            </div>
            <div class="popup-content" style="text-align: center;">
                <div class="decision-icon">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color: var(--success-color);">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.056 14.28l-3.23-3.23 1.414-1.414 1.816 1.817 4.242-4.243 1.414 1.414-5.656 5.656z" fill="currentColor"/>
                    </svg>
                </div>
                <h4 style="margin-top: 1rem;">You have a sharp eye for the truth!</h4>
                <p>You correctly handled ${WIN_THRESHOLD} out of ${TOTAL_STORIES} stories and have proven yourself as a reliable source of information.</p>
                <p>Great job fighting misinformation!</p>
            </div>
            <div class="popup-actions">
                <button class="action-btn primary" onclick="restartGame()">Play Again</button>
            </div>
        </div>
    </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function restartGame() {
    meterSystem.reset();
    localStorage.removeItem('correctDecisions');
    localStorage.removeItem('totalProcessed');
    window.location.reload();
}

// Function to go back to home page
function goHome() {
    showPage(videoInstructionsPage);
    hideTopMenu();
}

        // Show text search options
        function showTextSearchOptions() {
            if (currentPostId) {
                const post = postsData.find(p => p.id === currentPostId);
                
                if (post && post.searchTerms) {
                    // Generate search buttons
                    searchButtons.innerHTML = '';
                    
                    post.searchTerms.forEach(term => {
                        const button = document.createElement('button');
                        button.className = 'search-button';
                        button.textContent = translateKey(term);
                        
                        button.addEventListener('click', function() {
                            showTextSearchResults();
                        });
                        
                        searchButtons.appendChild(button);
                    });
                    
                    // Show search options page
                    showPage(textSearchOptionsPage);
                    
                    // Update top menu
                    updateTopMenu('textSearch');
                }
            }
        }


// Show text search results
function showTextSearchResults() {
    if (currentPostId) {
        const post = postsData.find(p => p.id === currentPostId);

        if (post && post.searchResults) {
            // Mark that text search was performed
            post.performedTextSearch = true;

            // Generate search results
            searchResults.innerHTML = '';

            post.searchResults.forEach((result, index) => {
                const resultElement = document.createElement('div');
                resultElement.className = `search-result-item${result.isAd ? ' ad' : ''} clickable`;

                if (result.isAd) {
                    resultElement.dataset.adText = getLanguageText('advertisement');
                }

                resultElement.innerHTML = `
                            <h3>${translateKey(result.title)}</h3>
                            <p>${translateKey(result.description)}</p>
                        `;

                // Make results clickable
                resultElement.addEventListener('click', function() {
                    showSearchResultPopup(result, index);
                });

                searchResults.appendChild(resultElement);
            });

            // Add action buttons to the text search results page
            addActionButtonsToSearchPage();

            // Show search results page
            showPage(textSearchResultsPage);

            // Update top menu
            updateTopMenu('textSearch');
        }
    }
}

function addActionButtonsToSearchPage() {
    // Check if buttons already exist to avoid duplication
    const existingButtons = document.querySelector('.search-action-buttons');
    if (existingButtons) {
        existingButtons.remove();
    }

    // Create action buttons container
    const actionButtonsContainer = document.createElement('div');
    actionButtonsContainer.className = 'search-action-buttons';
    actionButtonsContainer.innerHTML = `
        <div class="search-decision-section">
            <h3>Ready to make your decision?</h3>
            <p>Based on your research, what should we do with this post?</p>
            <div class="search-buttons-container">
                <button class="action-btn publish-btn" onclick="processPost('published')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span data-lang-key="publish">${getLanguageText('publish')}</span>
                </button>
                <button class="action-btn flag-btn" onclick="processPost('flagged')">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span data-lang-key="flag">${getLanguageText('flag')}</span>
                </button>
            </div>
        </div>
    `;

    // Find the text search results page and prepend the buttons (add to top)
    const textSearchPage = document.getElementById('textSearchResultsPage');
    if (textSearchPage) {
        // Insert as first child to put it at the top
        textSearchPage.insertBefore(actionButtonsContainer, textSearchPage.firstChild);
    }
}

function showSearchResultPopup(result, index) {
    // Update meters based on result type
    if (result.isAd) {
        meterSystem.updateCredibility(-3, '(clicked ad)');
        meterSystem.updatePopularity(-2, '(distraction)');
    } else {
        meterSystem.updateCredibility(2, '(checked source)');
        meterSystem.updatePopularity(-1, '(research)');
    }

    // Generate reasoning based on result type and content
    const reasoning = generateRelevanceReasoning(result, index);

    // Check if evidence limit has been reached
    const evidenceLimitReached = usedEvidenceCount >= MAX_EVIDENCE_PER_STORY;

    // Create popup HTML
    const popupHTML = `
                <div class="search-popup-overlay" id="searchPopupOverlay">
                    <div class="search-popup">
                        <div class="popup-header">
                            <h3>${translateKey(result.title)}</h3>
                            <button class="popup-close" onclick="closeSearchPopup()">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="popup-content">
                            <div class="source-description">
                                <p>${translateKey(result.description)}</p>
                            </div>
                            <div class="relevance-analysis">
                                <h4>Relevance Analysis:</h4>
                                <div class="reasoning-content ${result.isAd ? 'warning' : 'neutral'}">
                                    ${reasoning.text}
                                </div>
                                <div class="relevance-score">
                                    <span class="score-label">Relevance Score:</span>
                                    <span class="score-value ${reasoning.scoreClass}">${reasoning.score}/10</span>
                                </div>
                            </div>
                            ${result.isAd ? `
                                <div class="ad-warning">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>This is a sponsored result - be cautious of bias</span>
                                </div>
                            ` : ''}
                            ${evidenceLimitReached ? `
                                <div class="evidence-limit-warning">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                                        <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>Evidence limit reached (${usedEvidenceCount}/${MAX_EVIDENCE_PER_STORY}). Quality over quantity!</span>
                                </div>
                            ` : `
                                <div class="evidence-counter">
                                    <span>Evidence used: ${usedEvidenceCount}/${MAX_EVIDENCE_PER_STORY}</span>
                                </div>
                            `}
                        </div>
                        <div class="popup-actions">
                            <button class="action-btn secondary" onclick="closeSearchPopup()">Close</button>
                            <button class="action-btn primary ${evidenceLimitReached ? 'disabled' : ''}" 
                                    onclick="markAsUsed(${index})" 
                                    ${evidenceLimitReached ? 'disabled' : ''}>
                                ${evidenceLimitReached ? 'Evidence Limit Reached' : 'Use as Evidence'}
                            </button>
                        </div>
                    </div>
                </div>
            `;

    // Add popup to page
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

// Generate reasoning for why a result is relevant or not
function generateRelevanceReasoning(result, index) {
    const currentPost = postsData.find(p => p.id === currentPostId);

    if (result.isAd) {
        return {
            text: `This is a sponsored advertisement, not an editorial source. Ads are designed to capture attention and may present biased or sensational information to drive clicks. For fact-checking, prioritize official sources, established news outlets, or government statements over promotional content.`,
            score: 2,
            scoreClass: 'low'
        };
    }

    // Generate different reasoning based on result position and content
    const reasoningOptions = [
        {
            text: `This appears to be from an official source providing factual updates. The language is measured and includes specific details without sensational claims. Official sources are generally more reliable for fact-checking as they have institutional accountability.`,
            score: 8,
            scoreClass: 'high'
        },
        {
            text: `This source provides a brief but official update. While the information is limited, it comes from an authoritative source. Consider cross-referencing with additional sources for a complete picture.`,
            score: 7,
            scoreClass: 'medium-high'
        },
        {
            text: `This appears to be a legitimate news report, but consider the timing and source credibility. Look for corroboration from other established outlets before relying on this information.`,
            score: 6,
            scoreClass: 'medium'
        },
        {
            text: `While this may contain relevant information, the source or presentation raises some concerns. Cross-check with more established sources before using as evidence.`,
            score: 4,
            scoreClass: 'medium-low'
        }
    ];

    // Select reasoning based on result position (first few are usually more relevant)
    if (index < 2 && !result.isAd) {
        return reasoningOptions[0];
    } else if (index < 4 && !result.isAd) {
        return reasoningOptions[1];
    } else if (!result.isAd) {
        return reasoningOptions[Math.floor(Math.random() * 2) + 2];
    }

    return reasoningOptions[0]; // fallback
}

// Close search result popup
function closeSearchPopup() {
    const popup = document.getElementById('searchPopupOverlay');
    if (popup) {
        popup.remove();
    }
}

// Mark a search result as used for evidence
function markAsUsed(resultIndex) {
    // Check if evidence limit reached for current story
    if (usedEvidenceCount >= MAX_EVIDENCE_PER_STORY) {
        return; // Don't allow more evidence for this story
    }

    const post = postsData.find(p => p.id === currentPostId);
    if (post && post.searchResults[resultIndex]) {
        const result = post.searchResults[resultIndex];

        // Update meters based on evidence quality
        if (!result.isAd) {
            meterSystem.updateCredibility(4, '(evidence)');
            meterSystem.updatePopularity(-1, '(thorough)');
        } else {
            meterSystem.updateCredibility(-2, '(poor evidence)');
        }

        // Increment evidence counter for current story
        usedEvidenceCount++;

        // Save evidence count to the post
        post.usedEvidenceCount = usedEvidenceCount;

        // Mark result as used (could add visual indicator)
        const resultElements = document.querySelectorAll('.search-result-item');
        if (resultElements[resultIndex]) {
            resultElements[resultIndex].classList.add('used-evidence');
        }

        // Add evidence tracking to the result element
        if (resultElements[resultIndex]) {
            const evidenceNumber = resultElements[resultIndex].querySelector('.evidence-number');
            if (!evidenceNumber) {
                const numberElement = document.createElement('div');
                numberElement.className = 'evidence-number';
                numberElement.textContent = `Evidence #${usedEvidenceCount}`;
                resultElements[resultIndex].appendChild(numberElement);
            }
        }

        closeSearchPopup();

        // Show completion message if limit reached for this story
        if (usedEvidenceCount >= MAX_EVIDENCE_PER_STORY) {
            showEvidenceLimitReached();
        }
    }
}

function showEvidenceLimitReached() {
    const message = document.createElement('div');
    message.className = 'evidence-limit-notification';
    message.innerHTML = `
                <div class="notification-content">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <div class="notification-text">
                        <strong>Evidence Collection Complete</strong>
                        <p>You've gathered ${MAX_EVIDENCE_PER_STORY} pieces of evidence. Quality fact-checking focuses on the most credible sources rather than quantity.</p>
                    </div>
                    <button onclick="this.parentElement.parentElement.remove()" class="notification-close">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
            `;

    document.body.appendChild(message);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (message.parentElement) {
            message.remove();
        }
    }, 5000);

    // Update credibility for completing evidence gathering
    meterSystem.updateCredibility(3, '(complete research)');
}


        // Show image search results
function showImageSearchResults() {
    if (currentPostId) {
        const post = postsData.find(p => p.id === currentPostId);

        if (post && post.imageResults) {
            // Mark that image search was performed
            post.performedImageSearch = true;

            // Reset selected images
            selectedImages = [];

            // Generate image grid
            imageGrid.innerHTML = '';

            post.imageResults.forEach((image, index) => {
                const imageElement = document.createElement('div');
                imageElement.className = 'image-item';
                imageElement.dataset.index = index;

                imageElement.innerHTML = `
                    <img src="${image.src}" alt="Search result image">
                    <div class="image-info">
                        <div>${getLanguageText(image.location)}</div>
                        <div>${getLanguageText(image.date)}</div>
                    </div>
                `;

                imageElement.addEventListener('click', function() {
                    toggleImageSelection(this);
                });

                imageGrid.appendChild(imageElement);
            });

            // Show image search results page
            showPage(imageSearchResultsPage);

            // Update top menu
            updateTopMenu('imageSearch');
        }
    }
}

        // Toggle image selection
        function toggleImageSelection(imageElement) {
            const index = parseInt(imageElement.dataset.index);
            
            if (imageElement.classList.contains('selected')) {
                imageElement.classList.remove('selected');
                selectedImages = selectedImages.filter(i => i !== index);
            } else {
                imageElement.classList.add('selected');
                selectedImages.push(index);
            }
        }

        // Show a specific page
        function showPage(page) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active');
            });
            
            // Show the requested page
            page.classList.add('active');
        }

        // Show top menu
        function showTopMenu() {
            topMenu.style.display = 'block';
            
            const post = postsData.find(p => p.id === currentPostId);
            
            if (post && post.processed) {
                postActionButtons.style.display = 'none';
                postStatusMessage.style.display = 'block';
                
                const statusKey = post.status === 'published' ? 'published' : 'flagged';
                postStatusMessage.textContent = getLanguageText(statusKey);
                postStatusMessage.className = `post-status-message ${post.status === 'flagged' ? 'error' : ''}`;
            } else {
                postActionButtons.style.display = 'flex';
                postStatusMessage.style.display = 'none';
            }
            
            backButton.style.display = 'none';
        }

        // Hide top menu
        function hideTopMenu() {
            topMenu.style.display = 'none';
        }

        // Update top menu based on context
        function updateTopMenu(context) {
            topMenu.style.display = 'block';
            postActionButtons.style.display = 'none';
            postStatusMessage.style.display = 'none';
            backButton.style.display = 'block';
        }

        // Update language
        function updateLanguage() {
            // Update all text elements with data-lang-key attribute
            document.querySelectorAll('[data-lang-key]').forEach(element => {
                const key = element.getAttribute('data-lang-key');
                if (languageData[currentLanguage][key]) {
                    element.textContent = languageData[currentLanguage][key];
                }
            });
            
            // Update HTML lang attribute
            document.documentElement.lang = currentLanguage;
            
            // Refresh posts to update status messages
            generatePosts();
        }

        // Get text in current language
        function getLanguageText(key) {
            return languageData[currentLanguage][key] || key;
        }

        // Function to add a new post
        function addPost(post) {
            // Generate unique ID
            post.id = Math.max(...postsData.map(p => p.id)) + 1;
            post.unread = true;
            post.processed = false;
            post.status = null;
            
            // Add to data
            postsData.unshift(post);
            
            // Regenerate posts
            generatePosts();
        }

        function setupCustomSelect() {
        const customSelect = document.getElementById('languageSelectorCustom');
        const selected = customSelect.querySelector('.selected');
        const options = customSelect.querySelectorAll('.options li');

        selected.addEventListener('click', () => {
            customSelect.classList.toggle('open');
        });

        options.forEach(option => {
            option.addEventListener('click', () => {
                const value = option.getAttribute('data-value');
                currentLanguage = value;
                selected.textContent = option.textContent;
                customSelect.classList.remove('open');
                updateLanguage();
            });
        });

        // Close menu if clicked outside
        document.addEventListener('click', (e) => {
            if (!customSelect.contains(e.target)) {
                customSelect.classList.remove('open');
            }
        });
    }

    setupCustomSelect();

    // Initialize the app when document is loaded
    init();