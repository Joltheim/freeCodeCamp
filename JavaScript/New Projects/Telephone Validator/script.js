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

    //check for phone number format validity
    let regExp = /^1?[ -]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/gi
    let isValid = regExp.test(userInput.value)

    //returned HTML    
    resultsField.innerHTML += `<p>${isValid ? "Valid" : "Invalid"} US number: ${userInput.value}</p>`

    userInput.value = ""
}

checkBtn.addEventListener("click", checkValidity )
document.addEventListener("keydown", enterKey)
clearBtn.addEventListener("click", clearNumbers)

//failed tests
//1. 555)555-5555 - missing open par
//2. (555-555-5555 - missing closing par

//orig regExp = /^1?[ -]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/gi
//let regExp = /^1?[ -]?    (\(? \d{3} \)?)    [- ]?\d{3}[- ]?\d{4}$/gi
