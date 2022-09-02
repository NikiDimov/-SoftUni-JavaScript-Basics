function calculateBudget(input){
    let PetersBudget = Number(input[0])
    let totalVideoCards = Number(input[1])
    let totalProcessors = Number(input[2])
    let totalRAMs = Number(input[3])
    const videoCardPrice = 250
    let processorPrice = totalVideoCards*videoCardPrice*0.35
    let RAMsPrice = totalVideoCards*videoCardPrice*0.1
    let totalPrice = totalVideoCards*videoCardPrice + totalProcessors*processorPrice + totalRAMs*RAMsPrice
    if (totalVideoCards>totalProcessors){
        totalPrice *= 0.85
    }
    if (PetersBudget>=totalPrice){
        console.log(`You have ${(PetersBudget-totalPrice).toFixed(2)} leva left!`)
    }
    else {
        console.log(`Not enough money! You need ${(totalPrice-PetersBudget).toFixed(2)} leva more!`)
    }
}

calculateBudget(["920.45",

"3",

"1",

"1"])