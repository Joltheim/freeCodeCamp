const checkButton = document.getElementById("check-btn")
const userSubmit = document.getElementById("text-input")
const result = document.getElementById("result")
let defaultState = ""

const checkInput = () => {
    //check if empty string (no input)
    if (userSubmit.value.length == 0) {
        alert("Please input a value")
    } else if (userSubmit.value === userSubmit.value
        .split("").reverse().join("")) {
            result.innerText = `${userSubmit.value}'s a palindrome!`
            userSubmit.value = defaultState
    } else {
        result.innerText = `Sorry ${userSubmit.value}'s not a palindrome`
        userSubmit.value = defaultState
    }
}

checkButton.addEventListener("click", checkInput)