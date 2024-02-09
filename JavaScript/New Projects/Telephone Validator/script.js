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

    phoneNumberArr.unshift(userInput.value)
    if(phoneNumberArr.length > 5) {phoneNumberArr.pop()}

    if(!userInput.value) {
        alert("Please provide a phone number")
        return
    }

    //check for phone number format validity
    let regExp = /^1?[ -]?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/gi

    //returned HTML    
        resultsField.innerHTML = phoneNumberArr.map((str) => {
            if(!regExp.test(str)) {
                return `<p>Invalid US number: ${str}</p>`
            } else {
                return `<p>Valid US number: ${str}</p>`
            }
    }).join('')
}

checkBtn.addEventListener("click", checkValidity )
document.addEventListener("keydown", enterKey)
clearBtn.addEventListener("click", clearNumbers)

