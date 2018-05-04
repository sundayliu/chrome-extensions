// content.js

// alert("Hello from your Chrome extension!")

// we don’t need to use jQuery to check if the document has loaded. By default, Chrome injects content scripts after the DOM is complete.
var firstHref = $("a[href^='http']").eq(0).attr("href");
console.log(firstHref);