function check(input){
    let guess = Number(input[0])
    if (guess < 100){
        console.log("Less than 100")
    }
    else if (guess <= 200){
        console.log("Between 100 and 200")
    }
    else {
        console.log("Greater than 200")
    }
}

check(["210"])