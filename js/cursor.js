export function displayCursor() {

document.addEventListener('DOMContentLoaded', () => {
    let mousePosX = window.innerWidth / 2,
        mousePosY = 0,
        mouseCircle = document.getElementById('cursor');
  
    document.onmousemove = (e) => {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
    }
  
    let delay = 12,
    revisedMousePosX = mousePosX,
    revisedMousePosY = mousePosY;
  
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