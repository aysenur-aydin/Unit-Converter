/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputValue = document.getElementById("input-value")
const lengthValue = document.getElementById("length-value")
const volumeValue = document.getElementById("volume-value")
const massValue = document.getElementById("mass-value")

function convert() {
    let numValue = Number(inputValue.value)
    const toFeet = (numValue * 3.281).toFixed(3)
    const toMeter = (numValue / 3.281).toFixed(3)
    const toGallon = (numValue * 0.264).toFixed(3)
    const toLiter = (numValue / 0.264).toFixed(3)
    const toPound = (numValue * 2.204).toFixed(3)
    const toKilo = (numValue / 2.204).toFixed(3)

    lengthValue.innerHTML = `${numValue} meters = ${toFeet} feet 
                            | ${numValue} feet = ${toMeter} meters`
    volumeValue.innerHTML = `${numValue} liters = ${toGallon} gallons 
                            | ${numValue} gallons = ${toLiter} liters`
    massValue.innerHTML = `${numValue} kilos = ${toPound} pounds 
                            | ${numValue} pounds = ${toKilo} kilos`

}