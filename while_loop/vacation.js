function solve(input){
    let moneyNeeded = Number(input[0])
    let availableMoney = Number(input[1])
    let spend = false
    let countSpends = 5
    let index = 2
    let days = 0
    while (true){
        days++
        if (input[index]=="spend"){
            spend = true
            countSpends--
            if (countSpends == 0){
                console.log(`You can't save the money.`)
                console.log(days)
                return
            }
            availableMoney-=Number(input[index+1])
            if (availableMoney<=0){
                availableMoney=0
            }
        }
        else if (input[index]=="save"){
            spend = false
            countSpends = 5
            availableMoney+=Number(input[index+1])
            if (availableMoney>=moneyNeeded){
                console.log(`You saved the money for ${days} days.`)
                return
            }
        }
        index+=2
    }

}

solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])


