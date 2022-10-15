# Documentation

[(Back to home)](https://github.com/vanzasetia/myteam-multi-page-website#readme)

## Table of contents

- [Overview](#overview)
- [References](#references)
  - [Web doc](#web-doc)
  - [Articles](#articles)
  - [Tools](#tools)
  - [Validation](#validation)
  - [Others](#others)

## Overview

This is the place where I put all the resources that I find useful to build this project. This can be used for future reference or help anyone that is doing this challenge.

## References

### Web Doc

- [Box alignment in Flexbox - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Alignment/Box_Alignment_in_Flexbox) - there is no justify-self in Flexbox.
- [`justify-self` - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self)
- [`visibility` - CSS: Cascading Style Sheets | MDN #accessibility_concerns](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility#accessibility_concerns) - Using a `visibility` value of `hidden` on an element will remove it from the [accessibility tree](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/What_is_accessibility#accessibility_apis). This will cause the element and all its descendant elements to no longer be announced by screen reading technology.
- [`<footer>` - HTML: HyperText Markup Language | MDN #accessibility_concerns](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer#accessibility_concerns) - Prior to the release of Safari 13, the `contentinfo` [landmark role](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics#signpostslandmarks) was not properly exposed by [VoiceOver](https://help.apple.com/voiceover/info/guide/). If needing to support legacy Safari browsers, add `role="contentinfo"` to the footer element to ensure the landmark will be properly exposed.
- [HTML Standard #the-address-element](https://html.spec.whatwg.org/multipage/sections.html#the-address-element) - The `address` element must not be used to represent arbitrary addresses (e.g. postal addresses), unless those addresses are in fact the relevant contact information. (The `p` element is the appropriate element for marking up postal addresses in general.)
- [`list-style` - CSS: Cascading Style Sheets | MDN #accessibility_concerns](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#accessibility_concerns) - In a notable exception, Safari will not recognize an ordered or unordered list as a list in the accessibility tree if it has a `list-style` value of `none`. [This behavior is intentional](https://bugs.webkit.org/show_bug.cgi?id=170179#c1) and not considered a bug.
- [Using HTML's `translate` attribute](https://www.w3.org/International/questions/qa-translate-flag)
- [HTML Standard #the-translate-attribute](https://html.spec.whatwg.org/multipage/dom.html#the-translate-attribute)
- [CSS API update  |  Google Fonts  |  Google Developers #optimizing_your_font_requests](https://developers.google.com/fonts/docs/css2#optimizing_your_font_requests) - To use this feature, simply add `text=` to your API request.
- [Accessibility/WebAccessibilityAPI - MozillaWiki](https://wiki.mozilla.org/Accessibility/WebAccessibilityAPI)
- [ARIA: menu role - Accessibility | MDN #example_1_navigation_menu](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/roles/menu_role#example_1_navigation_menu)

### Articles

- [Menus & Menu Buttons | Inclusive Components](https://inclusive-components.design/menus-menu-buttons/)
- [Building a sidenav component | web.dev](https://web.dev/building-a-sidenav-component/)
- [Navigation Menu Button Example | APG | WAI | W3C](https://www.w3.org/WAI/ARIA/apg/example-index/menu-button/menu-button-links.html)
- [Contextually Marking up accessible images and SVGs](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html)
  - Prior to macOS 10.14.4, `aria-hidden="true"` would also be necessary to completely hide a decorative image to VoiceOver when paired with Chrome. Without the ARIA attribute, VoiceOver would still focus the image, but provide no announcement.
  - A SVG that does not add important information to a document should be considered decorative. The following markup pattern uses `aria-hidden="true"` to hide the SVG from screen readers. `focusable="false"` is also used to ensure Internet Explorer won’t allow the Tab key to navigate into the SVG.
- [Axess Lab | Your skip links are broken](https://axesslab.com/skip-links/)
- [How to Create a “Skip to Content” Link | CSS-Tricks #comment-1755109](https://css-tricks.com/how-to-create-a-skip-to-content-link/#comment-1755109) - Adrian Roselli's comment about adding `tabindex="-1"` to the `<main>`

### Tools

- [font-face generator](https://everythingfonts.com/font-face) - convert `ttf` to `woff` and `woff2`.
- [Caninclude](https://caninclude.glitch.me/) - 'Caninclude' tool to help determine if one HTML tag can be included in another HTML tag.
- [Fluid type scale calculator | Utopia (Settings)](https://utopia.fyi/type/calculator/?c=320,4,1.2,1350,18,1.414,5,2,&s=0.75%7C0.5%7C0.25,1.5%7C2%7C3%7C4%7C6,s-l)
- [Fluid Space Calculator | Utopia (Settings)](https://utopia.fyi/space/calculator/?c=320,80,1.2,1350,140,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l)
- [Url Encoder - Online Tool](https://www.urlencoder.net/) - It helps me encode necessary text to `text` parameter to Google Fonts API to import "Livvic Medium" font family.

### Validations

- [The W3C Markup Validation Service](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

### Others

- [Livvic - Google Fonts](https://fonts.google.com/specimen/Livvic)
- [Livvic - 500 (Only necessary text)](https://fonts.googleapis.com/css2?family=Livvic:wght@500&text=Product%20Manager%20at%20Bookmark%20Founder%20of%20Manage%20Co-founder%20of%20MyPhysio%20Founder%20%26%20CEO%20Co-founder%20%26%20COO%20Co-founder%20%26%20CTO%20Business%20Development%20Lead%20Lead%20Marketing%20Head%20of%20Talent&display=swap)
- [instant.page](https://instant.page/) - instant.page uses just-in-time preloading — it preloads a page right before a user clicks on it.
- [Be the browser’s mentor, not its micromanager. - Build Excellent Websites](https://buildexcellentwebsit.es/) - class names and CSS techniques inspiration.
