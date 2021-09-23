const toggleCheck = document.querySelector(".toggleCheck");
const body = document.body;
let themeChoice = localStorage.getItem("theme");
checkLocal();

function checkLocal() {
    if (themeChoice === "dark") {
        body.classList.add("dark")
        toggleCheck.checked = true;
    } else {
        body.classList.remove("dark")
        toggleCheck.checked = false;
    }
    
}

toggleCheck.addEventListener("change", function () {
    if (toggleCheck.checked) {
        body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
})