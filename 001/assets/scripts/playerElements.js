export default {
    getElementsPlayerOne() {
        this.cover = document.querySelector(".card-img.one")
        this.titleCard = document.querySelector(".card-texts.one .name-music")
        this.artist = document.querySelector(".card-texts.one .artist")
        this.audio = document.querySelector(".music-timer.one audio")
        this.back = document.querySelector(".card.one .middle .card-buttons .back")
        this.playPause = document.querySelector(".card.one .middle .card-buttons .play-pause")
        this.next = document.querySelector(".card.one .middle .card-buttons .next")
        this.seekBar = document.querySelector("#progress-bar-music-one")
        this.currentTime = document.querySelector(".time.one .current-time")
        this.totalTime = document.querySelector(".time.one .total-time")
     },
    getElementsPlayerTwo() {
        this.cover = document.querySelector(".card-img.two")
        this.titleCard = document.querySelector(".card-texts.two .name-music")
        this.artist = document.querySelector(".card-texts.two .artist")
        this.audio = document.querySelector(".music-timer.two audio")
        this.back = document.querySelector(".card.two .middle .card-buttons .back")
        this.playPause = document.querySelector(".card.two .middle .card-buttons .play-pause")
        this.next = document.querySelector(".card.two .middle .card-buttons .next")
        this.seekBar = document.querySelector("#progress-bar-music-two")
        this.currentTime = document.querySelector(".time.two .current-time")
        this.totalTime = document.querySelector(".time.two .total-time")
    },
    getElementsPlayerThree() {
        this.cover = document.querySelector(".card-img.three")
        this.titleCard = document.querySelector(".card-texts.three .name-music")
        this.artist = document.querySelector(".card-texts.three .artist")
        this.audio = document.querySelector(".music-timer.three audio")
        this.back = document.querySelector(".card.three .middle .card-buttons .back")
        this.playPause = document.querySelector(".card.three .middle .card-buttons .play-pause")
        this.next = document.querySelector(".card.three .middle .card-buttons .next")
        this.seekBar = document.querySelector("#progress-bar-music-three")
        this.currentTime = document.querySelector(".time.three .current-time")
        this.totalTime = document.querySelector(".time.three .total-time")
    },
    createAudioElement(audio) {
        this.audio = new Audio(audio)
    },
    actions() {
        this.playPause.onclick = () => this.togglePlayPause()
        this.seekBar.oninput = () => this.setSeek(this.seekBar.value)
        this.seekBar.onchange = () => this.setSeek(this.seekBar.value)
        this.next.onclick = () => this.forwardTenSeconds()
        this.back.onclick = () => this.backTenSeconds()
        this.audio.onended = () => this.restartMusic()
    }
}