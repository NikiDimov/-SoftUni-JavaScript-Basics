function solve(input){
    let start = Number(input[0])
    let end = Number(input[1])
    let sum = 0
    let array = []
    for(let i = start; i<=end; i++){
        if (i%9==0){
            sum+=i
            array.push(i)
        }
    }
    console.log(`The sum: ${sum}`)
    for(let j=0; j<array.length; j++){
        console.log(array[j])
    }
}
solve(["100", "200"])
