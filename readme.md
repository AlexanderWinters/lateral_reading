# Content Review System - Technical Documentation

## Project Overview

The Content Review System is an educational web application designed to teach media literacy and fact-checking skills. It simulates a newsroom environment where players review social media posts, perform fact-checking using text and image search tools, and make decisions about content authenticity.

## Architecture

### Technology Stack
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Build System**: None (vanilla web technologies)
- **Package Manager**: npm
- **Media**: WebM video format, PNG images
- **Internationalization**: Custom JSON-based translation system

## Features Added

### Image to Text Search Transition
- Added a "Perform text search" button to the image search results page.
- This allows players to further investigate a story after doing an image search.
- Supported by a new flag `forceTextSearchAfterImage` in the `postsData` configuration:
    - If `true`, a popup informs the player that an image search is insufficient and they should also perform a text search when they try to publish or flag the post from the image results page.
    - If `false` (default), the player can proceed with either search type.
- Updated `translation.js` with `performTextSearch`, `imageSearchLackluster`, and `imageSearchLacklusterInstruction` keys for multi-language support.

### Project Structure
```
edu_game_project/
├── index.html              # Main application entry point
├── script.js               # Core application logic
├── style.css               # Application styling
├── translation.js          # Internationalization data
├── notes.txt               # Development notes and learning objectives
├── img/                    # Static image assets
├── videos/                 # Instructional and feedback videos
└── .idea/                  # IDE configuration
```


## Core Features

### 1. Multi-Language Support
- **Languages Supported**: English, Swedish, French
- **Implementation**: Custom dropdown selector with JSON-based translation keys
- **Dynamic Updates**: Real-time language switching without page reload

### 2. Post Review System
- **Post Structure**: Each post contains title, description, thumbnail, and associated media
- **Review Actions**:
    - Publish (suggest for publication)
    - Flag (mark as false/misleading)
    - Image search (reverse image lookup simulation)
    - Text search (fact-checking simulation)

### 3. Fact-Checking Tools

#### Text Search Module
- **Search Terms**: Pre-defined search terms per post
- **Results Display**: Mix of legitimate sources and advertisements
- **Ad Detection**: Visual indicators for sponsored content
- **Lateral Reading Practice**: Encourages scrolling past initial results

#### Image Search Module
- **Reverse Image Search**: Simulated reverse image search results
- **Image Selection**: Multiple image selection for evidence gathering
- **Metadata Display**: Location and date information for each result
- **Visual Verification**: Side-by-side comparison capabilities

### 4. Metrics System
- **Credibility Meter**: Tracks the player's reputation for accuracy. Increases with correct decisions and thorough research, decreases with errors.
- **Popularity Meter**: Tracks speed and engagement. Balanced to be slightly more rewarding for correct publications but generally remains lower than credibility to emphasize accuracy over viral reach.
- **Score Protection**: Meters are designed to never drop below zero.
- **Cap**: Both meters have a maximum value of 200.

### 5. Educational Feedback System
- **Video Feedback**: Contextual video responses based on user actions
- **Status Tracking**: Visual indicators for processed posts
- **Learning Reinforcement**: Immediate feedback on decisions

## Application Flow

### 1. Landing Page
```
Video Instructions → Post Selection → Review Process → Feedback
```


### 2. Review Process
```
Post View → Fact-Check Tools → Evidence Gathering → Decision → Feedback
```


### 3. Navigation States
- **Home State**: Video instructions page
- **Review State**: Post view with action buttons
- **Search State**: Text or image search results
- **Feedback State**: Post-decision feedback

## Data Structure

### Post Data Model
```javascript
{
    id: number,
    title: "translationKey",
    thumbnail: "path/to/image",
    image: "path/to/image", 
    description: "translationKey",
    unread: boolean,
    processed: boolean,
    status: "published" | "flagged" | null,
    searchTerms: ["translationKey1", "translationKey2", ...],
    searchResults: [
        {
            title: "translationKey",
            description: "translationKey", 
            isAd: boolean,
            date: "translationKey", // Optional date translation key
            icons: ["icons/icon1.png", "icons/icon2.png", ...] // Optional array of paths to icon PNG files
        }
    ],
    imageResults: [
        {
            src: "path/to/image",
            location: "translationKey",
            date: "translationKey",
            icons: ["icons/icon1.png", "icons/icon2.png", ...] // Optional array of paths to icon PNG files
        }
    ]
}
```


### Translation System
- **Structure**: Nested JSON objects by language code
- **Key Format**: CamelCase keys for consistency
- **Dynamic Loading**: Real-time translation updates

### Solution Summary

The "Search Results" page has been enhanced with a new **AI Overview** feature, mimicking Google's AI-generated summaries. This feature provides a quick summary of the investigation results while also serving as a gameplay mechanic to teach players about the risks of over-reliance on AI.

### Key Changes:

