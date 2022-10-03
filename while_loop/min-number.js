function getMinNum(input){
    let index = 1
    let current = input[0]
    let min = Number(current)
    while (current!="Stop"){
        if (Number(current)<min){
            min = current
        }
        current = input[index]
        index++
    }
    console.log(min)
}

getMinNum(["100",
"99",
"80",
"700",
"Stop"])