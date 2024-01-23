/* INLINE JS PULLED OUT OF SITE TEMPLATES
===========================================
*/

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function () {
    var prefix = "ch";
    var prefix2 = "fav";
    var i;
    var sequence = "7111100000000";
    var closers = ["notipp", "services", "accounts", "requests", "profile", "help", "news", "feedback"];
    if (localStorage.getItem("{ucrn}-" + closers[0]) === "none" || localStorage.getItem("{ucrn}-" + closers[1]) === "none" || localStorage.getItem("{ucrn}-" + closers[2]) === "none" || localStorage.getItem("{ucrn}-" + closers[3]) === "none" || localStorage.getItem("{ucrn}-" + closers[4]) === "none" || localStorage.getItem("{ucrn}-" + closers[5]) === "none" || localStorage.getItem("{ucrn}-" + closers[6]) === "none" || localStorage.getItem("{ucrn}-" + closers[7]) === "none" || localStorage.getItem("{ucrn}-" + closers[8]) === "none" || localStorage.getItem("{ucrn}-popten") !== null || localStorage.getItem("{ucrn}-popular") !== null) {
        if (localStorage.getItem("{ucrn}-popular") === "collapsed") {
            if ($("#popular").hasClass("in")) {
                $("#popular").collapse("hide");
                $(".btnpopco").html('<span class="glyphicon glyphicon-plus"></span> Expand');
            }
        } else if (localStorage.getItem("{ucrn}-popular") === "none") {
            $("#allpop").addClass("vishide");
        }
        for (i = 0; i < closers.length; i++) {
            if (localStorage.getItem("{ucrn}-" + closers[i]) === "none") {
                $("#" + closers[i]).addClass("vishide");
            }
        }
        if (localStorage.getItem("{ucrn}-popten") !== null) {
            sequence = localStorage.getItem("{ucrn}-popten");
            if (sequence === "block") {
                sequence = "7111100000000";
            }
        }
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myObj = JSON.parse(this.responseText);
                if (myObj !== "null") {
                    var sequence = "7111100000000";
                    var prefix = "ch";
                    var prefix2 = "fav";
                    if (typeof myObj.popten === "undefined") {
                        sequence = "7111100000000";
                    } else {
                        if (myObj.popten === "block") {
                            sequence = "7111100000000";
                        } else {
                            sequence = myObj.popten;
                        }
                        for (i = 1; i <= 10; i++) {
                            if ($("#" + prefix2 + i).length) {
                                var seq = sequence.toString();
                                var res = seq.substr(i, 1);
                                if (res == 0) {
                                    $("#" + prefix + i).prop("checked", false);
                                    $("#" + prefix2 + i).addClass("vishide");
                                } else if (res == 1) {
                                    $("#" + prefix + i).prop("checked", true);
                                    $("#" + prefix2 + i).removeClass("vishide");
                                }
                            }
                        }
                    }
                    localStorage.setItem("{ucrn}-popten", sequence);

                    if (myObj.popular === "none") {
                        $("#allpop").addClass("vishide");
                    } else if (myObj.popular === "collapsed") {
                        if ($("#popular").hasClass("in")) {
                            $("#popular").collapse("hide");
                            $(".btnpopco").html('<span class="glyphicon glyphicon-plus"></span> Expand');
                        }
                    } else {
                        document.getElementById("allpop").classList.remove("vishide");
                    }
                    for (i = 0; i < closers.length; i++) {
                        if (myObj[closers[i]] === "none") {
                            document.getElementById(closers[i]).classList.add("vishide");
                        } else {
                            document.getElementById(closers[i]).classList.remove("vishide");
                        }
                        localStorage.setItem("{ucrn}-" + closers[i], myObj[closers[i]]);
                    }
                    localStorage.setItem("{ucrn}-popular", myObj.popular);
                }
            }
        };
        xmlhttp.open("GET", "https://renfrewshire.ga/artkft.php?co=101&who={ucrn}", true);
        xmlhttp.send();
    }
    if (localStorage.getItem("{ucrn}-popten") !== null) {
        sequence = localStorage.getItem("{ucrn}-popten");
    }
    for (i = 1; i <= 10; i++) {
        if ($("#" + prefix2 + i).length) {
            var res = sequence.substr(i, 1);
            if (res == 0) {
                $("#" + prefix + i).prop("checked", false);
                $("#" + prefix2 + i).addClass("vishide");
            } else if (res == 1) {
                $("#" + prefix + i).prop("checked", true);
                $("#" + prefix2 + i).removeClass("vishide");
            }
        }
    }

    if (localStorage.getItem("{ucrn}-survey") === "none") {
        $("#surv").addClass("vishide");
    } else {
        $.get("https://renfrewshire.ga/artkft.php?co=101&who={ucrn}", function (data) {
            if (data == "none") {
                $("#surv").addClass("vishide");
                if (typeof Storage !== "undefined") {
                    // Store
                    localStorage.setItem("{ucrn}-survey", "none");
                }
            } else if (localStorage.getItem("{ucrn}-survey") !== "none") {
                $("#surv").removeClass("vishide");
            }
        });
    }

    $("#popsettings").click(function () {
        $("#popset,#popsettings2").removeClass("vishide");
        $("#popsettings,#seeall").addClass("vishide");
    });

    $("#popsettings2").click(function () {
        $("#popset,#popsettings2").addClass("vishide");
        $("#popsettings,#seeall").removeClass("vishide");
        var seko = "7";
        var prefix = "ch";
        for (i = 1; i <= 10; i++) {
            if ($("#" + prefix2 + i).length) {
                if ($("#" + prefix + i).is(":checked")) {
                    seko = seko + "1";
                } else {
                    seko = seko + "0";
                }
            }
        }
        if (typeof Storage !== "undefined") {
            localStorage.setItem("{ucrn}-popten", seko);
        }
    });

    $(".clozme").click(function () {
        var getValue = $(this).attr("data-target");
        $("#" + getValue).addClass("vishide");

        if (getValue === "allpop") {
            getValue = "popular";
        }
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
        xmlhttp.open("POST", "https://renfrewshire.ga/artkft.php?co=777&who={ucrn}&c=0&ktore=" + getValue, true);
        xmlhttp.send();
        // Check browser support
        if (typeof Storage !== "undefined") {
            // Store
            localStorage.setItem("{ucrn}-" + getValue, "none");
        }
    });

    var answer = 0;

    $(".clozsur").click(function () {
        var getValue = $(this).attr("data-target");
        $("#" + getValue).addClass("vishide");
        $(".dobrze").removeClass("vishide");

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
        xmlhttp.open("POST", "https://renfrewshire.ga/krft.php?co=777&who={ucrn}&a=7&ktore=answer", true);
        xmlhttp.send();
        answer = 7;
        // Check browser support
        if (typeof Storage !== "undefined") {
            // Store
            localStorage.setItem("{ucrn}-survey", "none");
        }
    });

    $(".clozsuro").click(function () {
        var getValue = $(this).attr("data-target");
        $("#" + getValue).addClass("vishide");
        $(".dobrze").removeClass("vishide");

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
        xmlhttp.open("POST", "https://renfrewshire.ga/krft.php?co=777&who={ucrn}&a=6&ktore=answer", true);
        xmlhttp.send();
        answer = 6;

        // Check browser support
        if (typeof Storage !== "undefined") {
            // Store
            localStorage.setItem("{ucrn}-survey", "none");
        }
    });

    $(".clozsurdo").click(function () {
        var getValue = $(this).attr("data-target");
        $("#" + getValue).addClass("vishide");
        $(".zle").removeClass("vishide");

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
        xmlhttp.open("POST", "https://renfrewshire.ga/krft.php?co=777&who={ucrn}&a=0&ktore=answer", true);
        xmlhttp.send();

        // Check browser support
        if (typeof Storage !== "undefined") {
            // Store
            localStorage.setItem("{ucrn}-survey", "none");
        }
    });

    $(".clozsurd").click(function () {
        var getValue = $(this).attr("data-target");
        $("#" + getValue).addClass("vishide");
        $("#surv").addClass("vishide");

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
            }
        };
        xmlhttp.open("POST", "https://renfrewshire.ga/artkft.php?co=777&who={ucrn}&a=8" + answer + "&ktore=answer", true);
        xmlhttp.send();
    });

    $("#popular").on("hide.bs.collapse", function () {
        $(".btnpopco").html('<span class="glyphicon glyphicon-plus"></span> Expand');
        if (this.id) {
            localStorage["{ucrn}-" + this.id] = "collapsed";
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                }
            };
            xmlhttp.open("POST", "https://renfrewshire.ga/artkft.php?co=777&who={ucrn}&c=6&ktore=popular", true);
            xmlhttp.send();
        }
    });

    $(".single-checkbox").on("change", function () {
        var prefix = "ch";
        var prefix2 = "fav";
        var i;
        if ($(".single-checkbox:checked").length <= 4) {
            for (i = 1; i <= 10; i++) {
                if ($("#" + prefix2 + i).length) {
                    if ($("#" + prefix + i).is(":checked")) {
                        $("#" + prefix2 + i).removeClass("vishide");
                    } else {
                        $("#" + prefix2 + i).addClass("vishide");
                    }
                }
            }
        } else {
            this.checked = false;
            Command: toastr["warning"]("Hide one of the already displayed services first.", "Choose no more than 4 services at once");
            toastr.options = {
                closeButton: true,
                debug: false,
                newestOnTop: false,
                progressBar: true,
                positionClass: "toast-bottom-full-width",
                preventDuplicates: true,
                onclick: null,
                showDuration: "300",
                hideDuration: "1000",
                timeOut: "3000",
                extendedTimeOut: "1000",
                showEasing: "swing",
                hideEasing: "linear",
                showMethod: "fadeIn",
                hideMethod: "fadeOut",
            };
        }
    });
});

