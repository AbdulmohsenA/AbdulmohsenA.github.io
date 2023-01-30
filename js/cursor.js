export function displayCursor() {

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = 0,
        mousePosY = 0,
        mouseCircle = document.getElementById('cursor');
  
    document.onmousemove = (e) => {
        mousePosX = e.pageX;
        mousePosY = e.pageY;
    }
  
    let delay = 12,
    revisedMousePosX = 0,
    revisedMousePosY = 0;
  
    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);
  
        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay; 

        mouseCircle.style.top = revisedMousePosY - (15) + 'px';
        mouseCircle.style.left = revisedMousePosX - (15) + 'px';
    }
  
    delayMouseFollow();
  });
}