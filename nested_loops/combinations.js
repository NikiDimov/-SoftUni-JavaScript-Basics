function solve(input){
    let target = Number(input[0])
    let counter = 0
    for (let x1=0; x1<=target; x1++){
        for (let x2=0; x2<=target; x2++){
            for (let x3=0; x3<=target; x3++){
                if (x1+x2+x3==target){
                    counter++
                    break
                }
            }
        }
    }
    console.log(counter)
}

solve(["25"])