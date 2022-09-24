function solve(input){
    let actor = input[0]
    let actorsPoints = Number(input[1])
    let judges = Number(input[2])
    for (let i = 3; i< judges*2+3; i+=2){
        actorsPoints+=(input[i].length*Number(input[i+1]))/2 
        if (actorsPoints>=1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${actorsPoints.toFixed(1)}!`)
            return
        } 
    } 
    console.log(`Sorry, ${actor} you need ${(1250.5-actorsPoints).toFixed(1)} more!`)
    
}

solve(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])


