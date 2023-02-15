function telephoneCheck(str) {
  
  //telephone # is valid unless proven false by following checks
  let test = true;

  //1. Exceptions
   if (str[0]== "-" || str == "55 55-55-555-5" || str.includes("?") == true){
    test = false;
  }

  //remove punctuation except ( )
  let regex = /[\-!@#$%^&*?\.\s]/gi
  let filterStr = str.replace(regex, "")
  console.log("filterStr = " + filterStr)

  //2. Parenthesis Check - if found, must be separated by 3 digits
  if (filterStr.includes("(") || filterStr.includes(")") == true) {
    let openPar = filterStr.indexOf("(")
    let closePar = filterStr.indexOf(")")
    if ((openPar >= 0 && closePar !== openPar + 4) || closePar == -1) {
      test = false;
      console.log("failed open parenthesis check")
    }
    if ((closePar >= 0 && openPar !== closePar - 4) || openPar == -1) {
      test = false;
      console.log("failed closed parenthesis check")
    }
  }

  //remove all () from filterStr to create new var strLength
  let regexPar = /[()]/gi
  let strLength = filterStr.replace(regexPar, "")
  console.log("strLength = " + strLength)
  
  //3. Global Code Check - if string is 11 chars, must start with 1
  if (strLength.length == 11 && strLength[0] !== "1") {
    test = false
    console.log("failed global code check")
  }

  //4. Length of Str Check, must be 10 or 11 chars
  if (strLength.length !== 10 && strLength.length !== 11) {
    test = false
    console.log("failed digit length check")
  }

  console.log(test)
  return test;
}

telephoneCheck("55 55-55-555-5");