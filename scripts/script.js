
// get cat picture
const cat = document.getElementById('cat-picture');

// query: is non-mobile size?
const mediaQuery = window.matchMedia('(min-width: 50em)');

document.addEventListener('scroll', function(){

    // get scroll position of page
    // https://stackoverflow.com/questions/71861843/css-hide-an-image-when-scroll
    scrollPos = window.scrollY;

    // media query, ONLY fade cat if NOT non-mobile. aka, when mobile.
    // https://css-tricks.com/working-with-javascript-media-queries/
    if (!mediaQuery.matches)
    {
        // if mobile, set opacity to this value based on scrollPos
        cat.style.opacity = 1 - scrollPos / 100;
    }
})

// to fix edge cases where the user resizes the window,
// we update the opacity on resize too.
window.addEventListener("resize", function(){
    if (mediaQuery.matches)
    {
        // reset to fully visible if non-mobile
        cat.style.opacity = 1;
    }
    else
    {
        // if mobile, set opacity to this value based on scrollPos
        cat.style.opacity = 1 - scrollPos / 100;
    }
})