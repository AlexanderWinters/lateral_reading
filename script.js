function translateKey(key) {
    return languageData[currentLanguage][key] || key;
}

// Updated posts data structure that works with the existing code
const postsData = [
    {
        id: 1,
        title: "burnalertTitle",
        thumbnail: "img/burnalert.png",
        image: "img/burnalert.png",
        description: "burnalertDescription",
        unread: true,
        processed: false,
        status: null,
        searchTerms: ["burnalertsearchTerms1", "burnalertsearchTerms2", "burnalertsearchTerms3", "burnalertsearchTerms4"],
        searchResults: [
            { title: "burnalerttitle1", description: "burnalertdescription1", isAd: true },
            { title: "burnalerttitle2", description: "burnalertdescription2", isAd: true },
            { title: "burnalerttitle3", description: "burnalertdescription3", isAd: true },
            { title: "burnalerttitle4", description: "burnalertdescription4", isAd: false },
            { title: "burnalerttitle5", description: "burnalertdescription5", isAd: false },
            { title: "burnalerttitle6", description: "burnalertdescription6", isAd: false }
        ],
        imageResults: [
            { src: "img/burnalert1.png", location: "burnalertlocation1", date: "burnalertdate1" },
            { src: "img/burnalert2.png", location: "burnalertlocation2", date: "burnalertdate2" },
            { src: "img/burnalert3.png", location: "burnalertlocation3", date: "burnalertdate3" },
            { src: "img/burnalert4.png", location: "burnalertlocation4", date: "burnalertdate4" }
        ]
    },
    {
        id: 2,
        title: "libraryTitle",
        thumbnail: "img/libraryalert.png",
        image: "img/libraryalert.png",
        description: "libraryDescription",
        unread: true,
        processed: false,
        status: null,
        searchTerms: ["librarysearchTerms1", "librarysearchTerms2", "librarysearchTerms3", "librarysearchTerms4"],
        searchResults: [
            { title: "librarytitle1", description: "librarydescription1", isAd: true },
            { title: "librarytitle2", description: "librarydescription2", isAd: true },
            { title: "librarytitle3", description: "librarydescription3", isAd: true },
            { title: "librarytitle4", description: "librarydescription4", isAd: false },
            { title: "librarytitle5", description: "librarydescription5", isAd: false },
            { title: "librarytitle6", description: "librarydescription6", isAd: false }
        ],
        imageResults: [
            { src: "img/library1.png", location: "librarylocation1", date: "librarydate1" },
            { src: "img/library2.png", location: "librarylocation2", date: "librarydate2" },
            { src: "img/library3.png", location: "librarylocation3", date: "librarydate3" },
            { src: "img/library4.png", location: "librarylocation4", date: "librarydate4" }
        ]
    },
    {
        id: 3,
        title: "extrimistalertTitle",
        thumbnail: "img/extrimistalert.png",
        image: "img/extrimistalert.png",
        description: "extrimistalertDescription",
        unread: true,
        processed: false,
        status: null,
        searchTerms: ["extrimistalertsearchTerms1", "extrimistalertsearchTerms2", "extrimistalertsearchTerms3", "extrimistalertsearchTerms4"],
        searchResults: [
            { title: "extrimistalerttitle1", description: "extrimistalertdescription1", isAd: true },
            { title: "extrimistalerttitle2", description: "extrimistalertdescription2", isAd: true },
            { title: "extrimistalerttitle3", description: "extrimistalertdescription3", isAd: true },
            { title: "extrimistalerttitle4", description: "extrimistalertdescription4", isAd: false },
            { title: "extrimistalerttitle5", description: "extrimistalertdescription5", isAd: false },
            { title: "extrimistalerttitle6", description: "extrimistalertdescription6", isAd: false }
        ],
        imageResults: [
            { src: "img/extrimistalert1.png", location: "extrimistalertlocation1", date: "extrimistalertdate1" },
            { src: "img/extrimistalert2.png", location: "extrimistalertlocation2", date: "extrimistalertdate2" },
            { src: "img/extrimistalert3.png", location: "extrimistalertlocation3", date: "extrimistalertdate3" },
            { src: "img/extrimistalert4.png", location: "extrimistalertlocation4", date: "extrimistalertdate4" }
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
        searchTerms: ["waterpoisoningsearchTerms1", "waterpoisoningsearchTerms2", "waterpoisoningsearchTerms3", "waterpoisoningsearchTerms4"],
        searchResults: [
            { title: "waterpoisoningtitle1", description: "waterpoisoningdescription1", isAd: true },
            { title: "waterpoisoningtitle2", description: "waterpoisoningdescription2", isAd: true },
            { title: "waterpoisoningtitle3", description: "waterpoisoningdescription3", isAd: true },
            { title: "waterpoisoningtitle4", description: "waterpoisoningdescription4", isAd: false },
            { title: "waterpoisoningtitle5", description: "waterpoisoningdescription5", isAd: false },
            { title: "waterpoisoningtitle6", description: "waterpoisoningdescription6", isAd: false }
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
        searchTerms: ["petssearchTerms1", "petssearchTerms2", "petssearchTerms3", "petssearchTerms4"],
        searchResults: [
            { title: "petstitle1", description: "petsdescription1", isAd: true },
            { title: "petstitle2", description: "petsdescription2", isAd: true },
            { title: "petstitle3", description: "petsdescription3", isAd: true },
            { title: "petstitle4", description: "petsdescription4", isAd: false },
            { title: "petstitle5", description: "petsdescription5", isAd: false },
            { title: "petstitle6", description: "petsdescription6", isAd: false }
        ],
        imageResults: [
            { src: "img/pets1.png", location: "petslocation1", date: "petsdate1" },
            { src: "img/pets2.png", location: "petslocation2", date: "petsdate2" },
            { src: "img/pets3.png", location: "petslocation3", date: "petsdate3" },
            { src: "img/pets4.png", location: "petslocation4", date: "petsdate4" }
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

        // Current state
        let currentLanguage = 'en';
        let currentPostId = null;
        let selectedImages = [];

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
            tipTrueButton.addEventListener('click', function() {
                if (selectedImages.length > 0) {
                    processPost('published');
                }
            });

            tipFalseButton.addEventListener('click', function() {
                if (selectedImages.length > 0) {
                    processPost('flagged');
                }
            });
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
                
                if (post) {
                    post.processed = true;
                    post.status = status;
                    
                    // Update sidebar
                    generatePosts();
                    
                    // Show feedback
                    showFeedback(status);
                }
            }
        }

        // Show feedback after processing a post
        function showFeedback(status) {
            const messageKey = status === 'published' ? 'feedbackPublished' : 'feedbackFlagged';
            feedbackMessage.textContent = getLanguageText(messageKey);
            feedbackMessage.className = `feedback-message ${status === 'flagged' ? 'error' : ''}`;
            
            showPage(feedbackPage);
            hideTopMenu();
            
            // Play feedback video
            feedbackVideo.play();
            
            // After video ends, go back to home
            feedbackVideo.onended = function() {
                showPage(videoInstructionsPage);
            };
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
                    // Generate search results
                    searchResults.innerHTML = '';
                    
                    post.searchResults.forEach(result => {
                        const resultElement = document.createElement('div');
                        resultElement.className = `search-result-item${result.isAd ? ' ad' : ''}`;
                        
                        if (result.isAd) {
                            resultElement.dataset.adText = getLanguageText('advertisement');
                        }
                        
                        resultElement.innerHTML = `
                            <h3>${translateKey(result.title)}</h3>
                            <p>${translateKey(result.description)}</p>
                        `;
                        
                        searchResults.appendChild(resultElement);
                    });
                    
                    // Show search results page
                    showPage(textSearchResultsPage);
                    
                    // Update top menu
                    updateTopMenu('textSearch');
                }
            }
        }

        // Show image search results
        function showImageSearchResults() {
            if (currentPostId) {
                const post = postsData.find(p => p.id === currentPostId);
                
                if (post && post.imageResults) {
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