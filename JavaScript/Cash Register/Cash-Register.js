function checkCashRegister(price, cash, cid) {
  
    let cidUpdate = cid.slice()
    let cidValue = 0
    console.log(cidUpdate)
  
    //round to two decimals (avoid binary floating pt errors)
    function round(number, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(number * factor) / factor;
    }
  
    //determine cidValue
    for (let i = 0; i < cid.length; i++) {
      cidValue = round(cid[i][1] + cidValue, 2)
    }
    console.log("cidValue = " + cidValue)
    
    //determine changeDue
    let changeDue = cash - price 
    console.log("changeDue = " + changeDue)
  
    //From AI for convert changeDue into items from cid
    /*let change = [];
    const currencyValues = [
      ["ONE HUNDRED", 100],
      ["TWENTY", 20],
      ["TEN", 10],
      ["FIVE", 5],
      ["ONE", 1],
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01],
    ];
    for (let i = 0; i < currencyValues.length; i++) {
      const currency = currencyValues[i][0];
      const value = currencyValues[i][1];
      if (changeDue >= value) {
        const available = cidUpdate[i][1];
        const quantity = Math.floor(available / value);
        const used = Math.min(quantity, Math.floor(changeDue / value));
        const amount = round(used * value, 2);
        if (used > 0) {
          changeDue = round(changeDue - amount, 2);
          change.push([currency, amount]);
          cidUpdate[i][1] -= amount;
        }
      }
    }
  
    /*
    //convert changeDue into items from cid
    if (changeDue > 0) {
      while (changeDue > 0) {
      for (let i = cidUpdate.length - 1; i >= 0; i--) {
     
        }
      }
    }
    */
  
    //determine if cid has enough funds
    if (changeDue > cidValue) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (changeDue == cidValue) {
      return {status: "CLOSED", change: [...cid]}
    } else if (changeDue < cidValue) {
      console.log({status: "OPEN", change: [changeDue]})
      return {status: "OPEN", change: [changeDue]}
    }
  
  }
  
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);