function solve(input){
    const stepsGoal = 10000
    let index = 0
    let totalSteps = 0
    while (true){
        if (index==input.length){
            break
        }
        if (input[index]=="Going home"){
            totalSteps+=Number(input[index+1])
            if (totalSteps>=stepsGoal){
                break
            }
            console.log(`${stepsGoal-totalSteps} more steps to reach goal.`)
            return
        }
        totalSteps+=Number(input[index])
        index++
    }
    console.log("Goal reached! Good job!")
    console.log(`${totalSteps-stepsGoal} steps over the goal!`)
}

solve(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"])

