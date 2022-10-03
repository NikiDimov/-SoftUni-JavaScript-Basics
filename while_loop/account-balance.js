function solve(input){
    let total = 0
    let index = 0
    let current = input[index]
    while (current!="NoMoreMoney"){
        if (input[index]<0){
            console.log("Invalid operation!")
            break
        }     
        total+=Number(current)
        console.log(`Increase: ${Number(current).toFixed(2)}`)
        index++
        current = input[index]
    }
    console.log(`Total: ${total.toFixed(2)}`)
}

solve(["5.51",

"69.42",

"100",

"NoMoreMoney"])