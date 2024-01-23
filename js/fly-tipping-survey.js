var mql = window.matchMedia("(max-width: 768px)");


function linkJS(){
    
        let newScript = document.createElement('script');
        newScript.type = "text/javascript";
        //v 4.26 used as error occuring in current 4.27 version
        newScript.src = "https://js.arcgis.com/4.26/";
        console.log('linkJS');
        document.getElementsByTagName('head').item(0).appendChild(newScript);
            newScript.onload = function() {
                console.log('newScript load');
                document.getElementById('fillform-frame-1').addEventListener("load", function() {
                    console.log('iframe load');
                    insertMap();
                })
            }
        
    }
    
    function insertMap(){
        console.log('start');
        // dojo.require built into arcgis
        require(["esri/views/MapView", "esri/WebMap", "esri/Map"], (MapView, WebMap) => {
        const webmap = new WebMap({
            portalItem: {
            // autocasts as new PortalItem()
            id: "f2e9b762544945f390ca4ac3671cfa72"
            }
        });
    
        let node = document.getElementById('fillform-frame-1').contentWindow.document.getElementById('viewDiv');
        const view = new MapView({
            map: webmap,
            container: node
        });
        });
        console.log('end');
    }

function pollReplacement() {
    for (const h5 of document.querySelectorAll('h5')) {
        if (h5.textContent.includes('We use customer comments')){
            for (const button of document.querySelectorAll('button')) {
                if (typeof button.dataset.serviceid != "undefined") {
                    if (button.dataset.serviceid.includes('AF-Process-c0f6203b-708a-40b0-94ca-494e4ac354f5')){
                        h5.innerHTML = "Please consider completing our <a href='https://engagerenfrewshire.uk.engagementhq.com/flytipping-online-reporting-survey/survey_tools/flytipping-online-form'>survey <span class='glyphicon glyphicon-new-window'></span></a>" + "<br>" + h5.innerHTML;
                    }
                }
            }
        }
    }
}

// Unfinished function for dynamic resizing of iframe, currently returns incorrect height values 
// function resizeIframe() {
//     var iframe = document.getElementById('quickPoll');
//     iframe.style.height = 'auto';
//     iframe.style.height = iframe.contentWindow.document.body.scrollHeight*2 + "px";
//     console.log("!!!!!!!" + iframe.ownerDocument.body.offsetHeight);
//     console.log("!!!!!!!" + iframe.contentWindow.document.body.scrollHeight);
// }


function tempNotification() {
    const divElm = document.createElement("div");
    const parElm = document.createElement("p");
    parElm.innerHTML = 'Please complete our <a href="https://engagerenfrewshire.uk.engagementhq.com/customer-engagement-survey/survey_tools/customer-engagement-survey" target="_blank"> survey <span class="glyphicon glyphicon-new-window"></span></a> to help us improve our service.';

    divElm.setAttribute("class", "tempNote");

    parElm.setAttribute("class", "tempNote__copy");

    let toolbar = document.getElementById("toolbar");
    let parent = toolbar.parentNode;

    // Get and check existance of session storage for temporary notification. Set if required.
    var tempNotification = sessionStorage.getItem("tempNotification");
    if (tempNotification === undefined || tempNotification === null) {
        sessionStorage.setItem("tempNotification", "enabled");
        tempNotification = "enabled";
    }

    if (sessionStorage.getItem("tempNotification") === "enabled") {
        // add paragraph element into div element.
        divElm.appendChild(parElm);
        // add div element in before toolbar
        parent.insertBefore(divElm, toolbar);

        // find close button from temporary notification.
        /*let closeBtn = document.getElementById("tempNoteClose");
        closeBtn.onclick = function () {
            // add class to hide element when clicked.
            document.querySelector(".tempNote").classList.add("tempNote--is-hidden");
            // update session storage on click to stop notification from displaying again during session.
            sessionStorage.setItem("tempNotification", "disabled");
        };*/
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    //tempNotification();
    pollReplacement();
    linkJS();
    //resizeIframe()
});

