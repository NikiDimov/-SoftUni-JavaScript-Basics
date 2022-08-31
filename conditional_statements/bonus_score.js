function points(input){
    let currentPoints = Number(input[0])
    let extraPoints = NaN
    if (currentPoints<=100){
        extraPoints = 5
    }
    else if (currentPoints<=1000){
        extraPoints = currentPoints*0.2
    }
    else {
        extraPoints = currentPoints*0.1
    }
    if (currentPoints%2 == 0){
        extraPoints += 1
    }
    if (currentPoints%10 == 5){
            extraPoints += 2
    }
    console.log(extraPoints)
    console.log(extraPoints+currentPoints)
}

points(["15875"])