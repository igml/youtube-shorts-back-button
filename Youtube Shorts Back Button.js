// ==UserScript==
// @name         Youtube Shorts Back Button
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Goes to the page that was visited prior to the /shorts/ url when alt, and the left arrow key are pressed simultaneously. This is meant to be combined with the "Redirect Shorts" extension.
// @author       
// @match        *://*.youtube.com/*
// @grant        none
// ==/UserScript==

// Add new behavior for when alt and left arrow are pressed together.
// Prompt for key input.

window.addEventListener("keydown", function(event) {

  // Check if alt and left arrow key were pressed

  if (event.altKey && event.key === "ArrowLeft") {

    // If previous page URL was a short (identified by /shorts/ in the url)
      // Then go back two pages, thereby avoiding the /shorts/ url in the process.
    // Otherwise go back only a single page.

    if (document.referrer.includes("/shorts/")) {
      window.history.go(-2);

    } else {
      window.history.back();
    }

    // Ensure that normal back button behavior stays overwritten.

    event.preventDefault();
  }
});