function solve(input){
    let name = input[0]
    let pass = input[1]
    let data = input[2]
    let index = 3
    while (data != pass){
        if (index==input.length){
            return
        }
        data = input[index]
        index ++
    }
    console.log(`Welcome ${name}!`)
}

solve(["Gosho", "secret", "secret"])