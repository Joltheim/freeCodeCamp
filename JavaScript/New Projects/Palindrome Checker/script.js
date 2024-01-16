const checkButton = document.getElementById("check-btn")
const userSubmit = document.getElementById("text-input")
const result = document.getElementById("result")
let defaultState = ""

const checkInput = () => {
    let regex = /[^a-zA-Z0-9]/g
    let filteredStr = userSubmit.value.replace(regex, "").toLowerCase()
    console.log(filteredStr)

    if (userSubmit.value.length == 0) { alert("Please input a value")}
    if (filteredStr === filteredStr.split("").reverse().join("")) {
            result.innerText = `${userSubmit.value} is a palindrome!`
            userSubmit.value = defaultState
    } else {
        result.innerText = `${userSubmit.value} is not a palindrome`
        userSubmit.value = defaultState
    }
    
}

checkButton.addEventListener("click", checkInput)