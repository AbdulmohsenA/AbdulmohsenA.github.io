export function displayCursor() {

    const cursor = document.getElementById("cursor");
    const content = document.querySelector("#cursor > p")
    let color = window.getComputedStyle(cursor).backgroundColor.match(/\d+/g).map(value => parseInt(value))
    let enable_cursor = false

    document.addEventListener('dblclick', () => {
        enable_cursor = !enable_cursor
    });


    window.onmousemove = e => {
    const interactable = e.target.closest(".card, h2"),
            interacting = interactable !== null;

    const clickable = e.target.closest("a"),
            clicking = clickable !== null;
    
    animateCursor(e, interacting, clicking, color, enable_cursor);
    
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

const animateCursor = (e, interacting, clicking, color, enabled) => {
    const x = e.clientX - cursor.offsetWidth / 2,
            y = e.clientY - cursor.offsetHeight / 2;
    

    let scale = 1
    let cursor_color = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${+ enabled})`
    let height = y

    if (interacting) {
        scale = 5
        cursor_color = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`
        height = y - 100
        
        if (clicking) {
            height = y
            cursor_color = `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`
        }
    }

    const keyframes = {
        backgroundColor: cursor_color,
        transform: `translate(${x}px, ${height}px) scale(${scale})`
    }

    cursor.animate(keyframes, { 
        duration: 600, 
        fill: "forwards" ,
        easing: 'ease'
    });
}