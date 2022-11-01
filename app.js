// https://avatars.dicebear.com/api/open-peeps/123123.svg?background=%230000ff
function loadScript(url) {    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
}

loadScript('./js/cardStager.js')

// Load this only when all elements are loaded
window.addEventListener('load', () => {
    loadScript('./js/observer.js')
}, false);
