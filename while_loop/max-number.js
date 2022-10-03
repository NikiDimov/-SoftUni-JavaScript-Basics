function getMaxNum(input){
    let index = 1
    let current = input[0]
    let max = Number(current)
    while (current!="Stop"){
        if (Number(current)>max){
            max = current
        }
        current = input[index]
        index++
    }
    console.log(max)
}

getMaxNum(["100",
"99",
"80",
"700",
"Stop"])