/* NEW JS SITE UPDATES BELOW
=================================
*/

function tempNotification() {
    const divElm = document.createElement("div");
    const parElm = document.createElement("p");
    parElm.innerHTML = 'We\'ve given the look and feel of MyAccount Forms an update. You may need to clear your <a href="#" target="_blank"> browser cache <span class="glyphicon glyphicon-new-window"></span></a> to see these changes. <button id="tempNoteClose">Click to dismiss<span class="glyphicon glyphicon-remove"></span></button>';

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
    }

    // find close button from temporary notification.
    let closeBtn = document.getElementById("tempNoteClose");
    closeBtn.onclick = function () {
        // add class to hide element when clicked.
        document.querySelector(".tempNote").classList.add("tempNote--is-hidden");
        // update session storage on click to stop notification from displaying again during session.
        sessionStorage.setItem("tempNotification", "disabled");
    };
}

/* === Emergency Redirect Option === */
function pageRedirect() {
    console.warn("Emergency redirect is curently running on page loads, remove if not currently required.");
    window.addEventListener(
        "load",
        function () {
            // find current url
            var currentURL = window.location.href;
            // check against stored wrong url
            var wrongURL = "https://myaccount.renfrewshire.gov.uk/service/apply for non domestic rates relief";
            if (currentURL == wrongURL) {
                // if a match move page to correct url
                var correctURL = "https://myaccount.renfrewshire.gov.uk/service/apply_for_non_domestic_rates_relief";
                window.location.assign(correctURL);
            }
        },
        false
    );
}

