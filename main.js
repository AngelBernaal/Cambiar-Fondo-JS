const change = document.getElementById("mode")
const body = document.body

change.addEventListener("click", () => {
    body.classList.toggle("dark")
})