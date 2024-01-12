function rot13(str) {
  let newStr = ""
  let cipher = [
  {input: "A", output: "N"},
  {input: "B", output: "O"},
  {input: "C", output: "P"},
  {input: "D", output: "Q"},
  {input: "E", output: "R"},
  {input: "F", output: "S"},
  {input: "G", output: "T"},
  {input: "H", output: "U"},
  {input: "I", output: "V"},
  {input: "J", output: "W"},
  {input: "K", output: "X"},
  {input: "L", output: "Y"},
  {input: "M", output: "Z"},
  {input: "N", output: "A"},
  {input: "O", output: "B"},
  {input: "P", output: "C"},
  {input: "Q", output: "D"},
  {input: "R", output: "E"},
  {input: "S", output: "F"},
  {input: "T", output: "G"},
  {input: "U", output: "H"},
  {input: "V", output: "I"},
  {input: "W", output: "J"},
  {input: "X", output: "K"},
  {input: "Y", output: "L"},
  {input: "Z", output: "M"},
  ]

  for(let i = 0; i < str.length; i++) {
    let found = false;
    for (let j = 0; j < cipher.length; j++) {
      if (cipher[j].input === str[i]) {
        found = true;
        newStr += cipher[j].output
        //console.log(newStr)
      }
    }
      if (found == false) {
        newStr += str[i]
      }
  }
  console.log(newStr)
  return newStr;
}

rot13("SERR PBQR PNZC");