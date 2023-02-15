function palindrome(str) {
  
  //convert str to lowercase
  let lowerStr = str.toLowerCase();

  //remove punctuation & spaces
  let regex = /[.,\/#!$%\^&\*;:{}=\-_`~()\s]/gi
  let filterStr = lowerStr.replace(regex,"")

  //reverse string
  let reverseStr = filterStr.split("").reverse().join("")  
  console.log(filterStr)
  console.log(reverseStr)

  //compare str to reverse str
  if (filterStr == reverseStr) {
    return true;
  } else { 
    return false;
  }

}

palindrome("race car");