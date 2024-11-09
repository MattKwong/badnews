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
        /* Remove Shorts Link - Desktop */
        ytd-guide-entry-renderer > [title="Shorts"] {
            display: none !important;
        }
        [aria-label="Shorts"] {
            display:none !important;
        }

        /* Remove Main Newsfeeed - Desktop */
        [page-subtype="home"] #primary {
            display: none !important;
        }

        /* Recommended on Video Pages - Desktop */
        #secondary .ytd-watch-flexy {
            display: none !important;
        }
        .ytd-watch-next-secondary-results-renderer {
            display: none !important;
        }

        /* Remove comments on Video Pages - Desktop */
        .ytd-comments {
            display: none !important;
        }
        
        /* Remove shorts from Subscriptions Page - Desktop */
        [is-slim-media=""] {
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