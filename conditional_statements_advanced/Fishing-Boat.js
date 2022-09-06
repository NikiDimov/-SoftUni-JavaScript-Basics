function solve(input){
    let budget = Number(input[0])
    let season = input[1]
    let fishers = Number(input[2])
    let total = 0 
    if (season == "Spring"){
        total+=3000
    }
    else if (season == "Summer" || season == "Autumn"){
        total += 4200
    }
    else if (season == "Winter"){
        total+= 2600
    }
    if (fishers<=6){
        total*=0.9
    }
    else if(fishers>7 && fishers<=11){
        total*=0.85
    }
    else if (fishers>12){
        total*=0.75
    }
    if (fishers%2 == 0 && season != "Autumn"){
        total*=0.95
    }
    if (budget>=total){
        console.log(`Yes! You have ${(budget-total).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money! You need ${(total-budget).toFixed(2)} leva.`)
    }
}

solve(["3600",

"Autumn",

"6"])