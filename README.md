# Self MyAccount - Live

The following information details the use of the static files in this repo for the display of the **live** Renfrewshire Council Granicus Self site (MyAccount). The guidelines below give general informaion that can be useful to know, and then broken down into the primary file types found within this repo and should be kept up-to-date as improvments or changes are made to the site.

## Getting Started

This repo holds the _live_ version of the MyAccount site, which has been built and tested on _Sandbox_ before being manually copies over to this repo and online for the site.

As this codebase for all intents and purposes is what is used for the _live_ site, any opportunities to streamline and optimise should be used and instructions added or updated in this ReadMe guide.

## General Set-up

There are several HTML files that represent different blocks of mark-up or content for the MyAccount site. Each static file should be identifiable by its filename corresponding to the relevant section of the Granicus admin area.

This should also be a practice followed for other files that are referenced from the site but not necessarily kept within the admin area e.g. stylesheets and JavaScript - these files and their purpose should be identifiable by their filename.

---

### HTML

Content from these files needs to be copied manually into the respective areas in the Self MyAccount admin. Filenames should direct you to the purpose of the component or mark-up. There are a handful of areas on the Self site where you have more control over the content and layout. These areas can be found via the following paths:

1. *Self Admin > Content/Translations > Page Components*
2. *Self Admin > App Management > Page Builder*

The following list breaks down the available pages/components:

- Header
    - _currently not in use_
- Footer
- Toolbar
    - _currently used for site Header_
- Homepage _(Anonymous)_
- Homepage _(Authorised)_
- Page Not Found/404
- Forbidden/403
- Error Page
    - _//TODO_
- JS Not Enabled Error
    - _//TODO: custom layout exists in MyAccount admin, but has not been reviewed or a template added to repo._
- Page Maintenance Mode
    - _//TODO: currently uses default content_
- Page Builder
    - Currently only used for pages found via footer: _accessibility, privacy, cookies_.
    - Makes use of Self platform inbuilt _drag and drop_ style construction, however source code is available to copy/paste to and from, so there is scope for further use.
    - Used for any custom pages e.g. _FAQ Page, Year in review_ etc.

#### Notes:

Make sure changes in HTML files from _Sandbox_ to _Live_ include links and targets which have _live_ specific URLs and not empty test links or _Sandbox_ URLs left over from test and development.

#### Browser Support

Granicus, Firmstep, GovService platforms themselves support a specific browser listing
which can be found here: https://support.granicus.com/s/article/firmstep-browsers (requires login).

---

### CSS

MyAccount is styled through a handful of stylesheets that are hosted on a AWS S3 bucket. Each stylesheet holds a specific purpose, and all work alongside default styling from the Granicus Self platform, which uses Bootstrap (v3) as a framework.

#### Bootstrap

MyAccount uses the Bootstrap framework. It is unclear what exact version of Bootstrap is being used. JavaScript appears to be using 3.4.1, whereas CSS appears to be using something between 2.2.1 and 3.2.0 - discussion is still ongoing at the time of writing with Granicus to narrow this down, they keep saying all Bootstrap files should be v3.4.1. There appears to be no development roadmap for Granicus to update to a more modern version of Bootstrap which sits at v5.0.2 at the time of writing.

#### Custom CSS

