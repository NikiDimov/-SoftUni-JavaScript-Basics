function solve(input){
    let firstNum = Number(input[0])
    let lastNum = Number(input[1])
    let magicNum = Number(input[2])
    let counter = 0
    for (let i = firstNum; i<=lastNum; i++){
        for(let y = firstNum; y<=lastNum; y++){
            counter++
            if (i+y==magicNum){
                console.log(`Combination N:${counter} (${i} + ${y} = ${magicNum})`)
                return
            }
        }
    }
    console.log(`${counter} combinations - neither equals ${magicNum}`)
}

solve(["88", "888", "1000"])