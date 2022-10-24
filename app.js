// https://avatars.dicebear.com/api/open-peeps/123123.svg?background=%230000ff

backgroundClr = "3f3f3f"


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }   else {
            entry.target.classList.remove('show');
        }
    })
})

const hidden = document.querySelectorAll(".hidden");
hidden.forEach((el) => observer.observe(el));