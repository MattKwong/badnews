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
        [class="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh x1uhb9sk x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x6s0dn4 x1oa3qoh x1nhvcw1"] {
            display: none !important;
        }

        /* Remove Friends Reels Bar - Desktop */
        [class="x1qjc9v5 x78zum5 x1q0g3np xl56j7k xh8yej3"] {
            display: none !important;
        }

        /* Remove Explore Link - Desktop */
        a[href="/explore/"] {
            display: none !important;
        }

        /* Remove Reels Link - Desktop */
        a[href="/reels/"] {
            display: none !important;
        }

        /* Remove Threads Link - Desktop */
        a[href^="https://www.threads.net/"] {
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