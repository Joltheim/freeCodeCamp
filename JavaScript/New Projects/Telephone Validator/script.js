const userInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const resultsField = document.getElementById("results-div")

let phoneNumberArr = []

const clearNumbers = () => {
        phoneNumberArr = []
        resultsField.innerHTML = ""
        userInput.value = ""
}

const enterKey = (e) => {
    if (e.key === "Enter") {
        checkValidity()
    }
}

const checkValidity = () => {
    let filteredInput = userInput.value.replace(/[^0-9]/g, "")
    let validNumber = false

    phoneNumberArr.unshift(userInput.value)
    if(phoneNumberArr.length > 5) {phoneNumberArr.pop()}

    if(!userInput.value) {
        alert("Please provide a phone number")
        return
    }

    //conditions
    if(filteredInput.length == 11 && userInput.value[0] !== '1') {
        validNumber = false
        console.log("1")
        console.log(filteredInput.length)
        console.log(userInput.value[0])
    } else if (filteredInput.length !== 10 && filteredInput.length !== 11) {
        validNumber = false
        console.log("2")
    } else {
        validNumber = true
        console.log("3")
        }

    if(!validNumber) {
        resultsField.innerHTML = phoneNumberArr.map((str) => {
            return `<p>Invalid US number: ${str}</p>`
        }).join('')} else {
        resultsField.innerHTML = phoneNumberArr.map((str) => {
            return `<p>Valid US number: ${str}</p>`
        }).join('')
    }
}

checkBtn.addEventListener("click", checkValidity )
document.addEventListener("keydown", enterKey)
clearBtn.addEventListener("click", clearNumbers)