// MyAccount Footer Date
function footerDate() {
    var footerYear = document.getElementById("js_footer-year");
    var currentYear = new Date().getFullYear();

    footerYear.innerHTML = `${currentYear}`;
}

// Center Services Category
function serviceCategory() {
    // find MyServices iFrame
    var iframeCont = document.getElementById("MyServices");
    // check it's on the page
    if (iframeCont && window.innerWidth <= 767) {
        // check iframe is loaded
        iframeCont.addEventListener("load", function () {
            // check for leaf element - make sure we're on the right page, All Services
            var leaf = iframeCont.contentWindow.document.querySelector("li.leaf");

            if (leaf) {
                // find the category buttons
                const category = iframeCont.contentWindow.document.querySelectorAll("li.leaf");
                // loop over all category buttons
                for (let i = 0; i < category.length; i++) {
                    (function () {
                        category[i].onclick = function () {
                            console.log("leaf" + " " + i);
                            category[i].scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
                        };
                    })(i);
                }
            }
        });
    }
}

// Add Search Icon to All Services Serchbar
function searchBarIcon() {
    // find iFrame
    var iframeCont = document.getElementById("MyServices");
    // check it's on the page e.g. Services
    if (iframeCont) {
        // check iframe is loaded
        iframeCont.addEventListener("load", function () {
            // find search button in iFrame
            var searchButton = iframeCont.contentWindow.document.querySelector('.search-form .input-group-btn > button.btn-search[type="submit"]');
            // add icon
            searchButton.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>' + " " + '<span class="hidden-xs">Search</span>';
        });
    }
}

