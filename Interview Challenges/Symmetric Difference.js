function sym(...args) {
    let result = []

    for(let i = 0; i < args.length - 1; i++) {
        [...result, ...(args[i].filter((num) => !args[i + 1].includes(num)))]
        [...result, ...(args[i + 1].filter((num) => !args[i].includes(num)))]
        console.log(result)
    }
    console.log("final ", result)
    return result
    
}
  
  sym([1, 2, 3], [5, 2, 1, 4]);


//  FROM CHATGPT
//   function sym(...args) {
//     let result = [];

//     for (let i = 0; i < args.length; i++) {
//         result = [
//             ...result.filter((num) => !args[i].includes(num)),
//             ...args[i].filter((num) => !result.includes(num))
//         ];

//         console.log(result);
//     }

//     console.log("final", result);
//     return result;
// }

// sym([1, 2, 3], [5, 2, 1, 4]);