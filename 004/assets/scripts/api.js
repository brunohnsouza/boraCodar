export default {
    apiKey: "", // Your API_KEY here

    async getWeatherData(city) {
        try {
            return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}&lang=pt_br`)
            .then(response => response.json())
        } catch (error) {
            console.error(error)
        }
    }
}