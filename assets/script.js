const toggle = document.getElementById("toggle");

toggle.addEventListener("change", (e) => {
    document.body.classList.toggle("dark", e.target.checked);
});

document.addEventListener('DOMContentLoaded', () => {
    var x = window.matchMedia("(min-width: 900px)");
    if (x.matches) {
        console.log("Matched");
        window.alert('Please visit the Desktop Webpage!');
    }
});