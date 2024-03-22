export function displayCursor() {

    const cursor = document.getElementById("cursor");
    const content = document.querySelector("#cursor > p")
    let color = window.getComputedStyle(cursor).backgroundColor.match(/\d+/g).map(value => parseInt(value))

    window.onmousemove = e => {
    const interactable = e.target.closest(".card, h2"),
            interacting = interactable !== null;

    const clickable = e.target.closest("a"),
            clicking = clickable !== null;
    
    animateCursor(e, interacting, clicking, color);
    
    if (interacting && clicking) {
        content.innerHTML = '<i class="fa-solid fa-arrow-up-right-from-square"></i>'
        content.style.opacity = 1;
    } else if (interacting) {
        content.innerText = interactable.getAttribute("data")
        content.style.opacity = 1;
    }   else    {
        content.innerText = ""
    }

    }
}

const animateCursor = (e, interacting, clicking, color) => {
    const x = e.clientX - cursor.offsetWidth / 2,
            y = e.clientY - cursor.offsetHeight / 2;
    
    const keyframes = {
        backgroundColor: interacting && !clicking ?
        `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)` :
         `rgba(${color[0]}, ${color[1]}, ${color[2]}, 1)`,
        transform: `translate(${x}px, ${interacting && !clicking ? y - 100 : y}px) scale(${interacting ? 4 : 1})`
    }

    cursor.animate(keyframes, { 
        duration: 800, 
        fill: "forwards" ,
        easing: 'ease'
    });
    }