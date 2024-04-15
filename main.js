const boton = document.getElementById("cambiar")
const img = document.getElementById("img")
const body = document.body

boton.addEventListener("click", () => {
    body.classList.toggle("dark")

    if (body.classList.contains("dark")) {
        img.src = "sol.png"
    }else{
        img.src = "luna-nueva.png"
    }
});