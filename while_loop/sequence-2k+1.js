function solve(input){
    let target = Number(input[0])
    let num = 1
    while (num<=target){
        console.log(num)
        num = 2*num+1
    }
}

solve(["31"])