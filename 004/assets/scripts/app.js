import elements from "../scripts/elements.js"
import api from "../scripts/api.js"
import { getCurrentHour, updateHour } from "../scripts/utils.js"

const app = {

    icons: {

        trash: {
            clearConversation() {
                elements.trashIcon.addEventListener("click", () => {
                    if (elements.list.querySelectorAll("li").length != 0) {
                        while (elements.list.firstChild) elements.list.removeChild(elements.list.firstChild)
                    }
                })
            }
        },

        theme: {
            themePage() {
                elements.themeIconInput.addEventListener("click", () => {
                    elements.themeIconInput.checked ? elements.html.classList.add(elements.themeIconInput.id) : elements.html.classList.remove(elements.themeIconInput.id)
                })
            }
        }
    },
    
    message: {

        createSendMessage() {
            const messageSend = document.createElement("li")
    
            messageSend.innerHTML = `
            <div class="message-send">
                <span class="time">Você -&nbsp;<span class="current-hour">${getCurrentHour()}</span></span>
                <p>${elements.inputMessage.value}</p>
            </div> `
    
            elements.list.appendChild(messageSend)
        },
    
        createInitialMessage() {
            const initialMessage = document.createElement("li")
            
            initialMessage.innerHTML = `
            <div class="message-received">
                <span class="time">Cecilia -&nbsp;<span class="current-hour">${getCurrentHour()}</span></span>
                <p>Seja bem vindo(a)! Aqui você será capaz de encontrar dados metereológicos de cidades de uma forma simples! De qual cidade gostaria de saber essas informações? 🌧️ 🌞</p>
            </div>`
    
            setTimeout(() => {
                elements.list.appendChild(initialMessage)
            }, 1000)
        },
    
        createErrorMessage() {
            const ErrorMessage = document.createElement("li")
            
            ErrorMessage.innerHTML = `
            <div class="message-received">
                <span class="time">Cecilia -&nbsp;<span class="current-hour">${getCurrentHour()}</span></span>
                <p>Não consegui achar os dados dessa cidade que você me passou. Por favor, verifique a cidade que você digitou e tente novamente. 🙁</p>
            </div>`
    
            setTimeout(() => {
                elements.list.appendChild(ErrorMessage)
            }, 1000)
        },
    
        createResponseApiWeather(data) {
            const ResponseMessage = document.createElement("li")
            
            ResponseMessage.innerHTML = `
            <div class="message-received">
                <span class="time">Cecilia -&nbsp;<span class="current-hour">${getCurrentHour()}</span></span>
                <p>
                    Dados atuais sobre ${data.name}: <br>
                    <br>
                    <span class="icon temp"></span> Temperatura: ${parseInt(data.main.temp)} ºC <br>
                    <span class="icon weather"></span> Clima: ${data.weather[0].description} <br>
                    <span class="icon humidity"></span> Humidade: ${data.main.humidity}% <br>
                    <span class="icon wind"></span> Vento: ${data.wind.speed} km/h <br>
                    <span class="icon visibility"></span> Visibilidade: ${data.visibility / 1000} km <br>
                    <span class="icon clouds"></span> Nebulosidade: ${data.clouds.all}%
                </p>
            </div>`
    
            
            setTimeout(() => {
                elements.list.appendChild(ResponseMessage)
                this.createNextCityMessage()
            }, 1000)
        },
    
        createNextCityMessage() {
            const nextCityMessage = document.createElement("li")
    
            nextCityMessage.innerHTML = `
            <div class="message-received">
                <span class="time">Cecilia -&nbsp;<span class="current-hour">${getCurrentHour()}</span></span>
                <p>Caso desejas saber esses dados de outra cidade, pode me passar o nome dela! 😊</p>
            </div>`
            
            elements.list.appendChild(nextCityMessage)
        },
    
        sendMessage() {
            this.createSendMessage()
        }

    },

    input: {

        testInputValue() {
            elements.btnSendMessage.addEventListener("click", event => {
                if (elements.inputMessage.value === "") {
                    event.preventDefault()
                } else {
                    event.preventDefault()
                    app.message.sendMessage()
                    this.showWeatherData(elements.inputMessage.value.toLowerCase())
                    this.clearInput()
                }
            })
        },
    
        async showWeatherData(city) {
            const data = await api.getWeatherData(city)
                    
            data.cod === "404" ? app.message.createErrorMessage() : app.message.createResponseApiWeather(data)
        },
        
        clearInput() {
            elements.inputMessage.value = ""
        }

    },

    start() {
        updateHour()
        app.message.createInitialMessage()
        app.input.testInputValue()
        app.icons.trash.clearConversation()
        app.icons.theme.themePage()
    }
}

export {
    app
}