#### 1. UI Enhancements (CSS)
-   Added `.ai-summary-container` with a distinctive Google-like multi-colored left border.
-   Styled AI summaries with a light blue gradient background, distinctive typography, and clickable "source" chips.
-   Added a warning section highlighted in yellow to caution users about relying solely on AI summaries.
-   Implemented a "Use this as evidence" button with a professional, tool-like appearance.

#### 2. Translation System Updates
-   Added comprehensive English and Swedish translations for AI summaries for all 11 existing stories in `translation.js`.
-   Included UI labels for "AI Overview", "Use this as evidence", and educational warnings.
-   Added a "Congratulations" popup message for when users click on the links within the AI summary.

#### 3. Functional Improvements (JavaScript)
-   **AI Summary Rendering**: Updated `showTextSearchResults` to automatically generate and prepend the AI summary for the current story.
-   **Evidence Mechanic**: Implemented `useAISummaryAsEvidence`, which allows players to use the summary as a source. However, doing so **retracts points** (-5 Credibility, -3 Popularity) to reinforce that proper research requires looking at primary sources.
-   **Interactive Links**: Added `showAISummaryCongratulations`, which triggers a positive feedback popup when a user explores the "sources" linked in the AI summary, encouraging lateral reading.
-   **State Management**: Added `usedAISummaryAsEvidence` to the `postsData` structure to ensure the penalty is only applied once per post.

#### 4. Image Search Enhancements
-   **Descriptions**: Added a `location` field (which was previously hidden) to be displayed as a description under each image.
-   **Icons**: Added support for an optional `icons` array in `imageResults` objects, allowing `.png` icons to be displayed as badges on top of search result images.
-   **Enhanced UI**: Improved the layout of image search results with better typography and visual indicators.

#### 5. Text Search Enhancements
-   **Date and Icons**: Text search results now support optional `date` and `icons` fields, similar to image search results.
-   **Inline Layout**: Icons are displayed inline with the title, and the date is shown at the bottom of the result item.
-   **Consistent Styling**: Applied a consistent visual style for icons and metadata across both text and image search results.

## Learning Objectives

The application implements several key media literacy concepts:

### 1. Lateral Reading Skills
- **Text Verification**: Scroll past initial results, cross-reference multiple sources
- **Image Verification**: Use reverse image search to verify context and authenticity
- **Source Evaluation**: Distinguish between credible sources and advertisements

### 2. Critical Thinking Framework
The app encourages users to consider five key questions:
- **Alternatives**: Have I considered alternative explanations?
- **Counterevidence**: Have I looked for contradicting information?
- **Explanation**: Can I explain how evidence leads to my conclusion?
- **Norm**: Is this standard newsroom practice?
- **Accuracy**: Am I confident in my decision?

### 3. Decision Making Process
- **Evidence Gathering**: Collect supporting materials before making decisions
- **Time vs. Accuracy Balance**: Understanding the trade-off between speed and thoroughness
- **Justification**: Providing rationale for publish/flag decisions

## UI/UX Design

### Layout Structure
- **Sidebar Navigation**: Post list with status indicators
- **Main Content Area**: Dynamic content based on current state
- **Top Menu**: Context-sensitive action buttons
- **Responsive Design**: Adaptable to different screen sizes

### Visual Feedback System
- **Unread Indicators**: Visual cues for new content
- **Status Icons**: Clear indicators for processed posts
- **Selection States**: Interactive feedback for user selections
- **Progress Tracking**: Visual representation of completion status

## Development Notes

### Creating a story
- In the `script.js` under `postsData`, add a new entry and follow the pattern of the existing stories. 
- Also in the `script.js` under `generateDecisionExplanation`, add the entries for the correct and incorrect answers with explanations. 
- Add the texts and descriptions in the `translation.js`, and use the tags from there instead of hard-coding text in `script.js`.
- Add the new images in the `img` folder and follow the naming convention.

### Current Implementation Status
- ✅ Core navigation and post-system
- ✅ Multi-language support
- ✅ Basic fact-checking tools
- ✅ Metrics System (Credibility and Popularity)
- 🔄 Image selection improvements needed
- 🔄 Text search enhancement required

### Planned Enhancements
1. **Image Selection Limits**: Maximum selection constraints
2. **Enhanced Text Search**: Additional information display
3. **Cryptic Image Clues**: More sophisticated image metadata
4. **Landing Page Improvements**: Better onboarding experience

### Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **HTML5 Features**: Video playback, semantic elements
- **CSS3 Features**: Flexbox, CSS Grid, custom properties
- **JavaScript**: ES6+ features (arrow functions, const/let, template literals)

### Performance Considerations

- **Asset Loading**: Optimized image sizes and formats
- **JavaScript**: Single-threaded, event-driven architecture
- **Memory Management**: Efficient DOM manipulation
- **Video Streaming**: Local video files for consistent playback


### Next steps
- Publishing/scraping should follow the player in the page.
- add second page/more results in text searches. (it could be fake, but gives easy points) 
- ~~Fix the text limit. Now is pegged to one story.~~
- add effects to cred/pop meters. 
- Curate images.
- Teenage story: true story; frauds about concerts tickets.
