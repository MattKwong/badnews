// console.log(window.location.href);

browser.runtime.onMessage.addListener(function(message) {
    console.log("listener added")
    hideNewsfeed();
});

hideNewsfeed();

function hideNewsfeed() {

    //console.log("HIDE NEWSFEED LOADED")

    var blockingCss = 
        `
        /* Remove Stories/Reels/Rooms - Desktop */
        [aria-label="stories tray"] {
            display: none !important;
        }
        
        /* Remove Main News Feed - Desktop */
        [role="feed"] {
            display: none !important;
        }

        /* Remove Watch Links */
        li > span > div > a[href="/watch/?ref=tab"] {
            display: none !important;
        }
        [href="https://www.facebook.com/watch/"] {
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