Since MyAccount (Granicus Self) uses such an outdated version of the Bootstrap framework, which is marked as end-of-life since 2019 (https://github.com/twbs/release), as much as possible more modern CSS features are taken advantage of and used where possible when building pages or components.

As much as possible the BEM methodology is used for class nameing and can be read about here: http://getbem.com/

#### CSS Structure

**Self and iFrame UI**
Two of the main stylesheet links for MyAccount (Self) and these properties are set via the Self admin panel through the following path: _Self Admin > Site Settings > General_

#### self--live.css

Holds styling for the main parts of the Self site which we have control to edit and change e.g. Header/Footer, Homepages etc. Imports all of the structured css components and variables.

_S3 Bucket Location: renfrewshire > css_

#### iframe--live.css

Holds styling for content fond on system pages, which are delivered via iFrames and controlled by Granicus and the Self platform e.g. Accounts, All Services, and My Requests.

_S3 Bucket Locaiton: renfrewshire > css_

#### page-builder--live.css

Holds styling for any custom pages built using the Page Builder app available through Self admin: _Self Admin > App Management > Page Builder_

Paths to stylesheets are added to pages created in Page Builder directly as required, one **main** stylesheet file is used to style all general settings. Further stylesheets can be added for specific page designs or needs. You can add these stylesheets from the following location: _Self Admin > App Management > Page Builder > Settings > External Sources_

Page builder stylesheets are stored in the AWS S3 bucket alongside other file.

_S3 Bucket Location: renfrewshire > css_

#### CSS Partial Files

Refactored in summer 2021, styling was broken up into its core functions and imported as _partials_ into a single main css file **self--live**. The aim of this was to simplify development and changes by only needing to alter and update specific files and areas, instead of the whole site styling that lived in a single file as done in the past.

All file names should clearly identify the target area being styled as well as the enviroment being edited e.g. buttons--live.css, header--live.css, faq--live.css etc.

#### Production Files
During updates of MyAccount, there has been evidence of strong caching stopping users seeing updates. Using a new file and file path for a stylesheet appears to be an option to resolve this as it forces a pull of the latest styles when the path in _Self Admin > Site Settings > General_ has been changed.

This also allows the inclusion of some small performance improvements with the use of a minified stylesheets across the board.

This is a manual procedure using [CSS Minifier](https://cssminifier.com/) to minify the content of a stylesheet e.g. self--live.css and then saved into a new file using the following naming convention to ensure an updated filename but also retaining a sensible measure of understanding.

*filename-ddmmyy.min.css* - where ddmmyy is the date when the file is created e.g. self--live-130721.min.css

It is bad practice to fill a repo with multiple copies of the same file, which is why no production (minified) versions of files should be saved to the repo and any minified file is ignored via a gitignore file.

##### Notes:
With the summer 2021 refactor new partial css files were created to block out sections of styling. Many of these file will only need to be updated rarely so their file names don't need a _ddmmyy_ extension until they have been updaed. This would be the same for any new css files added as a partial to style a new page or component.

---

### JavaScript

Unlike the stylesheets, there is no option available within the Self MyAccount admin area to link an external JavaScript file. To work around this, a **myaccount.js** file has been created and added to the bottom of the **Footer** section, after all mark-up, found at: _Self Admin > Content/Translations > Page Components > Footer_

The file itself is stored in the same AWS S3 bucket as other resources.

_S3 Bucket Locaiton: renfrewshire > js_

All functions should be clearly labled and commented to identify purpose and what is going on at each step to help other follow allong. Some functions fire on page load and other are triggered inside a initiate function after the page has loaded to avoid any possible conflicts - especially as some functions rely on iframes being loaded in the page first.

#### JS Function Explanations

Although all JS functions should be well commented and clearly labled, more detailed instructions for specific functions and their use can be found below.

- **Temporary Notification**
    - This function allows a notification style bar be added to the very top of the MyAccount site with a custome message. This message is outside the main site, so can be set when there is no access to the admin area to use the default built in.
        - To enable, update the perElm innerHTML string value inside the _tempNotification()_ function. Add the function _tempNotification()_ to the DOMContentLoaded window addEventListener section where all functions are initiated.
        - To remove, simply comment out or delete the _tempNotification()_ function call from the DOMContentLoaded window addEventListener section.
- **Page Redirect (Emergency)**
    - This function offers an emergency option to redirect to another page if there is a problem with the URL that has been provided or sent out to customers.
        - To enable, update the wrongPath and correctPath variables inside the _pageRedirect()_ function. This function checks the current url with the wrong url and if they match, change the url to the correct url taking the user to this page. Add the _pageRedirect()_ to the DOMContentLoaded window addEventListener section where all functions are initiated.
        - To remove, simply comment out or delete the _pageRedirect()_ function call from the DOMContentLoaded window addEventListener section.

## Miscellaneous

### Cookies

MyAccount uses [CIVIC - Cookie Control](https://www.civicuk.com/cookie-control/documentation), which has all of its configuration settings set within the _myaccount.js_ file.

### 3rd Party JS Libraries

Some 3rd party libraries have been used as a pollyfill to work around elements of the layout and design of MyAccount, as they are needed in the current state of the site.

Scripts for these libraries can be a mix of self-hosted files kept within our AWS S3 bucket JS folder, or a link to a CDN if more relevant. These JS libraries are added to the site following their docuemntation as much as possible. This usually means adding them to the **Head** of the site which can be found at: _Self Admin > Site Settings > General > Head HTML_

The list below details any currently used libraries and should be kept up-to-date as they change.

- [jquery.matchHeight.js](https://github.com/liabru/jquery-match-height)
