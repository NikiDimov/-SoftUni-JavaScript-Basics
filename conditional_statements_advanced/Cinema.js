function calculateIncomes(input){
    let typeProjection = input[0]
    let rows = Number(input[1])
    let cols = Number(input[2])
    let money = 0
    if (typeProjection=="Premiere"){
        money = 12
    }
    else if (typeProjection=="Normal"){
        money = 7.5
    }
    else if (typeProjection=="Discount"){
        money = 5
    }
    let result = `${(rows*cols*money).toFixed(2)} leva`
    console.log(result)
    }

calculateIncomes(["Normal", "21", "13"])