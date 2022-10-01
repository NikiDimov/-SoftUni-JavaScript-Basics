function solve(input){
    let totalSpace = Number(input[0])*Number(input[1])*Number(input[2])
    let index = 3
    let box = input[index]
    let currentSpace = 0
    while (box!="Done"){
        currentSpace+=Number(input[index])
        if (currentSpace>totalSpace){
            console.log(`No more free space! You need ${currentSpace-totalSpace} Cubic meters more.`)
            return
        }
        index++
        if (index==input.length){
            break
        }
        box = input[index]
    }
    if (totalSpace>=currentSpace){
        console.log(`${totalSpace-currentSpace} Cubic meters left.`)
    }
}

solve(["10", 
"1",
"2",
"4", 
"6",
"Done"])

