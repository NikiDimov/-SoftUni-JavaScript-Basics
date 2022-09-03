function checkForProuct(input){
    const fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"]
    const vegetables = ["tomato", "cucumber", "pepper", "carrot"]
    let product = input[0]
    if (fruits.includes(product)){
        console.log("fruit")
    }
    else if (vegetables.includes(product)){
        console.log("vegetable")
    }
    else {
        console.log("unknown")
    }
}

checkForProuct(["banana"])