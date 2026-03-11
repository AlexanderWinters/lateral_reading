function translateKey(key) {
    return languageData[currentLanguage][key] || key;
}

const postsData = [
    {
        id: 1,
        title: "burnalertTitle",
        thumbnail: "updated_images/Street_Fire_Images/Fire_Fake.png",
        image: "updated_images/Street_Fire_Images/Fire_Fake.png",
        description: "burnalertDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: true,
        searchTerms: ["burnalertsearchTerms1", "burnalertsearchTerms2", "burnalertsearchTerms3", "burnalertsearchTerms4"],
        searchResults: [
            { title: "burnalerttitle1", description: "burnalertdescription1", isAd: true, reasoningIndex: 0, icons: ["icons/companyfirealarm.png"] },
            { title: "burnalerttitle2", description: "burnalertdescription2", isAd: true, reasoningIndex: 0, icons: ["icons/companyfireex.png"] },
            { title: "burnalerttitle4", description: "burnalertdescription4", isAd: false, reasoningIndex: 4, date: "burnalertdate4", icons: ["icons/alt news.png"] },
            { title: "burnalerttitle5", description: "burnalertdescription5", isAd: false, reasoningIndex: 0, date: "burnalertdate5", icons: ["icons/dn.png"] },
            { title: "burnalerttitle6", description: "burnalertdescription6", isAd: false, reasoningIndex: 0, date: "burnalertdate6", icons: ["icons/firedpt.png"] },
            { title: "burnalerttitle7", description: "burnalertdescription7", isAd: false, reasoningIndex: 1, date: "burnalertdate7", icons: ["icons/firedpt.png"] },
            { title: "burnalerttitle8", description: "burnalertdescription8", isAd: false, reasoningIndex: 5, date: "burnalertdate8", icons: ["icons/X.png"] },
            { title: "burnalerttitle9", description: "burnalertdescription9", isAd: false, reasoningIndex: 2, date: "burnalertdate9", icons: ["icons/dn.png"] },
            { title: "burnalerttitle10", description: "burnalertdescription10", isAd: false, reasoningIndex: 2, date: "burnalertdate10", icons: ["icons/firedpt.png"] },
            { title: "burnalerttitle11", description: "burnalertdescription11", isAd: false, reasoningIndex: 6, date: "burnalertdate11", icons: ["icons/alt news.png"] },
            { title: "burnalerttitle12", description: "burnalertdescription12", isAd: false, reasoningIndex: 3, date: "burnalertdate12", icons: ["icons/Channel9.png"] },
            { title: "burnalerttitle13", description: "burnalertdescription13", isAd: false, reasoningIndex: 2, date: "burnalertdate13", icons: ["icons/insta.png"] },
            { title: "burnalerttitle14", description: "burnalertdescription14", isAd: false, reasoningIndex: 6, date: "burnalertdate14", icons: ["icons/alt news.png"] },
            { title: "burnalerttitle15", description: "burnalertdescription15", isAd: false , reasoningIndex: 1, date: "burnalertdate15", icons: ["icons/dn.png"] }
        ],
        imageResults: [
            { src: "updated_images/Street_Fire_Images/Orig_Street_Party.jpeg", location: "burnalertlocation1", date: "burnalertimagedate1", icons: ["icons/insta.png"] },
            { src: "updated_images/Street_Fire_Images/Orig_W_AI-Fake_Fire_Added.png", location: "burnalertlocation2", date: "burnalertimagedate2", icons: ["icons/insta.png"] },
            { src: "updated_images/Street_Fire_Images/image3.png", location: "burnalertlocation3", date: "burnalertimagedate3", icons: ["icons/dn.png"] },
            { src: "updated_images/Street_Fire_Images/image4.png", location: "burnalertlocation4", date: "burnalertimagedate3", icons: ["icons/dn.png"] }
        ]
    },
    {
        id: 2,
        title: "libraryTitle",
        thumbnail: "updated_images/Terror_At_Library_Images/Fake_Threat_1_Dark.png",
        image: "updated_images/Terror_At_Library_Images/Fake_Threat_1_Dark.png",
        description: "libraryDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: false,
        searchTerms: ["librarysearchTerms1", "librarysearchTerms2", "librarysearchTerms3", "librarysearchTerms4"],
        searchResults: [
            { title: "librarytitle1", description: "librarydescription1", isAd: true, reasoningIndex: 2, date: "librarydate1", icons: ["icons/X.png"] },
            { title: "librarytitle2", description: "librarydescription2", isAd: true, reasoningIndex: 2, date: "librarydate2", icons: ["icons/insta.png"] },
            { title: "librarytitle3", description: "librarydescription3", isAd: false, reasoningIndex: 4, date: "librarydate3", icons: ["icons/alt news.png"] },
            { title: "librarytitle4", description: "librarydescription4", isAd: false, reasoningIndex: 3, date: "librarydate4", icons: ["icons/DN eng.png"] },
            //{ title: "librarytitle5", description: "librarydescription5", isAd: false, reasoningIndex: 4, date: "librarydate5", icons: ["icons/alt news.png"] },
            { title: "librarytitle6", description: "librarydescription6", isAd: false, reasoningIndex: 1, date: "librarydate6", icons: ["icons/Channel1.png"] },
            { title: "librarytitle7", description: "librarydescription7", isAd: false, reasoningIndex: 0, date: "librarydate7", icons: ["icons/Channel1.png"] },
            { title: "librarytitle8", description: "librarydescription8", isAd: false, reasoningIndex: 4, date: "librarydate8", icons: ["icons/alt news.png"] },
            { title: "librarytitle9", description: "librarydescription9", isAd: false, reasoningIndex: 1, date: "librarydate9", icons: ["icons/Channel9.png"] },
            { title: "librarytitle10", description: "librarydescription10", isAd: false, reasoningIndex: 2, date: "librarydate10", icons: ["icons/DN eng.png"] },
            { title: "librarytitle11", description: "librarydescription11", isAd: false, reasoningIndex: 4, date: "librarydate11", icons: ["icons/alt news.png"] },
            { title: "librarytitle12", description: "librarydescription12", isAd: false, reasoningIndex: 2, date: "librarydate12", icons: ["icons/DN eng.png"] },
            { title: "librarytitle13", description: "librarydescription13", isAd: false, reasoningIndex: 2, date: "librarydate13", icons: ["icons/Channel1.png"] },
            { title: "librarytitle14", description: "librarydescription14", isAd: false, reasoningIndex: 3, date: "librarydate14", icons: ["icons/alt news.png"] },
            { title: "librarytitle15", description: "librarydescription15", isAd: false, reasoningIndex: 2, date: "librarydate15", icons: ["icons/insta.png"] },
            { title: "librarytitle16", description: "librarydescription16", isAd: false, reasoningIndex: 1, date: "librarydate16", icons: ["icons/Channel1.png"] },
            { title: "librarytitle17", description: "librarydescription17", isAd: false, reasoningIndex: 4, date: "librarydate17", icons: ["icons/alt news.png"] },
            { title: "librarytitle18", description: "librarydescription18", isAd: false, reasoningIndex: 1, date: "librarydate18", icons: ["icons/Channel9.png"] }
        ],
        imageResults: [
            { src: "updated_images/Terror_At_Library_Images/Fake_Threat_2_Flash.png", location: "librarylocation1", date: "libraryimagedate1", icons: ["icons/insta.png"] },
            { src: "updated_images/Terror_At_Library_Images/Stag_party_2_Flash.png", location: "librarylocation2", date: "libraryimagedate2", icons: ["icons/X.png"] },
            { src: "updated_images/Terror_At_Library_Images/Stag_Party_1_Dark.png", location: "librarylocation3", date: "libraryimagedate3", icons: ["icons/X.png"] },
            { src: "updated_images/Terror_At_Library_Images/Waterguns_2_Flash.png", location: "librarylocation4", date: "libraryimagedate4", icons: ["icons/insta.png"] }
        ]
    },
    {
        id: 3,
        title: "extrimistalertTitle",
        thumbnail: "updated_images/military/Military_1_Base_1.jpeg",
        image: "updated_images/military/Military_1_Base_1.jpeg",
        description: "extrimistalertDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: false,
        searchTerms: ["extrimistalertsearchTerms1", "extrimistalertsearchTerms2", "extrimistalertsearchTerms3", "extrimistalertsearchTerms4"],
        searchResults: [
            { title: "extrimistalerttitle1", description: "extrimistalertdescription1", isAd: true, reasoningIndex: 2, icons: ["icons/urbansafe.png"] },
            { title: "extrimistalerttitle2", description: "extrimistalertdescription2", isAd: false, reasoningIndex: 0, icons: ["icons/defenceforces.png"] },
            { title: "extrimistalerttitle3", description: "extrimistalertdescription3", isAd: false, reasoningIndex: 3, icons: ["icons/X.png"] },
            { title: "extrimistalerttitle4", description: "extrimistalertdescription4", isAd: false, reasoningIndex: 1, icons: ["icons/Channel1.png"] },
            { title: "extrimistalerttitle5", description: "extrimistalertdescription5", isAd: false, reasoningIndex: 4, icons: ["icons/security.png"] },
            { title: "extrimistalerttitle6", description: "extrimistalertdescription6", isAd: false, reasoningIndex: 1, icons: ["icons/insta.png"] },
            { title: "extrimistalerttitle7", description: "extrimistalertdescription7", isAd: false, reasoningIndex: 2, icons: ["icons/X.png"] },
            { title: "extrimistalerttitle8", description: "extrimistalertdescription8", isAd: false, reasoningIndex: 4, icons: ["icons/preppersunity.png"] },
            { title: "extrimistalerttitle9", description: "extrimistalertdescription9", isAd: false, reasoningIndex: 1, icons: ["icons/dn.png"] },
            { title: "extrimistalerttitle10", description: "extrimistalertdescription10", isAd: false, reasoningIndex: 1, icons: ["icons/Channel9.png"] },
            { title: "extrimistalerttitle11", description: "extrimistalertdescription11", isAd: false, reasoningIndex: 4, icons: ["icons/survivalgear.png"] },
            { title: "extrimistalerttitle12", description: "extrimistalertdescription12", isAd: false, reasoningIndex: 2, icons: ["icons/insta.png"] }
        ],
        imageResults: [
            { src: "updated_images/military/Military_Redbull.jpeg", location: "extrimistalertlocation1", date: "extrimistimagedate1", icons: ["icons/insta.png"] },
            { src: "updated_images/military/Military_Comercial_Complete_Music.mp4",type: "video", location: "extrimistalertlocation2", date: "extrimistimagedate2", icons: ["icons/Channel1.png"] },
            { src: "updated_images/military/Military_Comercial_Shrt_No_Music.mp4", type:"video", location: "extrimistalertlocation3", date: "extrimistimagedate3", icons: ["icons/alt news.png"] },
            { src: "updated_images/military/Military_Comercial_Shrt_Music.mp4", type:"video",location: "extrimistalertlocation4", date: "extrimistimagedate4", icons: ["icons/insta.png"] }
        ]
    },
    {
        id: 4,
        title: "waterpoisoningTitle",
        thumbnail: "updated_images/bad_water/Bad_Water_Glas_4.jpeg",
        image: "updated_images/bad_water/Bad_Water_Glas_4.jpeg",
        description: "waterpoisoningDescription",
        icons: ["icons/alt news.png"],
        unread: false,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: true,
        searchTerms: ["waterpoisoningsearchTerms1", "waterpoisoningsearchTerms2", "waterpoisoningsearchTerms3", "waterpoisoningsearchTerms4"],
        searchResults: [
            { title: "waterpoisoningtitle1", description: "waterpoisoningdescription1", isAd: true, reasoningIndex: 2, date: "waterpoisoningdate1", icons: ["icons/waterfilter.png"] },
            { title: "waterpoisoningtitle2", description: "waterpoisoningdescription2", isAd: true, reasoningIndex: 2, date: "waterpoisoningdate2", icons: ["icons/watertesting.png"] },
            { title: "waterpoisoningtitle3", description: "waterpoisoningdescription3", isAd: false, reasoningIndex: 1, date: "waterpoisoningdate3", icons: ["icons/insta.png"] },
            //{ title: "waterpoisoningtitle4", description: "waterpoisoningdescription4", isAd: false, reasoningIndex: 3, date: "waterpoisoningdate4", icons: ["icons/Channel9.png"] },
            { title: "waterpoisoningtitle5", description: "waterpoisoningdescription5", isAd: false, reasoningIndex: 2, date: "waterpoisoningdate4", icons: ["icons/Channel9.png"] },
            { title: "waterpoisoningtitle6", description: "waterpoisoningdescription6", isAd: false, reasoningIndex: 1, date: "waterpoisoningdate5", icons: ["icons/X.png"] },
            { title: "waterpoisoningtitle7", description: "waterpoisoningdescription7", isAd: false, reasoningIndex: 1, date: "waterpoisoningdate6", icons: ["icons/dn.png"] },
            { title: "waterpoisoningtitle8", description: "waterpoisoningdescription8", isAd: false, reasoningIndex: 4, date: "waterpoisoningdate7", icons: ["icons/tapwater.png"] },
            { title: "waterpoisoningtitle9", description: "waterpoisoningdescription9", isAd: false, reasoningIndex: 0, date: "waterpoisoningdate8", icons: ["icons/Channel9.png"] },
            { title: "waterpoisoningtitle10", description: "waterpoisoningdescription10", isAd: false, reasoningIndex: 2, date: "waterpoisoningdate9", icons: ["icons/X.png"] },
            { title: "waterpoisoningtitle11", description: "waterpoisoningdescription11", isAd: false, reasoningIndex: 3, date: "waterpoisoningdate10", icons: ["icons/waterfilter.png"] },
            { title: "waterpoisoningtitle12", description: "waterpoisoningdescription12", isAd: false, reasoningIndex: 1, date: "waterpoisoningdate11", icons: ["icons/dn.png"] },
            { title: "waterpoisoningtitle13", description: "waterpoisoningdescription13", isAd: false, reasoningIndex: 2, date: "waterpoisoningdate12", icons: ["icons/Channel1.png"] },
            { title: "waterpoisoningtitle14", description: "waterpoisoningdescription14", isAd: false, reasoningIndex: 4, date: "waterpoisoningdate13", icons: ["icons/alt news.png"] }
            //{ title: "waterpoisoningtitle15", description: "waterpoisoningdescription15", isAd: false, reasoningIndex: 1 },
            //{ title: "waterpoisoningtitle16", description: "waterpoisoningdescription16", isAd: false, reasoningIndex: 0 },
            //{ title: "waterpoisoningtitle17", description: "waterpoisoningdescription17", isAd: false, reasoningIndex: 3 },
            //{ title: "waterpoisoningtitle18", description: "waterpoisoningdescription18", isAd: false, reasoningIndex: 2 }
        ],
        imageResults: [
            { src: "updated_images/bad_water/Fake_Steam_Green.png", location: "waterpoisoninglocation1", date: "waterpoisoningimagedate1", icons: ["icons/insta.png"] },
            { src: "updated_images/bad_water/Fake_Steam_Black.png", location: "waterpoisoninglocation2", date: "waterpoisoningimagedate2", icons: ["icons/Channel1.png"] },
            { src: "updated_images/bad_water/clean.png", location: "waterpoisoninglocation3", date: "waterpoisoningimagedate3", icons: ["icons/stockphoto.png"] },
            { src: "updated_images/bad_water/Bad_Water_Glas_6.jpeg", location: "waterpoisoninglocation4", date: "waterpoisoningimagedate4", icons: ["icons/X.png"] }
        ]
    },
    {
        // New TRUE story inserted as the fifth item (after water poisoning)
        id: 9,
        title: "fireincidentTitle",
        thumbnail: "img/fire1.png",
        image: "img/fire1.png",
        description: "fireincidentDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: true,
        forceTextSearchAfterImage: false,
        searchTerms: ["fireincidentsearchTerms1", "fireincidentsearchTerms2", "fireincidentsearchTerms3", "fireincidentsearchTerms4"],
        searchResults: [
            { title: "fireincidenttitle1", description: "fireincidentdescription1", isAd: true, reasoningIndex: 2, date: "fireincidenttextdate1", icons: ["icons/companyfireex.png"] },
            { title: "fireincidenttitle2", description: "fireincidentdescription2", isAd: true, reasoningIndex: 2, date: "fireincidenttextdate2", icons: ["icons/companyfirealarm.png"] },
            { title: "fireincidenttitle3", description: "fireincidentdescription3", isAd: false, reasoningIndex: 1, date: "fireincidenttextdate3", icons: ["icons/redligtwatch.png"] },
            { title: "fireincidenttitle4", description: "fireincidentdescription4", isAd: false, reasoningIndex: 3, date: "fireincidenttextdate4", icons: ["icons/X.png"] },
            { title: "fireincidenttitle5", description: "fireincidentdescription5", isAd: false, reasoningIndex: 2, date: "fireincidenttextdate5", icons: ["icons/X.png"] },
            { title: "fireincidenttitle6", description: "fireincidentdescription6", isAd: false, reasoningIndex: 1, date: "fireincidenttextdate6", icons: ["icons/police.png"] },
            { title: "fireincidenttitle7", description: "fireincidentdescription7", isAd: false, reasoningIndex: 1, date: "fireincidenttextdate7", icons: ["icons/firedpt.png"] },
            { title: "fireincidenttitle8", description: "fireincidentdescription8", isAd: false, reasoningIndex: 4, date: "fireincidenttextdate8", icons: ["icons/weather service.png"] },
            { title: "fireincidenttitle9", description: "fireincidentdescription9", isAd: false, reasoningIndex: 0, date: "fireincidenttextdate9", icons: ["icons/insta.png"] },
            { title: "fireincidenttitle10", description: "fireincidentdescription10", isAd: false, reasoningIndex: 2, date: "fireincidenttextdate10", icons: ["icons/X.png"] },
            { title: "fireincidenttitle11", description: "fireincidentdescription11", isAd: false, reasoningIndex: 3, date: "fireincidenttextdate11", icons: ["icons/patriotcat.png"] },
            { title: "fireincidenttitle12", description: "fireincidentdescription12", isAd: false, reasoningIndex: 1, date: "fireincidenttextdate12", icons: ["icons/insta.png"] }
        ],
        imageResults: [
            { src: "img/fire1.png", location: "fireincidentlocation1", date: "fireincidentdate1", icons: ["icons/insta.png"] },
            { src: "img/fire2.png", location: "fireincidentlocation2", date: "fireincidentdate2", icons: ["icons/Channel1.png"] },
            { src: "img/fire3.png", location: "fireincidentlocation3", date: "fireincidentdate3", icons: ["icons/insta.png"] },
            { src: "img/fire4.png", location: "fireincidentlocation4", date: "fireincidentdate4", icons: ["icons/firedpt.png"] }
        ]
    },
    {
        id: 5,
        title: "petsTitle",
        thumbnail: "img/pets.png",
        image: "img/pets.png",
        description: "petsDescription",
        icons: ["icons/X.png"],
        unread: false,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: false,
        searchTerms: ["petssearchTerms1", "petssearchTerms2", "petssearchTerms3", "petssearchTerms4"],
        searchResults: [
            { title: "petstitle1", description: "petsdescription1", isAd: true, reasoningIndex: 2 },
            { title: "petstitle2", description: "petsdescription2", isAd: true, reasoningIndex: 2 },
            { title: "petstitle3", description: "petsdescription3", isAd: false, reasoningIndex: 1, date: "pettextdate3", icons: ["icons/cityvet.png"] },
            { title: "petstitle4", description: "petsdescription4", isAd: false, reasoningIndex: 4, date: "pettextdate4", icons: ["icons/X.png"] },
            { title: "petstitle5", description: "petsdescription5", isAd: false, reasoningIndex: 1, date: "pettextdate5", icons: ["icons/dn.png"] },
            { title: "petstitle6", description: "petsdescription6", isAd: false, reasoningIndex: 1, date: "pettextdate6", icons: ["icons/Channel9.png"] },
            { title: "petstitle7", description: "petsdescription7", isAd: false, reasoningIndex: 2, date: "pettextdate7", icons: ["icons/Channel1.png"] },
            { title: "petstitle8", description: "petsdescription8", isAd: false, reasoningIndex: 4, date: "pettextdate8", icons: ["icons/petlarm.png"] },
            { title: "petstitle9", description: "petsdescription9", isAd: false, reasoningIndex: 1, date: "pettextdate9", icons: ["icons/Channel1.png"] },
            { title: "petstitle10", description: "petsdescription10", isAd: false, reasoningIndex: 2, date: "pettextdate10", icons: ["icons/pethealtk.png"] },
            { title: "petstitle11", description: "petsdescription11", isAd: false, reasoningIndex: 3, date: "pettextdate11", icons: ["icons/petsafe.png"] },
            { title: "petstitle12", description: "petsdescription12", isAd: false, reasoningIndex: 2, date: "pettextdate12", icons: ["icons/dn.png"] },
            { title: "petstitle13", description: "petsdescription13", isAd: false, reasoningIndex: 2, date: "pettextdate13", icons: ["icons/Channel9.png"] },
            { title: "petstitle14", description: "petsdescription14", isAd: false, reasoningIndex: 4, date: "pettextdate14", icons: ["icons/petcare.png"] },
            { title: "petstitle15", description: "petsdescription15", isAd: false, reasoningIndex: 2, date: "pettextdate15", icons: ["icons/Channel1.png"] },
        ],
        imageResults: [
            { src: "updated_images/pets/petillroom.png", location: "petslocation1", date: "petsdate1", icons: ["icons/Channel1.png"] },
            { src: "img/pets.png", location: "petslocation2", date: "petsdate2", icons: ["icons/DN clean1920.png"] },
            { src: "updated_images/pets/petilllab.png", location: "petslocation3", date: "petsdate3", icons: ["icons/Channel1.png"] },
            { src: "updated_images/pets/petillroom2.png", location: "petslocation4", date: "petsdate4", icons: ["icons/DN clean1920.png"] }
        ]
    },
    {
        id: 6,
        title: "celebrityDeathTitle",
        thumbnail: "img/memorial.png",
        image: "img/memorial.png",
        description: "celebrityDeathDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: true,
        searchTerms: ["celebrityDeathSearchTerms1", "celebrityDeathSearchTerms2", "celebrityDeathSearchTerms3", "celebrityDeathSearchTerms4"],
        searchResults: [
            { title: "celebrityDeathtitle1", description: "celebrityDeathdescription1", isAd: false, reasoningIndex: 2, date: "celebrityDeathResultDate1", icons: ["icons/CityTruthDaily.png"] },
            { title: "celebrityDeathtitle2", description: "celebrityDeathdescription2", isAd: false, reasoningIndex: 2, date: "celebrityDeathResultDate2", icons: ["icons/insta.png"] },
            { title: "celebrityDeathtitle3", description: "celebrityDeathdescription3", isAd: false, reasoningIndex: 0, date: "celebrityDeathResultDate3", icons: ["icons/X.png"] },
            { title: "celebrityDeathtitle4", description: "celebrityDeathdescription4", isAd: true, reasoningIndex: 2, date: "celebrityDeathResultDate4", icons: ["icons/home.png"] },
            { title: "celebrityDeathtitle5", description: "celebrityDeathdescription5", isAd: false, reasoningIndex: 0, date: "celebrityDeathResultDate5", icons: ["icons/Channel1.png"] },
            { title: "celebrityDeathtitle6", description: "celebrityDeathdescription6", isAd: false, reasoningIndex: 1, date: "celebrityDeathResultDate6", icons: ["icons/insta.png"] },
            { title: "celebrityDeathtitle7", description: "celebrityDeathdescription7", isAd: false, reasoningIndex: 3, date: "celebrityDeathResultDate7", icons: ["icons/insta.png"] },
            { title: "celebrityDeathtitle8", description: "celebrityDeathdescription8", isAd: false, reasoningIndex: 1, date: "celebrityDeathResultDate8", icons: ["icons/firedpt.png"] },
            { title: "celebrityDeathtitle9", description: "celebrityDeathdescription9", isAd: true, reasoningIndex: 2, date: "celebrityDeathResultDate9", icons: ["icons/VitalHeart.png"] },
            { title: "celebrityDeathtitle10", description: "celebrityDeathdescription10", isAd: false, reasoningIndex: 2, date: "celebrityDeathResultDate10", icons: ["icons/insta.png"] },
            { title: "celebrityDeathtitle11", description: "celebrityDeathdescription11", isAd: false, reasoningIndex: 3, date: "celebrityDeathResultDate11", icons: ["icons/X.png"] },
            { title: "celebrityDeathtitle12", description: "celebrityDeathdescription12", isAd: false, reasoningIndex: 3, date: "celebrityDeathResultDate12", icons: ["icons/valestudio.png"] }
        ],
        imageResults: [
            { src: "updated_images/actor_dead/actordied6.png", location: "celebrityDeathlocation1", date: "celebrityDeathdate1", icons: ["icons/insta.png"] },
            { src: "updated_images/actor_dead/actordied2.png", location: "celebrityDeathlocation2", date: "celebrityDeathdate2", icons: ["icons/insta.png"] },
            { src: "updated_images/actor_dead/actordied.png", location: "celebrityDeathlocation3", date: "celebrityDeathdate3", icons: ["icons/Channel9.png"] },
            { src: "updated_images/actor_dead/actor_crop.png", location: "celebrityDeathlocation4", date: "celebrityDeathdate4", icons: ["icons/Channel1.png"] }
        ]
    },
    {
        id: 7,
        title: "weatherAlertTitle",
        thumbnail: "img/storm_intro.jpeg",
        image: "img/storm_intro.jpeg",
        description: "weatherAlertDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: true,
        forceTextSearchAfterImage: true,
        searchTerms: ["weatherAlertsearchTerms1", "weatherAlertsearchTerms2", "weatherAlertsearchTerms3", "weatherAlertsearchTerms4"],
        searchResults: [
            { title: "weatherAlerttitle1", description: "weatherAlertdescription1", isAd: true, reasoningIndex: 2, date: "weatherAlerttextdate1", icons: ["icons/weathershield.png"] },
            { title: "weatherAlerttitle2", description: "weatherAlertdescription2", isAd: true, reasoningIndex: 2, date: "weatherAlerttextdate2", icons: ["icons/safedrive.png"] },
            { title: "weatherAlerttitle3", description: "weatherAlertdescription3", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate3", icons: ["icons/weatherEU.png"] },
            { title: "weatherAlerttitle4", description: "weatherAlertdescription4", isAd: false, reasoningIndex: 3, date: "weatherAlerttextdate4", icons: ["icons/insta.png"] },
            { title: "weatherAlerttitle5", description: "weatherAlertdescription5", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate5", icons: ["icons/insta.png"] },
            { title: "weatherAlerttitle6", description: "weatherAlertdescription6", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate6", icons: ["icons/Dove Transport.png"] },
            { title: "weatherAlerttitle7", description: "weatherAlertdescription7", isAd: false, reasoningIndex: 3, date: "weatherAlerttextdate7", icons: ["icons/alt news.png"] },
            { title: "weatherAlerttitle8", description: "weatherAlertdescription8", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate8", icons: ["icons/X.png"] },
            { title: "weatherAlerttitle9", description: "weatherAlertdescription9", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate9", icons: ["icons/weather service.png"] },
            { title: "weatherAlerttitle10", description: "weatherAlertdescription10", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate10", icons: ["icons/X.png"] },
            { title: "weatherAlerttitle11", description: "weatherAlertdescription11", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate11", icons: ["icons/insta.png"] },
            { title: "weatherAlerttitle12", description: "weatherAlertdescription12", isAd: false, reasoningIndex: 1, date: "weatherAlerttextdate12", icons: ["icons/X.png"] }
        ],
        imageResults: [
            { src: "updated_images/winter_storm/Winter_Storm_1.mp4", type: "video",location: "weatherAlertlocation1", date: "weatherAlertdate1", icons: ["icons/weather service.png"] },
            { src: "updated_images/winter_storm/Winter_Storm_2.mp4", type: "video", location: "weatherAlertlocation2", date: "weatherAlertdate2", icons: ["icons/insta.png"] },
            { src: "updated_images/winter_storm/Winter_Storm_2.mp4", type: "video", location: "weatherAlertlocation3", date: "weatherAlertdate3", icons: ["icons/insta.png"] },
            { src: "updated_images/winter_storm/Winter_Storm_Coast_2.jpeg", location: "weatherAlertlocation4", date: "weatherAlertdate4", icons: ["icons/insta.png"] }
        ]
    },
    {
        id: 8,
        title: "dogfluencerTitle",
        thumbnail: "updated_images/dogfluencer/dogfluencer.png",
        image: "updated_images/dogfluencer/dogfluencer.png",
        description: "dogfluencerDescription",
        icons: ["icons/X.png"],
        unread: false,
        processed: false,
        status: null,
        correctAnswer: true,
        forceTextSearchAfterImage: false,
        searchTerms: ["dogfluencersearchTerms1", "dogfluencersearchTerms2", "dogfluencersearchTerms3", "dogfluencersearchTerms4"],
        searchResults: [
            { title: "dogfluencertitle1", description: "dogfluencerdescription1", isAd: true, reasoningIndex: 2, icons: ["icons/puppy.png"] },
            { title: "dogfluencertitle2", description: "dogfluencerdescription2", isAd: true, reasoningIndex: 2, icons: ["icons/puppy2.png"]},
            { title: "dogfluencertitle3", description: "dogfluencerdescription3", isAd: false, reasoningIndex: 2, date: "dogfluencertextdate3", icons: ["icons/dn.png"] },
            { title: "dogfluencertitle4", description: "dogfluencerdescription4", isAd: false, reasoningIndex: 4, date: "dogfluencertextdate4", icons: ["icons/boostfollowers.png"] },
            { title: "dogfluencertitle5", description: "dogfluencerdescription5", isAd: false, reasoningIndex: 2, date: "dogfluencertextdate5", icons: ["icons/Channel1.png"] },
            { title: "dogfluencertitle6", description: "dogfluencerdescription6", isAd: false, reasoningIndex: 2, date: "dogfluencertextdate6", icons: ["icons/dn.png"] },
            { title: "dogfluencertitle7", description: "dogfluencerdescription7", isAd: false, reasoningIndex: 4, date: "dogfluencertextdate7", icons: ["icons/fisshybuyfollowers.png"] },
            { title: "dogfluencertitle8", description: "dogfluencerdescription8", isAd: false, reasoningIndex: 3, date: "dogfluencertextdate8", icons: ["icons/dn.png"] },
            { title: "dogfluencertitle9", description: "dogfluencerdescription9", isAd: false, reasoningIndex: 2,date: "dogfluencertextdate9", icons: ["icons/Channel1.png"] },
            { title: "dogfluencertitle10", description: "dogfluencerdescription10", isAd: false, reasoningIndex: 3, date: "dogfluencertextdate10", icons: ["icons/Channel9.png"] },
            { title: "dogfluencertitle11", description: "dogfluencerdescription11", isAd: false, reasoningIndex: 4, date: "dogfluencertextdate11", icons: ["icons/insta.png"] },
            { title: "dogfluencertitle12", description: "dogfluencerdescription12", isAd: false, reasoningIndex: 1, date: "dogfluencertextdate12", icons: ["icons/dove_city_ftc_logo.png"] },
            { title: "dogfluencertitle13", description: "dogfluencerdescription13", isAd: false, reasoningIndex: 2, date: "dogfluencertextdate13", icons: ["icons/Channel1.png"] },
            { title: "dogfluencertitle14", description: "dogfluencerdescription14", isAd: false, reasoningIndex: 4, date: "dogfluencertextdate14", icons: ["icons/insta.png"] },
            { title: "dogfluencertitle15", description: "dogfluencerdescription15", isAd: false, reasoningIndex: 2, date: "dogfluencertextdate15", icons: ["icons/Channel9.png"] },
        ],
        imageResults: [
            { src: "updated_images/dogfluencer/dogfluencer.png", location: "dogfluencerlocation1", date: "dogfluencerdate1", icons: ["icons/insta.png"] },
            { src: "updated_images/dogfluencer/dogfluencergraph1.png", location: "dogfluencerlocation2", date: "dogfluencerdate2", icons: ["icons/Channel1.png"] },
            { src: "updated_images/dogfluencer/dog_crop.png", location: "dogfluencerlocation3", date: "dogfluencerdate3", icons: ["icons/insta.png"] },
            { src: "updated_images/dogfluencer/dogfluencergraph3engage.png", location: "dogfluencerlocation4", date: "dogfluencerdate4", icons: ["icons/Channel1.png"] }
        ]
    },
    {
        id: 10,
        title: "toxicleakTitle",
        thumbnail: "img/gasleak_intro.png",
        image: "img/gasleak_intro.png",
        description: "toxicleakDescription",
        icons: ["icons/insta.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: true,
        forceTextSearchAfterImage: false,
        searchTerms: ["toxicleaksearchTerms1", "toxicleaksearchTerms2", "toxicleaksearchTerms3", "toxicleaksearchTerms4"],
        searchResults: [
            { title: "toxicleaktitle1", description: "toxicleakdescription1", isAd: true, reasoningIndex: 2, icons: ["icons/toxicsafe.png"] },
            { title: "toxicleaktitle2", description: "toxicleakdescription2", isAd: true, reasoningIndex: 2, icons: ["icons/cleanflow.png"] },
            { title: "toxicleaktitle3", description: "toxicleakdescription3", isAd: false, reasoningIndex: 2, date: "toxicleaktextdate3", icons: ["icons/redligtwatch.png"] },
            { title: "toxicleaktitle4", description: "toxicleakdescription4", isAd: false, reasoningIndex: 1, date: "toxicleakdate4", icons: ["icons/Channel1.png"] },
            { title: "toxicleaktitle5", description: "toxicleakdescription5", isAd: false, reasoningIndex: 1, date: "toxicleakdate5", icons: ["icons/insta.png"] },
            { title: "toxicleaktitle6", description: "toxicleakdescription6", isAd: false, reasoningIndex: 2, date: "toxicleakdate6", icons: ["icons/CityTruthDaily.png"] },
            { title: "toxicleaktitle7", description: "toxicleakdescription7", isAd: false, reasoningIndex: 3, date: "toxicleakdate7", icons: ["icons/dn.png"] },
            { title: "toxicleaktitle8", description: "toxicleakdescription8", isAd: false, reasoningIndex: 1, date: "toxicleakdate8", icons: ["icons/Public Safety Office .png"] },
        ],
        imageResults: [
            { src: "img/gasleak_intro.png", location: "toxicleaklocation1", date: "toxicleakdate1", icons: ["icons/safechem.png"] },
            { src: "img/gasleak_intro.png", location: "toxicleaklocation2", date: "toxicleakdate2", icons: ["icons/patriotcat.png"] },
            { src: "updated_images/gas_leak/gasleakbest2.png", location: "toxicleaklocation3", date: "toxicleakdate3", icons: ["icons/Public Safety Office .png"] },
            { src: "updated_images/gas_leak/gasleaklocal best.png", location: "toxicleaklocation4", date: "toxicleakdate4", icons: ["icons/insta.png"] }
        ]
    },
    {
        id: 11,
        title: "sportspulseTitle",
        thumbnail: "updated_images/football/Football_fixd_ESCORTED.png",
        image: "updated_images/football/Football_fixd_ESCORTED.png",
        description: "sportspulseDescription",
        icons: ["icons/sportpulse.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: false,
        searchTerms: ["sportspulsesearchTerms1", "sportspulsesearchTerms2", "sportspulsesearchTerms3", "sportspulsesearchTerms4"],
        searchResults: [
            { title: "sportspulsetitle1", description: "sportspulsedescription1", isAd: true, reasoningIndex: 2, date: "sportpulsetextdate1" },
            { title: "sportspulsetitle2", description: "sportspulsedescription2", isAd: true, reasoningIndex: 2, date: "sportpulsetextdate2" },
            { title: "sportspulsetitle3", description: "sportspulsedescription3", isAd: false, reasoningIndex: 2, date: "sportpulsetextdate3", icons: ["icons/goalline.png"] },
            { title: "sportspulsetitle4", description: "sportspulsedescription4", isAd: false, reasoningIndex: 1, date: "sportpulsetextdate4", icons: ["icons/sportpulse.png"] },
            { title: "sportspulsetitle5", description: "sportspulsedescription5", isAd: false, reasoningIndex: 1, date: "sportpulsetextdate5", icons: ["icons/X.png"] },
            { title: "sportspulsetitle6", description: "sportspulsedescription6", isAd: false, reasoningIndex: 2, date: "sportpulsetextdate6", icons: ["icons/sportblog.png"] },
            { title: "sportspulsetitle7", description: "sportspulsedescription7", isAd: false, reasoningIndex: 3, date: "sportpulsetextdate7", icons: ["icons/insta.png"] },
            { title: "sportspulsetitle8", description: "sportspulsedescription8", isAd: false, reasoningIndex: 1, date: "sportpulsetextdate8", icons: ["icons/insta.png"] },
            { title: "sportspulsetitle9", description: "sportspulsedescription9", isAd: false, reasoningIndex: 1, date: "sportpulsetextdate9", icons: ["icons/sportblog.png"] },
            { title: "sportspulsetitle10", description: "sportspulsedescription10", isAd: false, reasoningIndex: 2, date: "sportpulsetextdate10", icons: ["icons/eurosport.png"] },
            { title: "sportspulsetitle11", description: "sportspulsedescription11", isAd: false, reasoningIndex: 1, date: "sportpulsetextdate11", icons: ["icons/goalline.png"] }
        ],
        imageResults: [
            { src: "updated_images/football/Football_fixed_SHAME_red.png", location: "sportspulselocation1", date: "sportspulsedate1", icons: ["icons/insta.png"] },
            { src: "updated_images/football/Footboll_Film_Falsify.mp4", type:"video", location: "sportspulselocation2", date: "sportspulsedate2", icons: ["icons/insta.png"] },
            { src: "updated_images/football/Football_Falsify_11_cut_2.png", location: "sportspulselocation3", date: "sportspulsedate3", icons: ["icons/insta.png"] },
            { src: "updated_images/football/Football_fixed_.png", location: "sportspulselocation4", date: "sportspulsedate4", icons: ["icons/X.png"] }
        ]
    },
    {
        id: 12,
        title: "forestfireTitle",
        thumbnail: "updated_images/forest_fire/Forest_Fire_Fake_2.png",
        image: "updated_images/forest_fire/Forest_Fire_Fake_2.png",
        description: "forestfireDescription",
        icons: ["icons/alt news.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: false,
        searchTerms: ["forestfiresearchTerms1", "forestfiresearchTerms2", "forestfiresearchTerms3", "forestfiresearchTerms4"],
        searchResults: [
            { title: "forestfiretitle1", description: "forestfiredescription1", isAd: true, reasoningIndex: 2, date: "forestfiretextdate1", icons: ["icons/forestcom.png"] },
            { title: "forestfiretitle2", description: "forestfiredescription2", isAd: true, reasoningIndex: 2, date: "forestfiretextdate2", icons: ["icons/forestfirecom.png"] },
            { title: "forestfiretitle3", description: "forestfiredescription3", isAd: false, reasoningIndex: 4, date: "forestfiretextdate3", icons: ["icons/patriotcat.png"] },
            { title: "forestfiretitle4", description: "forestfiredescription4", isAd: false, reasoningIndex: 1, date: "forestfiretextdate4", icons: ["icons/weatherEU.png"] },
            { title: "forestfiretitle5", description: "forestfiredescription5", isAd: false, reasoningIndex: 4, date: "forestfiretextdate5", icons: ["icons/redligtwatch.png"] },
            { title: "forestfiretitle6", description: "forestfiredescription6", isAd: false, reasoningIndex: 2, date: "forestfiretextdate6", icons: ["icons/insta.png"] },
            { title: "forestfiretitle7", description: "forestfiredescription7", isAd: false, reasoningIndex: 3, date: "forestfiretextdate7", icons: ["icons/police.png"] },
            { title: "forestfiretitle8", description: "forestfiredescription8", isAd: false, reasoningIndex: 3, date: "forestfiretextdate8", icons: ["icons/Public Safety Office .png"] },
            { title: "forestfiretitle9", description: "forestfiredescription9", isAd: false, reasoningIndex: 3, date: "forestfiretextdate9", icons: ["icons/factchecker.png"] },
            { title: "forestfiretitle10", description: "forestfiredescription10", isAd: false, reasoningIndex: 2, date: "forestfiretextdate10", icons: ["icons/insta.png"] },
            { title: "forestfiretitle11", description: "forestfiredescription11", isAd: false, reasoningIndex: 2, date: "forestfiretextdate11", icons: ["icons/insta.png"] },
            { title: "forestfiretitle12", description: "forestfiredescription12", isAd: false, reasoningIndex: 2, date: "forestfiretextdate12", icons: ["icons/CityTruthDaily.png"] },
            { title: "forestfiretitle13", description: "forestfiredescription13", isAd: false, reasoningIndex: 2, date: "forestfiretextdate13", icons: ["icons/X.png"] }
        ],
        imageResults: [
            { src: "updated_images/forest_fire/Camp_Fire_Orig.jpeg", location: "forestfirelocation1", date: "forestfiredate1", icons: ["icons/visitsweden.png"] },
            { src: "updated_images/forest_fire/Forest_Fire_Fake_3.png", location: "forestfirelocation2", date: "forestfiredate2", icons: ["icons/CityTruthDaily.png"] },
            { src: "updated_images/forest_fire/Forest_Fire_Fake_4.png", location: "forestfirelocation3", date: "forestfiredate3", icons: ["icons/redligtwatch.png"] },
            { src: "updated_images/forest_fire/Forest_Fire_Fake_1.png", location: "forestfirelocation4", date: "forestfiredate4", icons: ["icons/patriotcat.png"] }
        ]
    },
    {
        id: 13,
        title: "heavyrainTitle",
        thumbnail: "updated_images/heavy_rain/heavy rain 1.png",
        image: "updated_images/heavy_rain/heavy rain 1.png",
        description: "heavyrainDescription",
        icons: ["icons/X.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: true,
        forceTextSearchAfterImage: true,
        searchTerms: ["heavyrainsearchTerms1", "heavyrainsearchTerms2", "heavyrainsearchTerms3", "heavyrainsearchTerms4"],
        searchResults: [
            { title: "heavyraintitle1", description: "heavyraindescription1", isAd: true, icons: ["icons/aquabasement.png"], date: "heavyraintextdate1", reasoningIndex: 2 },
            { title: "heavyraintitle2", description: "heavyraindescription2", isAd: true, icons: ["icons/rainsafe.png"], date: "heavyraintextdate2", reasoningIndex: 2 },
            { title: "heavyraintitle3", description: "heavyraindescription3", isAd: false, icons: ["icons/X.png"], date: "heavyraintextdate3", reasoningIndex: 2 },
            { title: "heavyraintitle4", description: "heavyraindescription4", isAd: false, icons: ["icons/insta.png"], date: "heavyraintextdate4", reasoningIndex: 0 },
            { title: "heavyraintitle5", description: "heavyraindescription5", isAd: false, icons: ["icons/insta.png"], date: "heavyraintextdate5", reasoningIndex: 1 },
            { title: "heavyraintitle6", description: "heavyraindescription6", isAd: false, icons: ["icons/alt news.png"], date: "heavyraintextdate6", reasoningIndex: 2 },
            { title: "heavyraintitle7", description: "heavyraindescription7", isAd: false, icons: ["icons/X.png"], date: "heavyraintextdate7", reasoningIndex: 2 },
            { title: "heavyraintitle8", description: "heavyraindescription8", isAd: false, icons: ["icons/weather service.png"], date: "heavyraintextdate8", reasoningIndex: 0 },
            { title: "heavyraintitle9", description: "heavyraindescription9", isAd: false, icons: ["icons/CityTruthDaily.png"], date: "heavyraintextdate9", reasoningIndex: 2 },
            { title: "heavyraintitle10", description: "heavyraindescription10", isAd: false, icons: ["icons/X.png"], date: "heavyraintextdate10", reasoningIndex: 1 },
            { title: "heavyraintitle11", description: "heavyraindescription11", isAd: false, icons: ["icons/dn.png"], date: "heavyraintextdate11", reasoningIndex: 0 },
            { title: "heavyraintitle12", description: "heavyraindescription12", isAd: false, icons: ["icons/insta.png"], date: "heavyraintextdate12", reasoningIndex: 1 }
        ],
        imageResults: [
            { src: "updated_images/heavy_rain/heavy rain 1.png", location: "heavyrainlocation1", date: "heavyraindate_1", icons: ["icons/insta.png"] },
            { src: "updated_images/heavy_rain/heavy rain 4.png", location: "heavyrainlocation2", date: "heavyraindate_2", icons: ["icons/weather service.png"] },
            { src: "updated_images/heavy_rain/flooding.mp4", type: "video", location: "heavyrainlocation3", date: "heavyraindate_3", icons: ["icons/insta.png"] },
            { src: "updated_images/heavy_rain/heavy rain 3.png", location: "heavyrainlocation4", date: "heavyraindate_4", icons: ["icons/insta.png"] }
        ]
    },
    {
        id: 14,
        title: "monkeyTitle",
        thumbnail: "updated_images/monkey/Monkey_Sthlm_6.png",
        image: "updated_images/monkey/Monkey_Sthlm_6.png",
        description: "monkeyDescription",
        icons: ["icons/insta.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: true,
        forceTextSearchAfterImage: true,
        searchTerms: ["monkeysearchTerms1", "monkeysearchTerms2", "monkeysearchTerms3", "monkeysearchTerms4"],
        searchResults: [
            { title: "monkeytitle1", description: "monkeydescription1", isAd: true, icons: ["icons/security.png"], reasoningIndex: 2, date: "monkeytextdate1" },
            { title: "monkeytitle2", description: "monkeydescription2", isAd: false, icons: ["icons/alt news.png"], reasoningIndex: 2, date: "monkeytextdate2" },
            { title: "monkeytitle3", description: "monkeydescription3", isAd: false, icons: ["icons/insta.png"], reasoningIndex: 2, date: "monkeytextdate3" },
            { title: "monkeytitle4", description: "monkeydescription4", isAd: false, icons: ["icons/CityTruthDaily.png"], reasoningIndex: 2, date: "monkeytextdate4" },
            { title: "monkeytitle5", description: "monkeydescription5", isAd: false, icons: ["icons/dn.png"], reasoningIndex: 0, date: "monkeytextdate5" },
            { title: "monkeytitle6", description: "monkeydescription6", isAd: false, icons: ["icons/Channel9.png"], reasoningIndex: 0, date: "monkeytextdate6" },
            { title: "monkeytitle7", description: "monkeydescription7", isAd: false, icons: ["icons/insta.png"], reasoningIndex: 1, date: "monkeytextdate7" },
            { title: "monkeytitle8", description: "monkeydescription8", isAd: false, icons: ["icons/Public Safety Office .png"], reasoningIndex: 0, date: "monkeytextdate8" }
        ],
        imageResults: [
            { src: "updated_images/monkey/Skate_Meme_1_Ny-City_2.mp4", type: "video", location: "monkeylocation1", date: "monkeyimagedate1", icons: ["icons/insta.png"] },
            { src: "updated_images/monkey/Skate_Meme_1_Vest.mp4", type: "video", location: "monkeylocation2", date: "monkeyimagedate2", icons: ["icons/insta.png"] },
            { src: "updated_images/monkey/Skate_Meme_1_Dancers_2.mp4", type: "video", location: "monkeylocation3", date: "monkeyimagedate3", icons: ["icons/insta.png"] },
            { src: "updated_images/monkey/Monkey_Sthlm_6.png", location: "monkeylocation4", date: "monkeyimagedate4", icons: ["icons/insta.png"]}
        ]
    },
    {
        id: 15,
        title: "baddogTitle",
        thumbnail: "updated_images/bad_dog/Bad_Dog_Film_BASE.png",
        image: "updated_images/bad_dog/Bad_Dog_Film_BASE.png",
        description: "baddogDescription",
        icons: ["icons/celebrity gossip news.png"],
        unread: true,
        processed: false,
        status: null,
        correctAnswer: false,
        forceTextSearchAfterImage: true,
        searchTerms: ["baddogsearchTerms1", "baddogsearchTerms2", "baddogsearchTerms3", "baddogsearchTerms4"],
        searchResults: [
            { title: "baddogtitle1", description: "baddogdescription1", isAd: true, reasoningIndex: 2, date: "baddogtextdate1" },
            { title: "baddogtitle2", description: "baddogdescription2", isAd: false, icons: ["icons/Channel9.png"], reasoningIndex: 4, date: "baddogtextdate2" },
            { title: "baddogtitle3", description: "baddogdescription3", isAd: false, icons: ["icons/celebrity gossip news.png"], reasoningIndex: 2, date: "baddogtextdate3" },
            { title: "baddogtitle4", description: "baddogdescription4", isAd: false, icons: ["icons/alt news.png"], reasoningIndex: 2, date: "baddogtextdate4" },
            { title: "baddogtitle5", description: "baddogdescription5", isAd: false, icons: ["icons/X.png"], reasoningIndex: 5, date: "baddogtextdate5" },
            { title: "baddogtitle6", description: "baddogdescription6", isAd: false, icons: ["icons/CityTruthDaily.png"], reasoningIndex: 4, date: "baddogtextdate6" },
            { title: "baddogtitle7", description: "baddogdescription7", isAd: false, icons: ["icons/Channel9.png"], reasoningIndex: 4, date: "baddogtextdate7" },
            { title: "baddogtitle8", description: "baddogdescription8", isAd: false, icons: ["icons/Public Safety Office .png"], reasoningIndex: 4, date: "baddogtextdate8" },
            { title: "baddogtitle9", description: "baddogdescription9", isAd: false, icons: ["icons/insta.png"], reasoningIndex: 3, date: "baddogtextdate9" }
        ],
        imageResults: [
            { src: "updated_images/bad_dog/News_Bad-Dog_to_Hospital.mp4", type: "video", location: "baddoglocation1", date: "baddogimagedate1", icons: ["icons/GNN logo.png"] },
            { src: "updated_images/bad_dog/Bad-Dog_Miss-them.mp4", type: "video", location: "baddoglocation2", date: "baddogimagedate2", icons: ["icons/Channel9.png"] },
            { src: "updated_images/bad_dog/Bad-Dog_Music_Video_5.mp4", type: "video", location: "baddoglocation3", date: "baddogimagedate3", icons: ["icons/X.png"] },
            { src: "updated_images/bad_dog/Bad-Dog_News_Loved-by-many.mp4", type: "video", location: "baddoglocation4", date: "baddogimagedate4", icons: ["icons/insta.png"] }
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
        const imageToTextSearchButton = document.getElementById('imageToTextSearchButton');
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
        this.credibility = parseInt(localStorage.getItem('credibility') || '0');
        this.popularity = parseInt(localStorage.getItem('popularity') || '0');
        this.updateDisplay();
    }

    updateCredibility(change, reason = '') {
        this.credibility = Math.min(200, Math.max(0, this.credibility + change));
        localStorage.setItem('credibility', this.credibility.toString());
        this.showChange('credibility', change, reason);
        this.updateDisplay();
    }

    updatePopularity(change, reason = '') {
        this.popularity = Math.min(200, Math.max(0, this.popularity + change));
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
        const credibilityProgress = document.getElementById('credibility-progress');
        const popularityProgress = document.getElementById('popularity-progress');

        if (credibilityElement) credibilityElement.textContent = this.credibility;
        if (popularityElement) popularityElement.textContent = this.popularity;

        // Using a reasonable max value for progress bars.
        const maxCred = 200;
        const maxPop = 200;

        if (credibilityProgress) {
            const percentage = Math.min(Math.max((this.credibility / maxCred) * 100, 0), 100);
            credibilityProgress.style.width = `${percentage}%`;
        }
        if (popularityProgress) {
            const percentage = Math.min(Math.max((this.popularity / maxPop) * 100, 0), 100);
            popularityProgress.style.width = `${percentage}%`;
        }
    }

    reset() {
        this.credibility = 0;
        this.popularity = 0;
        localStorage.removeItem('credibility');
        localStorage.removeItem('popularity');
        this.updateDisplay();
    }
}

const meterSystem = new MeterSystem();
meterSystem.reset();

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
    const completionProgress = document.getElementById('completion-progress');
    if (completionValue) {
        completionValue.textContent = `${correctDecisions}/${WIN_THRESHOLD}`;
    }
    if (completionProgress) {
        const percentage = Math.min((correctDecisions / WIN_THRESHOLD) * 100, 100);
        completionProgress.style.width = `${percentage}%`;
    }
}

function injectCustomStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .prominent-pagination {
            text-align: center;
            margin: 40px 0 20px 0;
        }
        .prominent-pagination .page-number {
            font-size: 1.2rem;
            margin: 0 8px;
            text-decoration: none;
            color: var(--primary-color, #1a0dab);
            padding: 8px 12px;
        }
        .prominent-pagination a.page-number:hover {
            text-decoration: underline;
        }
        .prominent-pagination .page-number.active {
            font-weight: bold;
            color: #000;
            cursor: default;
        }
    `;
    document.head.appendChild(style);
}

function init() {
            injectCustomStyles();

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

            imageToTextSearchButton.addEventListener('click', function() {
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

        // Update post icons
        const postIconsContainer = document.getElementById('postIcons');
        postIconsContainer.innerHTML = '';
        if (post.icons && Array.isArray(post.icons)) {
            post.icons.forEach(iconPath => {
                const iconDiv = document.createElement('div');
                iconDiv.className = 'post-icon';
                const iconImg = document.createElement('img');
                iconImg.src = iconPath;
                iconImg.alt = 'Icon';
                iconDiv.appendChild(iconImg);
                postIconsContainer.appendChild(iconDiv);
            });
        }

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

function processPost(status) {
    if (currentPostId) {
        const post = postsData.find(p => p.id === currentPostId);

        if (post && !post.processed) {
            // Check if user performed any fact-checking
            const performedTextSearch = post.performedTextSearch || false;
            const performedImageSearch = post.performedImageSearch || false;
            const hasPerformedFactChecking = performedTextSearch || performedImageSearch;

            if (!hasPerformedFactChecking) {
                showNoResearchPopup();
                return;
            }

            // Check if forced text search is required and not performed
            if (post.forceTextSearchAfterImage && !post.performedTextSearch) {
                showNoResearchPopup('forcedTextSearch');
                return;
            }

            // Determine if the user's decision is correct
            const userDecision = status === 'published'; // true if published, false if flagged
            const isCorrect = userDecision === post.correctAnswer;

            // Update post status
            post.processed = true;
            post.status = status;

            let credibilityChange, credibilityReason, popularityChange, popularityReason;

            // Apply penalties/rewards based on fact-checking and correctness
            if (isCorrect) {
                // Correct decision with fact-checking
                if (userDecision) {
                    credibilityChange = 8;
                    credibilityReason = '(correct: published true story)';
                    popularityChange = 7;
                    popularityReason = '(shared accurate info)';
                } else {
                    credibilityChange = 10;
                    credibilityReason = '(correct: flagged false story)';
                    popularityChange = 6;
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

function showNoResearchPopup(type = 'general') {
    let title = getLanguageText('researchFirst');
    let subtitle = getLanguageText('decisionPaused');
    let instruction = getLanguageText('researchInstruction');

    if (type === 'forcedTextSearch') {
        title = getLanguageText('insufficientResearch');
        subtitle = getLanguageText('imageSearchLackluster');
        instruction = getLanguageText('imageSearchLacklusterInstruction');
    }

    const popupHTML = `
        <div class="decision-popup-overlay" id="noResearchPopupOverlay">
            <div class="decision-popup">
                <div class="popup-header">
                    <h3>${title}</h3>
                </div>
                <div class="popup-content">
                    <div class="fact-check-warning">
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <line x1="12" y1="17" x2="12.01" y2="17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div class="warning-content">
                            <h5>${subtitle}</h5>
                            <p>${instruction}</p>
                        </div>
                    </div>
                     <div class="learning-tip">
                        <h5> ${getLanguageText('proTip')}</h5>
                        <p>${getLanguageText('evidenceRiskTip')}</p>
                    </div>
                </div>
                <div class="popup-actions">
                    <button class="action-btn primary" onclick="closeNoResearchPopup()">${getLanguageText('backToResearch')}</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function closeNoResearchPopup() {
    const popup = document.getElementById('noResearchPopupOverlay');
    if (popup) {
        popup.remove();
    }
}

function showDecisionFeedback(post, userDecision, isCorrect, hasPerformedFactChecking) {
    const decisionText = userDecision === 'published' ? getLanguageText('decisionPublish') : getLanguageText('decisionFlag');
    const decisionClass = isCorrect ? 'correct' : 'incorrect';
    const correctDecisionText = post.correctAnswer ? getLanguageText('decisionPublish') : getLanguageText('decisionFlag');

    // Generate explanation based on the post and correctness
    const explanation = generateDecisionExplanation(post, userDecision, isCorrect, hasPerformedFactChecking);

    const popupHTML = `
        <div class="decision-popup-overlay" id="decisionPopupOverlay">
            <div class="decision-popup">
                <div class="popup-header">
                    <h3>${getLanguageText('decisionComplete')}</h3>
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
                                ${isCorrect ? getLanguageText('correctDecision') : getLanguageText('incorrectDecision')}
                            </h4>
                            <p class="decision-details">${getLanguageText('youChoseTo')} <strong>${decisionText}</strong></p>
                            ${!isCorrect ? `<p class="correct-choice">${getLanguageText('correctChoiceWas')} <strong>${correctDecisionText}</strong></p>` : ''}
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
                        <h4>${getLanguageText('analysis')}</h4>
                        <div class="analysis-content">
                            ${explanation.reasoning}
                        </div>
                    
                        <div class="meter-impact">
                            <h5>${getLanguageText('impactOnMetrics')}</h5>
                            <div class="metric-changes">
                                <div class="metric-change credibility">
                                    <span class="metric-name">${getLanguageText('credibilityLabel')}</span>
                                    <span class="change-value ${explanation.credibilityChange > 0 ? 'positive' : 'negative'}">
                                        ${explanation.credibilityChange > 0 ? '+' : ''}${explanation.credibilityChange}
                                        ${explanation.credibilityReason}
                                    </span>
                                </div>
                                <div class="metric-change popularity">
                                    <span class="metric-name">${getLanguageText('popularityLabel')}</span>
                                    <span class="change-value ${explanation.popularityChange > 0 ? 'positive' : 'negative'}">
                                        ${explanation.popularityChange > 0 ? '+' : ''}${explanation.popularityChange}
                                        ${explanation.popularityReason}
                                    </span>
                                </div>
                            </div>
                        </div>
                    
                        ${!isCorrect || !hasPerformedFactChecking ? `
                            <div class="learning-tip">
                                <h5>💡 ${getLanguageText('learningTip')}</h5>
                                <p>${explanation.learningTip}</p>
                            </div>
                        ` : `
                            <div class="success-message">
                                <h5>🎯 ${getLanguageText('wellDone')}</h5>
                                <p>${getLanguageText('skillsImproving')}</p>
                            </div>
                        `}
                    </div>
                </div>
                <div class="popup-actions">
                    <button class="action-btn secondary" onclick="closeDecisionPopup(); loadPost(${currentPostId});">${getLanguageText('reviewAgain')}</button>
                    <button class="action-btn primary" onclick="closeDecisionPopupAndCheckWin()">${getLanguageText('continue')}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function generateDecisionExplanation(post, userDecision, isCorrect, hasPerformedFactChecking) {
    const userChosePublish = userDecision === 'published';

    // Build translation keys based on post id, correctness and action
    const correctness = isCorrect ? 'correct' : 'incorrect';
    const action = userChosePublish ? 'publish' : 'flag';

    const reasoningKey = `decisionReasoning_${post.id}_${correctness}_${action}`;
    const learningKey = `decisionLearningTip_${post.id}_${correctness}`;

    const explanation = {
        reasoning: getLanguageText(reasoningKey),
        learningTip: getLanguageText(learningKey)
    };

    // Calculate meter changes and add fact-checking context
    let credibilityChange, credibilityReason, popularityChange, popularityReason;
    let learningTip = explanation.learningTip;

    // Normal scoring with fact-checking performed
    if (isCorrect) {
        if (userChosePublish) {
            credibilityChange = 8;
            credibilityReason = '(correctly published true story)';
            popularityChange = 6;
            popularityReason = '(shared accurate information)';
        } else {
            credibilityChange = 10;
            credibilityReason = '(correctly flagged false story)';
            popularityChange = 5;
            popularityReason = '(prevented misinformation)';
        }
    } else {
        if (userChosePublish) {
            credibilityChange = -8;
            credibilityReason = '(incorrectly published false story)';
            popularityChange = -4;
            popularityReason = '(spread misinformation)';
        } else {
            credibilityChange = -5;
            credibilityReason = '(incorrectly flagged true story)';
            popularityChange = -3;
            popularityReason = '(suppressed accurate information)';
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

function goHome() {
    showPage(videoInstructionsPage);
    hideTopMenu();
}

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

function showTextSearchResults() {
    if (currentPostId) {
        const post = postsData.find(p => p.id === currentPostId);

        if (post && post.searchResults) {
            // Mark that text search was performed
            post.performedTextSearch = true;

            // Generate search results
            searchResults.innerHTML = '';

            // Add AI Summary
            const aiSummary = createAISummary(post);
            searchResults.appendChild(aiSummary);

            post.searchResults.forEach((result, index) => {
                const resultElement = document.createElement('div');
                resultElement.className = `search-result-item${result.isAd ? ' ad' : ''} clickable`;

                if (result.isAd) {
                    resultElement.dataset.adText = getLanguageText('advertisement');
                }

                let iconsHtml = '';
                if (result.icons && Array.isArray(result.icons)) {
                    iconsHtml = `<div class="search-result-icons">
                        ${result.icons.map(icon => `<div class="search-result-icon"><img src="${icon}" alt="Icon"></div>`).join('')}
                    </div>`;
                }

                let dateHtml = '';
                if (result.date) {
                    dateHtml = `<div class="search-result-date">${getLanguageText(result.date)}</div>`;
                }

                resultElement.innerHTML = `
                            <div class="search-result-header">
                                ${iconsHtml}
                                <h3>${translateKey(result.title)}</h3>
                            </div>
                            ${dateHtml}
                            <p>${translateKey(result.description)}</p>
                        `;

                // Make results clickable
                resultElement.addEventListener('click', function() {
                    showSearchResultPopup(result, index);
                });

                searchResults.appendChild(resultElement);
            });

            // Add pagination at the end of results
            const paginationContainer = document.createElement('div');
            paginationContainer.className = 'pagination-container prominent-pagination';

            let pagesHTML = '<span class="page-number active">1</span>';
            for (let i = 2; i <= 10; i++) {
                pagesHTML += `<a href="#" class="page-number">${i}</a>`;
            }
            paginationContainer.innerHTML = pagesHTML;
            searchResults.appendChild(paginationContainer);

            paginationContainer.querySelectorAll('a.page-number').forEach(pageLink => {
                pageLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    const post = postsData.find(p => p.id === currentPostId);
                    if (post && !post.clickedExtraPages) {
                        post.clickedExtraPages = true;
                        meterSystem.updateCredibility(2, '(thorough research)');
                    }
                    showSecondPagePopup();
                });
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

function showSecondPagePopup() {
    const popupHTML = `
        <div class="search-popup-overlay" id="searchPopupOverlay">
            <div class="search-popup">
                <div class="popup-header">
                    <h3>${getLanguageText('beyondFirstPageTitle')}</h3>
                    <button class="popup-close" onclick="closeSearchPopup()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="popup-content">
                    <div class="relevance-analysis">
                        <h4>${getLanguageText('relevanceAnalysis')}</h4>
                        <div class="reasoning-content neutral">
                            <p>${getLanguageText('beyondFirstPageP1')}</p><p>${getLanguageText('beyondFirstPageP2')}</p>
                        </div>
                    </div>
                </div>
                <div class="popup-actions">
                    <button class="action-btn primary" onclick="closeSearchPopup()">${getLanguageText('continueResearch')}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
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
            <h3>${getLanguageText('searchDecisionTitle')}</h3>
            <p>${getLanguageText('searchDecisionPrompt')}</p>
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
    // if (result.isAd) {
    //     meterSystem.updateCredibility(-3, '(clicked ad)');
    //     meterSystem.updatePopularity(-2, '(distraction)');
    // } else {
    //     meterSystem.updateCredibility(2, '(checked source)');
    //     meterSystem.updatePopularity(-1, '(research)');
    // }

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
                                <h4>${getLanguageText('relevanceAnalysis')}</h4>
                                <div class="reasoning-content ${result.isAd ? 'warning' : 'neutral'}">
                                    ${reasoning.text}
                                </div>
                                <div class="relevance-score">
                                    <span class="score-label">${getLanguageText('relevanceScore')}</span>
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
                                    <span>${getLanguageText('sponsoredResultWarning')}</span>
                                </div>
                            ` : ''}
                            ${evidenceLimitReached ? `
                                <div class="evidence-limit-warning">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                                        <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>${getLanguageText('evidenceLimitReached')} (${usedEvidenceCount}/${MAX_EVIDENCE_PER_STORY}). ${getLanguageText('qualityOverQuantity')}</span>
                                </div>
                            ` : `
                                <div class="evidence-counter">
                                    <span>${getLanguageText('evidenceUsed')} ${usedEvidenceCount}/${MAX_EVIDENCE_PER_STORY}</span>
                                </div>
                            `}
                        </div>
                        <div class="popup-actions">
                            <button class="action-btn secondary" onclick="closeSearchPopup()">${getLanguageText('close')}</button>
                            <button class="action-btn primary ${evidenceLimitReached ? 'disabled' : ''}" 
                                    onclick="markAsUsed(${index})" 
                                    ${evidenceLimitReached ? 'disabled' : ''}>
                                ${evidenceLimitReached ? getLanguageText('evidenceLimitReachedBtn') : getLanguageText('useAsEvidence')}
                            </button>
                        </div>
                    </div>
                </div>
            `;

    // Add popup to page
    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

function generateRelevanceReasoning(result, index) {
    const currentPost = postsData.find(p => p.id === currentPostId);

    if (result.isAd) {
        return {
            text: getLanguageText('relevanceReasoning_ad'),
            score: 2,
            scoreClass: 'low'
        };
    }

    // Generate different reasoning based on result position and content
    const reasoningOptions = [
        {
            text: getLanguageText('relevanceReasoning_1'),
            score: 8,
            scoreClass: 'high'
        },
        {
            text: getLanguageText('relevanceReasoning_2'),
            score: 7,
            scoreClass: 'medium-high'
        },
        {
            text: getLanguageText('relevanceReasoning_3'),
            score: 6,
            scoreClass: 'medium'
        },
        {
            text: getLanguageText('relevanceReasoning_4'),
            score: 4,
            scoreClass: 'medium-low'
        }
    ];

    // Select reasoning based on result position (first few are usually more relevant)
    const reasoningIndex = result.reasoningIndex !== undefined ? result.reasoningIndex :
        (index < 2 ? 0 : index < 4 ? 1 : Math.floor(Math.random() * 2) + 2);

    // Ensure the index is within bounds
    const safeIndex = Math.min(Math.max(reasoningIndex, 0), reasoningOptions.length - 1);

    return reasoningOptions[safeIndex];
}

function closeSearchPopup() {
    const popup = document.getElementById('searchPopupOverlay');
    if (popup) {
        popup.remove();
    }
}

function createAISummary(post) {
    const aiSummaryContainer = document.createElement('div');
    aiSummaryContainer.className = 'ai-summary-container';

    const summaryKey = `aiSummary_${post.id}`;
    const summaryText = getLanguageText(summaryKey);

    aiSummaryContainer.innerHTML = `
        <div class="ai-summary-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14.85 8.65L22 9.24L16.5 13.97L18.18 21L12 17.27L5.82 21L7.5 13.97L2 9.24L9.15 8.65L12 2Z" fill="currentColor"/>
            </svg>
            <h3>${getLanguageText('aiSummaryTitle')}</h3>
        </div>
        <div class="ai-summary-content">
            <p>${summaryText}</p>
        </div>
        <div class="ai-summary-links">
            <div class="ai-summary-link" onclick="showAISummaryCongratulations()">${getLanguageText('aiSummaryLink1')}</div>
            <div class="ai-summary-link" onclick="showAISummaryCongratulations()">${getLanguageText('aiSummaryLink2')}</div>
            <div class="ai-summary-link" onclick="showAISummaryCongratulations()">${getLanguageText('aiSummaryLink3')}</div>
            <div class="ai-summary-link" onclick="showAISummaryCongratulations()">${getLanguageText('aiSummaryLink4')}</div>
        </div>
        <div class="ai-summary-footer">
            <div class="ai-summary-actions">
                <button class="evidence-button-ai ${post.usedAISummaryAsEvidence ? 'used' : ''}" onclick="useAISummaryAsEvidence(${post.id})">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21V3M12 3L5 10M12 3L19 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>${getLanguageText('aiSummaryEvidenceButton')}</span>
                </button>
            </div>
            <div class="ai-summary-disclaimer">${getLanguageText('aiSummaryDisclaimer')}</div>
        </div>
    `;

    return aiSummaryContainer;
}

function useAISummaryAsEvidence(postId) {
    const post = postsData.find(p => p.id === postId);
    if (post && !post.usedAISummaryAsEvidence) {
        post.usedAISummaryAsEvidence = true;
        
        // Retract points
        meterSystem.updateCredibility(-5, '(relied on AI summary)');
        meterSystem.updatePopularity(-3, '(lazy research)');

        // Update UI
        const button = document.querySelector('.evidence-button-ai');
        if (button) {
            button.classList.add('used');
        }

        // Add as evidence (even if it's bad evidence)
        usedEvidenceCount++;
        post.usedEvidenceCount = usedEvidenceCount;

        // Show popup with warning moved inside
        const popupHTML = `
            <div class="search-popup-overlay" id="searchPopupOverlay">
                <div class="search-popup">
                    <div class="popup-header">
                        <h3>${getLanguageText('aiSummaryEvidencePopupTitle')}</h3>
                        <button class="popup-close" onclick="closeSearchPopup()">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    <div class="popup-content">
                        <div class="ai-summary-warning" style="margin-bottom: 20px;">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 9V11M12 15H12.01M5.07183 19H18.9282C20.4678 19 21.4299 17.3333 20.6601 16L13.7319 4C12.9621 2.66667 11.0379 2.66667 10.2681 4L3.33988 16C2.57006 17.3333 3.53224 19 5.07183 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>${getLanguageText('aiSummaryWarning')}</span>
                        </div>
                        <div class="reasoning-content warning">
                            <p>${getLanguageText('aiSummaryEvidenceUsedMessage')}</p>
                        </div>
                    </div>
                    <div class="popup-actions">
                        <button class="action-btn primary" onclick="closeSearchPopup()">${getLanguageText('continue')}</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', popupHTML);
    }
}

function showAISummaryCongratulations() {
    const popupHTML = `
        <div class="search-popup-overlay" id="searchPopupOverlay">
            <div class="search-popup">
                <div class="popup-header">
                    <h3>${getLanguageText('aiSummaryCongratulationsTitle')}</h3>
                    <button class="popup-close" onclick="closeSearchPopup()">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div class="popup-content">
                    <div class="reasoning-content verified">
                        <p>${getLanguageText('aiSummaryCongratulationsMessage')}</p>
                    </div>
                </div>
                <div class="popup-actions">
                    <button class="action-btn primary" onclick="closeSearchPopup()">${getLanguageText('continue')}</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);
}

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
                numberElement.textContent = `${getLanguageText('evidenceNumberPrefix')}${usedEvidenceCount}`;
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
                        <strong>${getLanguageText('evidenceCollectionComplete')}</strong>
                        <p>${getLanguageText('youHaveGathered')} ${MAX_EVIDENCE_PER_STORY} ${getLanguageText('piecesOfEvidence')}. ${getLanguageText('qualityFactChecking')}</p>
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
                
                let iconsHtml = '';
                if (image.icons && Array.isArray(image.icons)) {
                    iconsHtml = `<div class="image-icons">
                        ${image.icons.map(icon => `<div class="image-icon"><img src="${icon}" alt="Icon"></div>`).join('')}
                    </div>`;
                }

                let mediaHtml = '';
                if (image.type === 'video') {
                    mediaHtml = `
                        <video src="${image.src}" muted loop playsinline></video>
                        <div class="video-overlay">
                            <div class="play-icon">▶</div>
                        </div>
                    `;
                } else {
                    mediaHtml = `<img src="${image.src}" alt="Search result image">`;
                }

                imageElement.innerHTML = `
                    <div class="image-container">
                        ${mediaHtml}
                    </div>
                    <div class="image-info">
                        ${iconsHtml}
                        <div class="image-details">
                            <div class="image-date">${getLanguageText(image.date)}</div>
                            <div class="image-location">${getLanguageText(image.location)}</div>
                            
                        </div>
                    </div>
                `;

                imageElement.addEventListener('click', function() {
                    const video = this.querySelector('video');
                    if (video) {
                        if (video.paused) {
                            video.play();
                            this.querySelector('.video-overlay').style.display = 'none';
                        } else {
                            video.pause();
                            this.querySelector('.video-overlay').style.display = 'flex';
                        }
                    }
                    toggleImageSelection(this);
                });

                imageGrid.appendChild(imageElement);
            });

            // Show image search results page
            showPage(imageSearchResultsPage);

            // Update top menu
            updateTopMenu('imageSearch');

            // Handle forced text search
            const tipTrueButton = document.getElementById('tipTrueButton');
            const tipFalseButton = document.getElementById('tipFalseButton');
            const imageToTextSearchButton = document.getElementById('imageToTextSearchButton');

            tipTrueButton.style.display = 'inline-block';
            tipFalseButton.style.display = 'inline-block';
            imageToTextSearchButton.style.display = 'inline-block';
        }
    }
}

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

function showPage(page) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(p => {
                p.classList.remove('active');
            });
            
            // Show the requested page
            page.classList.add('active');
        }

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

function hideTopMenu() {
            topMenu.style.display = 'none';
        }

function updateTopMenu(context) {
            topMenu.style.display = 'block';
            postActionButtons.style.display = 'none';
            postStatusMessage.style.display = 'none';
            backButton.style.display = 'block';
        }

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

function getLanguageText(key) {
            return languageData[currentLanguage][key] || key;
        }

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

init();