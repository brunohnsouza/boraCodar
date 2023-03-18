import { pathImg, pathAudio, secondsToMinutes } from "../scripts/utils.js"
import elements from "../scripts/playerElements.js"
import database from "../scripts/database.js"

export default {
    playerOne: {
        isPlaying: false,
        data: {
            title: database[0].title,
            artist: database[0].artist,
            cover: database[0].cover,
            file: database[0].file
        },
        start() {
            elements.getElementsPlayerOne.call(this)
            this.cover.style.background = `url('${pathImg(this.data.cover)}') no-repeat center center / cover`
            this.titleCard.innerText = this.data.title
            this.artist.innerText = this.data.artist
            elements.createAudioElement.call(this, pathAudio(this.data.file))
            this.audio.onloadeddata = () => {
                elements.actions.call(this)
                this.seekBar.max = this.audio.duration
                this.totalTime.innerText = secondsToMinutes(this.audio.duration) 
                this.audio.ontimeupdate = () => this.timeUpdate()
            }
        },
        play() {
            this.isPlaying = true
            this.audio.play()
            this.playPause.removeAttribute("name", "")
            this.playPause.setAttribute("name", "pause") 
        },
        pause() {
            this.isPlaying = false
            this.audio.pause()
            this.playPause.removeAttribute("name", "")
            this.playPause.setAttribute("name", "play") 
        },
        togglePlayPause() {
            this.isPlaying ? this.pause() : this.play() 
        },
        setSeek(value) {
            this.audio.currentTime = value
        },
        timeUpdate() {
            this.currentTime.innerText = secondsToMinutes(this.audio.currentTime)
            this.seekBar.value = this.audio.currentTime  
        },
        forwardTenSeconds() {
            this.audio.currentTime = this.audio.currentTime + 10
            this.timeUpdate()
        },
        backTenSeconds() {
            this.audio.currentTime = this.audio.currentTime - 10
            this.timeUpdate()
        },
        restartMusic() {
            if (this.audio.currentTime == this.audio.duration) this.play()
        }
    },

    playerTwo: {
        isPlaying: false,
        data: {
            title: database[1].title,
            artist: database[1].artist,
            cover: database[1].cover,
            file: database[1].file
        },
        start() {
            elements.getElementsPlayerTwo.call(this)
            this.cover.style.background = `url('${pathImg(this.data.cover)}') no-repeat center center / cover`
            this.titleCard.innerText = this.data.title
            this.artist.innerText = this.data.artist
            elements.createAudioElement.call(this, pathAudio(this.data.file))
            this.audio.onloadeddata = () => {
                elements.actions.call(this)
                this.seekBar.max = this.audio.duration
                this.totalTime.innerText = secondsToMinutes(this.audio.duration) 
                this.audio.ontimeupdate = () => this.timeUpdate()
            }
        },
        play() {
            this.isPlaying = true
            this.audio.play()
            this.playPause.removeAttribute("name", "")
            this.playPause.setAttribute("name", "pause") 
        },
        pause() {
            this.isPlaying = false
            this.audio.pause()
            this.playPause.removeAttribute("name", "")
            this.playPause.setAttribute("name", "play") 
        },
        togglePlayPause() {
            this.isPlaying ? this.pause() : this.play() 
        },
        setSeek(value) {
            this.audio.currentTime = value
        },
        timeUpdate() {
            this.currentTime.innerText = secondsToMinutes(this.audio.currentTime)
            this.seekBar.value = this.audio.currentTime  
        },
        forwardTenSeconds() {
            this.audio.currentTime = this.audio.currentTime + 10
            this.timeUpdate()
        },
        backTenSeconds() {
            this.audio.currentTime = this.audio.currentTime - 10
            this.timeUpdate()
        },
        restartMusic() {
            if (this.audio.currentTime == this.audio.duration) this.play()
        }
    },

    playerThree: {
        isPlaying: false,
        data: {
            title: database[2].title,
            artist: database[2].artist,
            cover: database[2].cover,
            file: database[2].file
        },
        start() {
            elements.getElementsPlayerThree.call(this)
            this.cover.style.background = `url('${pathImg(this.data.cover)}') no-repeat center center / cover`
            this.titleCard.innerText = this.data.title
            this.artist.innerText = this.data.artist
            elements.createAudioElement.call(this, pathAudio(this.data.file))
            this.audio.onloadeddata = () => {
                elements.actions.call(this)
                this.seekBar.max = this.audio.duration
                this.totalTime.innerText = secondsToMinutes(this.audio.duration) 
                this.audio.ontimeupdate = () => this.timeUpdate()
            }
        },
        play() {
            this.isPlaying = true
            this.audio.play()
            this.playPause.removeAttribute("name", "")
            this.playPause.setAttribute("name", "pause") 

        },
        pause() {
            this.isPlaying = false
            this.audio.pause()
            this.playPause.removeAttribute("name", "")
            this.playPause.setAttribute("name", "play") 
        },
        togglePlayPause() {
            this.isPlaying ? this.pause() : this.play() 
        },
        setSeek(value) {
            this.audio.currentTime = value
        },
        timeUpdate() {
            this.currentTime.innerText = secondsToMinutes(this.audio.currentTime)
            this.seekBar.value = this.audio.currentTime  
        },
        forwardTenSeconds() {
            this.audio.currentTime = this.audio.currentTime + 10
            this.timeUpdate()
        },
        backTenSeconds() {
            this.audio.currentTime = this.audio.currentTime - 10
            this.timeUpdate()
        },
        restartMusic() {
            if (this.audio.currentTime == this.audio.duration) this.play()
        }
    }
}

