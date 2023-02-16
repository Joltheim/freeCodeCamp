function checkCashRegister(price, cash, cid) {
  let cidValue = 0;
  let changeArray = [];

  //round to two decimals (avoid binary floating pt errors)
  function round(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  //determine cidValue
  for (let i = 0; i < cid.length; i++) {
    cidValue = round(cid[i][1] + cidValue, 2);
  }
  console.log("cidValue = " + cidValue);

  //determine changeDue
  let changeDue = round(cash - price, 2);
  console.log("changeDue = " + changeDue);

  //array of currency values to calc # of units of each currency in cid, ex: {QUARTERS, 1.25} = {QUARTERS, 5}
  const currency = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
  ];

  //Cash Register Operations for making change
  if (changeDue > 0 && changeDue !== cidValue) {
    for (let i = cid.length - 1; i >= 0; i--) {  //iterate through cid array backwards, starting with highest values
      let currencyName = cid[i][0]   //ex: "QUARTER"
      let currencyValue = cid[i][1]   //ex: 0.25
      let currencyToReturn = 0
      let currencyInDrawer = currencyValue / currency[i][1]  //i.e. how many quarters? ex: 2.25 in quarters = 2.25 / .25 = 9
      while (changeDue >= currency[i][1] && currencyInDrawer > 0) {  //change owed > currency unit && # of currency units > 0
        changeDue = round(changeDue - currency[i][1], 2)  //subtract one unit of currency per loop from changeDue
        currencyToReturn++  //add one unit of currency to change returned to customer
        currencyInDrawer--  //remove one unit of currency from cid
      }
      if (currencyToReturn > 0) {
        changeArray.push([currencyName, currencyToReturn * currency[i][1]])
        console.log(changeArray)
      }
    }
  }

  //determine if cid has enough funds
  if (changeDue == cidValue) {   //register to be closed as customer cleaned out the drawer
    return {status: "CLOSED", change: [...cid]};
  } else if (changeDue > cidValue || changeDue !== 0) {  //cid doesn't have enough change or unable to make exact change
    return {status: "INSUFFICIENT_FUNDS", change: []};
  } else {       //cid was able to make proper change amount
    return {status: "OPEN", change: changeArray};
  }
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));