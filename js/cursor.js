export function displayCursor () {
    const CURSOR_OFFSET = 15;
    let mousePosX = window.innerWidth / 2;
    let mousePosY = 0;
    let mouseCircle = null;

    document.addEventListener('DOMContentLoaded', () => {
        mouseCircle = document.getElementById('cursor');
        delayMouseFollow();
    });

    document.onmousemove = (e) => {
        mousePosX = e.clientX;
        mousePosY = e.clientY;
    };

    const delay = 12;
    let revisedMousePosX = mousePosX;
    let revisedMousePosY = mousePosY;

    function delayMouseFollow() {
        requestAnimationFrame(delayMouseFollow);

        revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
        revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

        mouseCircle.style.top = `${revisedMousePosY - CURSOR_OFFSET}px`;
        mouseCircle.style.left = `${revisedMousePosX - CURSOR_OFFSET}px`;
    }
}
