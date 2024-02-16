const userInput = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const resultsField = document.getElementById("results-div")

const clearNumbers = () => {
        resultsField.innerHTML = ""
        userInput.value = ""
}

const enterKey = (e) => {
    if (e.key === "Enter") {
        checkValidity()
    }
}

const checkValidity = () => {
    //error popup for empty userInput field
    if(!userInput.value) {
        alert("Please provide a phone number")
        return
    }

    //check for phone number format validity - see notes below
    let regExp = /^1?[- ]?(\((?=\d{3}\)))?(\d{3})((?<=\(\d{3})\))?[- ]?(\d{3})[- ]?(\d{4})$/
    let isValid = regExp.test(userInput.value)

    //returned HTML    
    resultsField.innerHTML += `<p>${isValid ? "Valid" : "Invalid"} US number: ${userInput.value}</p>`
    userInput.value = ""
}

checkBtn.addEventListener("click", checkValidity)
document.addEventListener("keydown", enterKey)
clearBtn.addEventListener("click", clearNumbers)

//Regex Pattern Breakdown - ln 25
// ^ expression match starts line with following regex pattern
// 1? optional (denoted by ?) match to international number 1
// [- ]? optional inclusion of space or hyphen
// (\((?=\d{3}\)))? optional capture group for escaped "(" char, w/ positive lookahead for 3 digits and closing ")"
// (\d{3}) three digits in a row
// ((?<=\(\d{3})\))? optional capture group for escaped ")", w/ positive lookbehind for 3 digits and open "("
// [- ]? optional inclusion of space or hyphen
// (\d{3}) three digits in a row
// [- ]? optional inclusion of space or hyphen
// (\d{4})$ four digits in a row with $ char to signify regex pattern match preceding it
