function solve(input){
    let tournaments = Number(input[0])
    let startingPoints = Number(input[1])
    let extraPoints = 0
    let winnings = 0
    for(let i=2; i<tournaments+2; i++){
        if (input[i]=="W"){
            extraPoints += 2000
            winnings += 1
        }
        else if (input[i]=="F"){
            extraPoints += 1200
        }
        else if (input[i]=="SF"){
            extraPoints += 720
        }
    }
    console.log(`Final points: ${startingPoints+extraPoints}`)
    console.log(`Average points: ${Math.floor(extraPoints/tournaments)}`)
    console.log(`${(winnings/tournaments*100).toFixed(2)}%`)
}

solve(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"])
