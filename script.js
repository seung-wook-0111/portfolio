var onIndex = false;
var isAnimating = false;

window.onload = function() {
    // Get the current file name
    let currentFile = window.location.pathname.split('/').pop();
    console.log("Current File: " + currentFile);
    if(currentFile.startsWith("index.html")) onIndex = true;
    else onIndex = false;
};

// Navbar scroll minimize feature
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(window.innerWidth > 750){
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            document.getElementById("navbar").style.padding = "30px 100px";
            document.getElementById("navbar").style.background = "rgba(255, 255, 255, 0.8)";
            document.getElementById("navbar").style.backdropFilter = "blur(10px)";
        }
        else {
            document.getElementById("navbar").style.padding = "40px 100px";
            document.getElementById("navbar").style.background = "transparent";
            document.getElementById("navbar").style.backdropFilter = "none";
        }
    }
}


/*
function goBack(section) {
    const referrer = document.referrer;
    if ((referrer == "" || referrer.startsWith(window.location.origin))&& history.length >= 3) { history.back(); }
    else { window.location.href = "../index.html#" + section; }
}
*/
/*
const main = document.querySelector('main');
document.querySelectorAll('a.innerlink').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        if(isAnimating) return
        const url = link.getAttribute("href");
        let targetFile = url.split('/').pop();
        if(targetFile.startsWith("index.html")) onIndex = true;
        startTransition(url);
        const pathname = new URL(url).pathname;
        history.pushState(null, '', pathname);
    })
})
window.addEventListener('popstate', e => {
    const url = window.location.pathname;
    startTransition(url)
})
const startTransition = async (url) => {
    isAnimating = true;
    const html = await fetch(url);
    const htmlString = await html.text();
    const parser = new DOMParser();
    const parsedhtml = parser.parseFromString(htmlString, 'text/html').querySelector('main')
    
    main.classList.add('hidden');

    main.addEventListener('transitionend', () => {
        main.innerHTML = parsedhtml.innerHTML;
        main.classList.remove('hidden');
    }, {once: true});
}
*/
/*
function loadPageContent(url) {
    const contentContainer = document.querySelector('.contents');
    contentContainer.classList.add('hidden'); // Fade out the current content

    // After the fade-out transition ends, load new content
    setTimeout(() => {
        fetch(url)  // Fetch the new content (could be a different HTML fragment)
            .then(response => response.text())
            .then(newContent => {
                contentContainer.innerHTML = newContent; // Replace the current content
                contentContainer.classList.remove('hidden'); // Fade in the new content
            })
            .catch(err => console.error('Error loading content:', err));
    }, 500);  // Match the fade-out duration (0.5s in CSS)
} */