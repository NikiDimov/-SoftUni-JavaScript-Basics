function solve(input){
    let age = Number(input[0])
    let priceMachine = Number(input[1])
    let priceToy = Number(input[2])
    let totalMoney = 0
    let getMoney = 10
    for (let i=1; i<=age; i++){
        if (i%2==0){
            totalMoney+=getMoney-1
            getMoney+=10
        }
        else {
            totalMoney+=priceToy
        }
    }
    if (totalMoney>=priceMachine){
        console.log(`Yes! ${(totalMoney-priceMachine).toFixed(2)}`)
    }
    else {
        console.log(`No! ${(priceMachine-totalMoney).toFixed(2)}`)
    }
}

solve(["21", "1570.98", "3"])