/* SVG Sprite */
function svgSpriteLoad() {
    const ajax = new XMLHttpRequest();
    ajax.open("GET", "https://fs-filestore-eu.s3-eu-west-1.amazonaws.com/renfrewshire/images/svgs/icon-sprite.svg", true);
    ajax.send();
    ajax.onload = function () {
        const div = document.createElement("div");
        div.className = "svgSprite";
        div.innerHTML = ajax.responseText;
        document.body.insertBefore(div, document.body.childNodes[0]);
    };
}

/* Sidebar Height */
function sidebarHeight() {
    // find the page elements
    const main = document.querySelector("main.col-sm-8");
    const sidebar = document.querySelector("aside.col-sm-4");

    // get the height of the main section
    let mainHeight = main.offsetHeight;

    // Add main height value onto sidebar
    sidebar.style.height = mainHeight + "px";
}

// Initiate Functions
window.addEventListener("DOMContentLoaded", (event) => {
    // tempNotification(); // Update notification copy in function above & uncomment to use.
    //pageRedirect(); // Update required hard checked urls in function above to use.
    svgSpriteLoad();
    sidebarHeight();
    serviceCategory();
    searchBarIcon();
    footerDate();
});

// matchHeight JQuery plugin
$(document).ready(function () {
    $(".ma-item").matchHeight();
});

// MyAccount CIVIC Cookie Monitor
var config = {
    apiKey: "eb2615de678c365ca1772885dbff11df377d77db",
    product: "PRO_MULTISITE",
    consentCookieExpiry: 30,
    necessaryCookies: ["localtime", "AWSELBCORS", "AWSELB", "APP_LANG"],
    initialState: "notify",
    rejectButton: false,
    notifyDismissButton: false,
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
        thirdPartyDescription: "Consent for some third party cookies can not be automatically revoked. Please follow the link below if you want to opt out of them.",
    },
    optionalCookies: [
        {
            name: "analytics",
            label: "Analytical and Performance Cookies",
            description: "Analytical cookies help us to improve our website by collecting and reporting information on its usage.",
            recommendedState: true,
            cookies: ["_ga", "_gid", "_gat", "__utma", "__utmt", "__utmb", "__utmc", "__utmz", "__utmv", "_hjClosedSurveyInvites", "_hjDonePolls", "_hjMinimizedPolls", "_hjShownFeedbackMessage", "_hjSessionTooLarge", "_hjid", "_hjRecordingLastActivity", "_hjTLDTest", "_hjUserAttributesHash", "_hjCachedUserAttributes", "_hjLocalStorageTest", "_hjIncludedInPageviewSample", "_hjIncludedInSessionSample", "_hjAbsoluteSessionInProgress", "_hjFirstSeen", "_hjViewportId", "_hjRecordingEnabled"],
            onAccept: function () {
                // Add Hotjar
                // create script element
                var scriptElmHotjar = document.createElement("script");
                // add content to script element
                scriptElmHotjar.innerHTML = "(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:2377777,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');";
                // add into page
                document.head.appendChild(scriptElmHotjar);
            },
            onRevoke: function () {},
            thirdPartyCookies: [
                {
                    name: "Hotjar",
                    optOutLink: "https://www.hotjar.com/legal/policies/do-not-track/",
                },
            ],
        },
        {
            name: "marketing",
            label: "Communication and Marketing Cookies",
            description: "These cookies may be set by third party websites and do things like measure how you view YouTube videos or Twitter feeds that are on the website.",
            recommendedState: true,
            cookies: ["fr", "__Secure-3PAPISID", "__Secure-APISID", "GPS", "PREF", "adcloud", "mbox", "AMCV_ED8D65E655FAC7797F000101%40AdobeOrg", "AAMC_esri_0", "s_dslv", "iv", "esri_gdpr"],
            thirdPartyCookies: [
                {
                    name: "AddThis",
                    optOutLink: "http://www.addthis.com/privacy/opt-out",
                },
                {
                    name: "Esri UK",
                    optOutLink: "https://www.esriuk.com/en-gb/legal/uk/notices/privacy",
                },
                {
                    name: "Facebook",
                    optOutLink: "https://www.facebook.com/about/privacy/",
                },
                {
                    name: "Google Marketing/Advertising",
                    optOutLink: "https://adssettings.google.com/",
                },
            ],
        },
    ],
    statement: {
        description: "For more information visit our",
        name: "Privacy Statement",
        url: "https://myaccount.renfrewshire.gov.uk/privacypolicy",
        updated: "13/05/2021",
    },
};

CookieControl.load(config);
