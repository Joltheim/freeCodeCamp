function convertToRoman(num) {
  let tempNum = num
  let romanNum = ""

//decrement tempNum while adding romanNum to String
  while(tempNum > 0) {
      if (tempNum >= 1000) {
        tempNum -= 1000
        romanNum += "M"
      } else if (tempNum >= 900) {
        tempNum -= 900
        romanNum += "CM"
      } else if (tempNum >= 500){
        tempNum -= 500
        romanNum += "D"
      } else if (tempNum >= 400){
        tempNum -= 400
        romanNum += "CD"
      } else if (tempNum >= 100){
        tempNum -= 100
        romanNum += "C"
      } else if (tempNum >= 90){
        tempNum -= 90
        romanNum += "XC"
      } else if (tempNum >= 50){
        tempNum -= 50
        romanNum += "L"
      } else if (tempNum >= 40){
        tempNum -= 40
        romanNum += "XL"
      } else if (tempNum >= 10){
        tempNum -= 10
        romanNum += "X"
      } else if (tempNum >= 9){
        tempNum -= 9
        romanNum += "IX"
      } else if (tempNum >= 5){
        tempNum -= 5
        romanNum += "V"
      } else if (tempNum >= 4){
        tempNum -= 4
        romanNum += "IV"
      } else if (tempNum >= 1){
        tempNum -= 1
        romanNum += "I"
      } 
    }
  console.log(romanNum)
  return romanNum;
}

convertToRoman(22);


/*AI code suggestion

function convertToRoman(num) {
  let tempNum = num;
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

  console.log(romanNum);
  return romanNum;
} */

