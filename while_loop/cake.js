function solve(input){
    let totalPieces = Number(input[0])*Number(input[1])
    let currentPiecs = 0
    let index = 2
    let data = input[index]
    while (data!="STOP"){
        currentPiecs+=Number(input[index])
        if (currentPiecs>=totalPieces){
            console.log(`No more cake left! You need ${currentPiecs-totalPieces} pieces more.`)
            return
        }  
        index++
        if (index==input.length){
            break
        }
        data = input[index]   
    }
    if (currentPiecs<totalPieces){
        console.log(`${totalPieces-currentPiecs} pieces are left.`)
    }   
}

solve(["10",
"10",
"20",
"20",
"20",
"20",
"21"])
