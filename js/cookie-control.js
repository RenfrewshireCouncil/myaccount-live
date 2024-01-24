const cc_config = {
  position: "LEFT",
  apiKey: 'eb2615de678c365ca1772885dbff11df377d77db',
  product: 'PRO_MULTISITE',
  initialState: "NOTIFY",
  theme: "DARK",
  necessaryCookies: ["localtime", "AWSELBCORS", "AWSELB", "APP_LANG"],
  optionalCookies: [
        {
            name : 'analytics',
            label: 'Analytical Performance Cookies',
            description: 'Counts the number of visitors and how visitors move around the website (does not collect personal information).',
            cookies: [
                //Google Analytics				
                '_utma', '_utmb', '_utmc', '_utmt', '_utmz', '_ga', '_gat', '_gid'			
            ],
            initialConsentState: "on",
            onAccept : function() {
                
                localStorage.removeItem("analyticsRevoked");

                // Google Tag Manager
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-N8TJDT7');
                
            },
            onRevoke: function(){
                // Disable Google Analytics
                window['ga-disable-UA-18306304-3'] = true;
                // End Google Analytics
                
                // Remember on Revoke
                localStorage.setItem("analyticsRevoked", "true");
            }
        }
    ],
  text : {
    notifyTitle: 'Website cookies enhance your user experience',
    notifyDescription: 'If you don\'t want to accept cookies you can change preferences.',
    title: 'Cookies on MyAccount',
    intro:  'Cookies are files saved on your phone, tablet or computer when you visit a website. We use cookies to store information about how you use the council website, such as the pages you visit.',
    necessaryTitle : 'Strictly Necessary Cookies',
    necessaryDescription : 'Required for the operation of the website.',
    thirdPartyTitle : 'Warning: Some cookies require your attention',
    thirdPartyDescription : 'Consent for some third-party cookies cannot be automatically revoked. Please follow the link below if you want to opt out of them or read more information regarding your privacy and these services.',
    acceptRecommended: 'Accept'
  },
  statement : {
    description: 'For more information visit our',
    name : 'Cookie policy',
    url: 'https://myaccount.renfrewshire.gov.uk/cookies',
    updated : '23/11/2023'
  },
  accessibility : {
      outline: true
  }
};

CookieControl.load( cc_config );
