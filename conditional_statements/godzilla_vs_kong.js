function calculateBudget(input){
    let movieBudget = Number(input[0])
    let extras = Number(input[1])
    let outfit = Number(input[2])
    let movieDecor = movieBudget*0.1
    if (extras > 150){
        outfit *= 0.9
    }
    let totalMoney = movieDecor + extras*outfit
    if (totalMoney > movieBudget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalMoney-movieBudget).toFixed(2)} leva more.`)
    }
    else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(movieBudget-totalMoney).toFixed(2)} leva left.`)
    }
}

calculateBudget(["9587.88",

"222",

"55.68"])