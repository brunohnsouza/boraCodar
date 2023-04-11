import elements from "../scripts/elements.js"

function getCurrentHour() {
    const date = new Date()
    return new Intl.DateTimeFormat("pt-BR", {hour: 'numeric', minute: 'numeric'}).format(date)
}

function updateHour() {
    elements.currentHour.forEach(element => element.innerText = getCurrentHour())
}

export {
    getCurrentHour,
    updateHour
}