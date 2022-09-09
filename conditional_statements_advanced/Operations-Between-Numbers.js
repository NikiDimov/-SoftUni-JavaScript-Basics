function calculator(input){
    let N1 = Number(input[0])
    let N2 = Number(input[1])
    let operator = input[2]
    let evenOrOdd = NaN
    let result = 0
    let output = NaN
    function evenOdd(r){
        if (r%2==0){
            return "even"
        }
        else {
            return "odd"
        }
    }
    
    if (operator=="+"){
        result = N1 + N2
        evenOrOdd = evenOdd(result)
    }
    else if (operator=="-"){
        result = N1 - N2
        evenOrOdd = evenOdd(result)
        }
    else if (operator=="*"){
        result = N1 * N2
        evenOrOdd = evenOdd(result)
    }
    else if (operator=="/"){
        if (N2==0){
            console.log(`Cannot divide ${N1} by zero`)
            return
        }
        result = (N1/N2).toFixed(2)
    }
    else if (operator=="%"){
        if (N2==0){
            console.log(`Cannot divide ${N1} by zero`)
            return
        }
        result = N1%N2
    }
    output = `${N1} ${operator} ${N2} = ${result}`
    if (["+", "-", "*"].includes(operator)){
        output+=` - ${evenOrOdd}`
    }
    console.log(output)
}

calculator(["2", "2", "/"])

