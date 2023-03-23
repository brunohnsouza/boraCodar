// BIKE ANIMATION

document.querySelector("#rotation").addEventListener("change", () => {
    const svg = document.querySelector(".svg")
    const bike = document.querySelector(".bike")

    function toggleSvg() {
        svg.classList.toggle("open")
        if (svg.classList.contains("open")) {
            svg.setAttribute("src", "./assets/img/stroke.svg") 
            svg.setAttribute("alt", "Imagem de um 'X'")
        } else {
            svg.setAttribute("src", "./assets/img/360.svg")
            svg.setAttribute("alt", "Imagem de um símbolo representando 360 graus")
        }
    }

    function toggleSvgToGif() {
        svg.classList.contains("open") ? bike.setAttribute("src", "./assets/img/bike.gif") : bike.setAttribute("src", "./assets/img/bike.png")
    }

    toggleSvg()
    toggleSvgToGif()
})

// PRODUCT COUNTER

const button = document.querySelector("button")

button.addEventListener("click", () => {
    let count = parseInt(button.getAttribute("data-count"))
    count++
    button.setAttribute("data-count", count)
})
