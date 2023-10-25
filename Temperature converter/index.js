const celsiusEl = document.getElementById("celsius")
const fahrenheiEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")

function computeTemp(event){
    const currentValue = +event.target.value
    switch (event.target.name){
        case "celsius":
            kelvinEl.value = (currentValue + 273.32)
            fahrenheiEl.value = (currentValue * 1.8 + 32 )
            break;
        case "fahrenheit":
                celsiusEl.value = ((currentValue - 32) / 1.8)
                kelvinEl.value = ((currentValue - 32) / 1.8 + 273.32)
                break;
        case "kelvin":
        celsiusEl.value = (currentValue - 273.32)
        fahrenheiEl.value = ((currentValue - 273.32) * 1.8 + 32)
        default:
            break;
    }
}