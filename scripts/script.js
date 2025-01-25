
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
        cat.style.opacity = 1 - scrollPos / 100;
    }
    else // if it IS non-mobile width...
    {
        // reset to visible!
        cat.style.opacity = 1;
        // solves edge case of changing from a scrolled mobile view (hiding cat)
        // to a desktop view, where the cat should not have been faded out
    }
})