function loop(input){
    let target = Number(input[0])
    let total = 0
    let index = 1
    while (total<target){
        if (index==input.length){
            return
        }
        total+=Number(input[index])
        index++
    }
    console.log(total)
}

loop(["20", "1", "2", "3", "4", "5", "6"])