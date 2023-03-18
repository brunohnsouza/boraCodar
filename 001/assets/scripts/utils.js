function secondsToMinutes(time) {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`
}

function pathImg(file) {
    return `img/${file}`
}  

function pathAudio(file) {
    return `audios/${file}`
}  

export {
    pathImg,
    pathAudio,
    secondsToMinutes
}