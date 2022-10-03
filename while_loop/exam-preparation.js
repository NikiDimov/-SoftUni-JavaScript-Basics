function solve(input){
    let tries = Number(input[0])
    let index = 1
    let problem = input[index]
    let totalGrade = 0
    let numberOfProblems = 0
    let lastProblem = NaN
    while (problem!="Enough"){
        numberOfProblems++
        lastProblem = input[index]
        let grade = Number(input[index+1])
        totalGrade+=grade
        if (grade<=4){
            tries--
            if (tries<=0){
                console.log(`You need a break, ${input[0]} poor grades.`)
                return
            }
        }
        index+=2
        problem = input[index]
    }
    console.log(`Average score: ${(totalGrade/numberOfProblems).toFixed(2)}`)
    console.log(`Number of problems: ${numberOfProblems}`)
    console.log(`Last problem: ${lastProblem}`)
}

solve(["2",
"Income",
"3",
"GameInfo",
"6",
"BestPlayer",
"4"])

