function solve(input){
    let judges = Number(input[0])
    let data = input[1]
    let index = 1
    let totalGrade = 0
    let counter = 0
    while (data!="Finish"){
        let discipline = data
        let currentGrade = 0
        for (let i=1; i<=judges; i++){
            currentGrade+=Number(input[index+i])
            totalGrade+=Number(input[index+i])
            counter++
        }
        console.log(`${discipline} - ${(currentGrade/judges).toFixed(2)}.`)
        index+=judges+1
        data = input[index]
    }
    console.log(`Student's final assessment is ${(totalGrade/counter).toFixed(2)}.`)
}

solve(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"])


