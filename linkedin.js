// console.log(window.location.href);

browser.runtime.onMessage.addListener(function(message) {
    console.log("listener added")
    hideNewsfeed();
});

hideNewsfeed();

function hideNewsfeed() {

    console.log("HIDE NEWSFEED LOADED")

    var blockingCss = 
        `
        /* Remove News Feed - Desktop */
        [data-finite-scroll-hotkey-context="FEED"] {
            display: none !important;
        }

        /* Remove LinkedIn News - Desktop */
        [aria-label="LinkedIn News"] {
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