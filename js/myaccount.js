var mql = window.matchMedia("(max-width: 768px)");
function tempNotification() {
    let e = document.createElement("div"),
        t = document.createElement("p");
    (t.innerHTML =
        'Please complete our <a href="https://engagerenfrewshire.uk.engagementhq.com/customer-engagement-survey/survey_tools/customer-engagement-survey" target="_blank"> survey <span class="glyphicon glyphicon-new-window"></span></a> to help us improve our service.'),
        e.setAttribute("class", "tempNote"),
        t.setAttribute("class", "tempNote__copy");
    let o = document.getElementById("toolbar"),
        n = o.parentNode;
    var i = sessionStorage.getItem("tempNotification");
    null == i && (sessionStorage.setItem("tempNotification", "enabled"), (i = "enabled")), "enabled" === sessionStorage.getItem("tempNotification") && (e.appendChild(t), n.insertBefore(e, o));
}
function footerDate() {
    var e = document.getElementById("js_footer-year"),
        t = new Date().getFullYear();
    e.innerHTML = `${t}`;
}
function serviceCategory() {
    var e = document.getElementById("MyServices");
    e &&
        window.innerWidth <= 767 &&
        e.addEventListener("load", function () {
            if (e.contentWindow.document.querySelector("li.leaf")) {
                let t = e.contentWindow.document.querySelectorAll("li.leaf");
                for (let o = 0; o < t.length; o++)
                    t[o].onclick = function () {
                        console.log("leaf " + o), t[o].scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
                    };
            }
        });
}
function searchBarIcon() {
    var e = document.getElementById("MyServices");
    e &&
        e.addEventListener("load", function () {
            e.contentWindow.document.querySelector('.search-form .input-group-btn > button.btn-search[type="submit"]').innerHTML = '<i class="fa fa-search" aria-hidden="true"></i> <span class="hidden-xs">Search</span>';
        });
}
function pageRedirect() {
    window.addEventListener(
        "load",
        function () {
            let e = window.location.protocol + "//",
                t = window.location.hostname,
                o = window.location.href;
            console.log(o);
            let n = e + t + "/wrong-url";
            console.log(n);
            let i = e + t + "/correct-url";
            console.log(i), o == n && window.location.assign(i);
        },
        !1
    );
}
function sidebarHeight() {
    if (document.querySelector(".homepage")) {
        let e = document.querySelector("main.col-md-8"),
            t = document.querySelector("aside.col-md-4"),
            o = e.offsetHeight;
        t.style.height = o + "px";
    }
}
function mobileEmailDisplay() {
    if (!0 == mql.matches && (console.log(mql.matches), document.querySelector(".homepage--authorised"))) {
        let e = document.querySelector(".profile__email");
        e.innerHTML = e.innerHTML.replace(/[@]/, "<br>@");
    }
}
function faqDetails() {
    let e = document.getElementById("FAQ");
    e &&
        e.addEventListener("load", function () {
            Array.from(e.contentWindow.document.getElementsByTagName("details")).forEach((e) => {
                e.removeAttribute("open");
            });
        });
}
window.addEventListener("DOMContentLoaded", (e) => {
    tempNotification();
}),
    mql.addEventListener("change", sidebarHeight),
    mql.addEventListener("change", mobileEmailDisplay),
    window.addEventListener("DOMContentLoaded", (e) => {
        sidebarHeight(), mobileEmailDisplay(), searchBarIcon(), serviceCategory(), faqDetails(), footerDate();
    });
const ajax = new XMLHttpRequest();
ajax.open("GET", "https://fs-filestore-eu.s3-eu-west-1.amazonaws.com/renfrewshire/images/svgs/icon-sprite.svg", !0),
    ajax.send(),
    (ajax.onload = function () {
        let e = document.createElement("div");
        (e.className = "svgSprite"), (e.innerHTML = ajax.responseText), document.body.insertBefore(e, document.body.childNodes[0]);
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
                var e = document.createElement("script");
                (e.innerHTML =
                    "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2377777,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"),
                    document.head.appendChild(e);
                var t = document.createElement("script"),
                    o = document.createElement("noscript"),
                    n = document.createElement("iframe");
                (t.innerHTML =
                    "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','G-ZR4JN9K9F4');"),
                    n.setAttribute("height", "0"),
                    n.setAttribute("width", "0"),
                    n.setAttribute("style", "display:none;visibility:hidden"),
                    (n.src = "https://www.googletagmanager.com/gtag/js?id=G-ZR4JN9K9F4"),
                    o.appendChild(n),
                    document.head.appendChild(t),
                    document.body.appendChild(o);
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
CookieControl.load(config);
