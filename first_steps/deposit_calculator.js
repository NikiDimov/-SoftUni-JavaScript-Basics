function calculator(input){
    let deposit = Number(input[0])
    let deadline = Number(input[1])
    let rate = Number(input[2])
    let total = deposit+(deadline*((deposit*rate/100)/12))
    console.log(total)
}

calculator(["200","3","5.7"])