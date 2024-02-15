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
    //add userInput to phone # array & keep limit to 5
    phoneNumberArr.unshift(userInput.value)
    if(phoneNumberArr.length > 5) {
        phoneNumberArr.pop()
    }

    //error popup for empty userInput field
    if(!userInput.value) {
        alert("Please provide a phone number")
        return
    }

    //check for phone number format validity
    let regExp = /^1?[ -]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/gi

    //returned HTML    
        resultsField.innerHTML = phoneNumberArr.map((str) => {
            let isValid = regExp.test(str)
            regExp.lastIndex = 0;
            return `<p>${isValid ? "Valid" : "Invalid"} US number: ${str}</p>`
    }).join('')

    userInput.value = ""
}

checkBtn.addEventListener("click", checkValidity )
document.addEventListener("keydown", enterKey)
clearBtn.addEventListener("click", clearNumbers)

//ISSUE - Array Mapping method would not pass FCC tests
//Solution - Deprecated file to backup-script.js and created new script.js file