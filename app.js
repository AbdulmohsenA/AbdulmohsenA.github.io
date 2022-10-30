// https://avatars.dicebear.com/api/open-peeps/123123.svg?background=%230000ff
function loadScript(url) {    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.src = url;
    head.appendChild(script);
}

loadScript('./js/cardStager.js')
loadScript('./js/observer.js')