function footerDate() {
    var a = document.getElementById("js_footer-year"),
        b = new Date().getFullYear();
    a.innerHTML = `${b}`;
}
function serviceCategory() {
    var a = document.getElementById("MyServices");
    a &&
        window.innerWidth <= 767 &&
        a.addEventListener("load", function () {
            if (a.contentWindow.document.querySelector("li.leaf")) {
                let c = a.contentWindow.document.querySelectorAll("li.leaf");
                for (let b = 0; b < c.length; b++)
                    c[b].onclick = function () {
                        console.log("leaf " + b), c[b].scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
                    };
            }
        });
}
function searchBarIcon() {
    var a = document.getElementById("MyServices");
    a &&
        a.addEventListener("load", function () {
            a.contentWindow.document.querySelector('.search-form .input-group-btn > button.btn-search[type="submit"]').innerHTML = '<i class="fa fa-search" aria-hidden="true"></i> <span class="hidden-xs">Search</span>';
        });
}
function pageRedirect() {
    window.addEventListener(
        "load",
        function () {
            let a = window.location.protocol + "//",
                b = window.location.hostname,
                c = window.location.href;
            console.log(c);
            let d = a + b + "/wrong-url";
            console.log(d);
            let e = a + b + "/correct-url";
            console.log(e), c == d && window.location.assign(e);
        },
        !1
    );
}
function sidebarHeight() {
    if (document.querySelector(".homepage")) {
        let a = document.querySelector("main.col-md-8"),
            b = document.querySelector("aside.col-md-4"),
            c = a.offsetHeight;
        b.style.height = c + "px";
    }
}
function mobileEmailDisplay() {
    if (!0 == mql.matches && (console.log(mql.matches), document.querySelector(".homepage--authorised"))) {
        let a = document.querySelector(".profile__email");
        a.innerHTML = a.innerHTML.replace(/[@]/, "<br>@");
    }
}
function faqDetails() {
    let a = document.getElementById("FAQ");
    a &&
        a.addEventListener("load", function () {
            let b = a.contentWindow.document.getElementsByTagName("details");
            Array.from(b).forEach((a) => {
                a.removeAttribute("open");
            });
        });
}
mql.addEventListener("change", sidebarHeight),
    mql.addEventListener("change", mobileEmailDisplay),
    window.addEventListener("DOMContentLoaded", (a) => {
        sidebarHeight(), mobileEmailDisplay(), searchBarIcon(), serviceCategory(), faqDetails(), footerDate();
    });
const ajax = new XMLHttpRequest();
ajax.open("GET", "https://fs-filestore-eu.s3-eu-west-1.amazonaws.com/renfrewshire/images/svgs/icon-sprite.svg", !0),
    ajax.send(),
    (ajax.onload = function () {
        let a = document.createElement("div");
        (a.className = "svgSprite"), (a.innerHTML = ajax.responseText), document.body.insertBefore(a, document.body.childNodes[0]);
    });
let menu = document.getElementById("navDropdownToggle");
!1 == mql.matches && (menu.innerText = "Main Menu"),
    $(document).ready(function () {
        $(".ma-item").matchHeight();
    });
