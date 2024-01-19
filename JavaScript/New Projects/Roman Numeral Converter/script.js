const convertBtn = document.getElementById("convert-btn")
const inputField = document.getElementById("number")
const result = document.getElementById("output")
const resultContainer = document.querySelector(".result-container")


const convertNumeral = () => {
    //Preliminary Checks
    if (!inputField.value.length) {
        result.innerHTML = "Please enter a valid number"
        result.style.backgroundColor = "red"
        return;
    } else if (inputField.value <= 0) {
        result.innerHTML = "Please enter a number greater than or equal to 1"
        result.style.backgroundColor = "red"
        return;
    } else if (inputField.value > 3999) {
        result.innerHTML = "Please enter a number less than or equal to 3999"
        result.style.backgroundColor = "red"
        return
    }

    //Convert to Roman Numeral
    let tempNum = inputField.value;
    let romanNum = "";
    let symbols = [
        { value: 1000, symbol: "M" },
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];

    for (let i = 0; i < symbols.length; i++) {
        while (tempNum >= symbols[i].value) {
            tempNum -= symbols[i].value;
            romanNum += symbols[i].symbol;
        }
    }
    
    if (romanNum) {
        resultContainer.classList.remove("hidden");
        result.classList.remove("hidden");
        result.style.backgroundColor = "";
        result.innerHTML = romanNum;
    } else {
        resultContainer.classList.add("hidden");
        result.classList.add("hidden")
    }
}   

convertBtn.addEventListener("click", convertNumeral)