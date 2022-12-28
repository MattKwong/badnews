// console.log(window.location.href);

browser.runtime.onMessage.addListener(function(message) {
    console.log("listener added")
    hideNewsfeed();
});

hideNewsfeed();

function hideNewsfeed() {

    // console.log("HIDE NEWSFEED LOADED")

    var blockingCss = 
        `
        /* Remove Main Feed - Desktop */
        main > div > section {
            display: none !important;
        }

        /* Remove Explore Link - Desktop */
        a[href="/explore/"] {
            display: none !important;
        }

        /* Remove Reels Link - Desktop */
        a[href="/reels/videos/"] {
            display: none !important;
        }
        `;

    var style = document.createElement('style');
    style.setAttribute('id', 'badnews-style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(blockingCss));
    document.head.appendChild(style);

    // console.log(style);

};