var config = {
    apiKey: "eb2615de678c365ca1772885dbff11df377d77db",
    product: "PRO_MULTISITE",
    consentCookieExpiry: 30,
    necessaryCookies: ["localtime", "AWSELBCORS", "AWSELB", "APP_LANG"],
    initialState: "notify",
    rejectButton: !1,
    notifyDismissButton: !1,
    settingsStyle: "button",
    position: "left",
    theme: "dark",
    layout: "slideout",
    text: {
        title: "Cookies on MyAccount",
        intro: "Cookies are files saved on your phone, tablet or computer when you visit a website. We use cookies to store information about how you use the council website, such as the pages you visit.",
        accept: "Accept Recommended Settings",
        acceptSettings: "I Accept Recommended Settings",
        settings: "Configure Settings",
        notifyTitle: "Website cookies enhance your user experience.",
        notifyIntro: "We use cookies to collect information about how you use MyAccount. We use this information to make the website work as well as possible and improve your local government services.",
        necessaryTitle: "Necessary Cookies",
        necessaryIntro: "Necessary cookies enable core functionality. The website cannot function properly without these cookies, and can only be disabled by changing your browser preferences.",
        thirdPartyTitle: "Warning: Some cookies require your attention",
        thirdPartyDescription: "Consent for some third party cookies can not be automatically revoked. Please follow the link below if you want to opt out of them or read more information regarding your privacy and these services.",
    },
    optionalCookies: [
        {
            name: "analytics",
            label: "Analytical and Performance Cookies",
            description: "Analytical cookies help us to improve our website by collecting and reporting information on its usage.",
            recommendedState: !0,
            cookies: [
                "_ga",
                "_gid",
                "_gat",
                "__utma",
                "__utmt",
                "__utmb",
                "__utmc",
                "__utmz",
                "__utmv",
                "_hjClosedSurveyInvites",
                "_hjDonePolls",
                "_hjMinimizedPolls",
                "_hjShownFeedbackMessage",
                "_hjSessionTooLarge",
                "_hjid",
                "_hjRecordingLastActivity",
                "_hjTLDTest",
                "_hjUserAttributesHash",
                "_hjCachedUserAttributes",
                "_hjLocalStorageTest",
                "_hjIncludedInPageviewSample",
                "_hjIncludedInSessionSample",
                "_hjAbsoluteSessionInProgress",
                "_hjFirstSeen",
                "_hjViewportId",
                "_hjRecordingEnabled",
            ],
            onAccept: function () {
                var b = document.createElement("script");
                (b.innerHTML =
                    "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2377777,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"),
                    document.head.appendChild(b);
                var c = document.createElement("script"),
                    d = document.createElement("noscript"),
                    a = document.createElement("iframe");
                (c.innerHTML =
                    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-ZR4JN9K9F4');"),
                    a.setAttribute("height", "0"),
                    a.setAttribute("width", "0"),
                    a.setAttribute("style", "display:none;visibility:hidden"),
                    (a.src = "https://www.googletagmanager.com/gtag/js?id=G-ZR4JN9K9F4"),
                    d.appendChild(a),
                    document.head.appendChild(c),
                    document.body.appendChild(d);
            },
            onRevoke: function () {},
            thirdPartyCookies: [{ name: "Hotjar", optOutLink: "https://www.hotjar.com/legal/policies/do-not-track/" }],
        },
        {
            name: "marketing",
            label: "Communication and Marketing Cookies",
            description: "These cookies may be set by third party websites and do things like measure how you view YouTube videos or Twitter feeds that are on the website.",
            recommendedState: !0,
            cookies: ["fr", "__Secure-3PAPISID", "__Secure-APISID", "GPS", "PREF", "adcloud", "mbox", "AMCV_ED8D65E655FAC7797F000101%40AdobeOrg", "AAMC_esri_0", "s_dslv", "iv", "esri_gdpr"],
            thirdPartyCookies: [
                { name: "Esri UK", optOutLink: "https://www.esriuk.com/en-gb/legal/uk/notices/privacy" },
                { name: "Facebook", optOutLink: "https://www.facebook.com/about/privacy/" },
                { name: "Google Marketing/Advertising", optOutLink: "https://adssettings.google.com/" },
                { name: "Twitter Privacy Policy", optOutLink: "https://twitter.com/en/privacy" },
            ],
        },
    ],
    statement: { description: "For more information visit our", name: "Privacy Statement", url: "https://myaccount.renfrewshire.gov.uk/privacypolicy", updated: "13/05/2021" },
};
CookieControl.load(config)