function solve(input){
    let text = input[0]
    let result = 0
    function checker(a){
        switch (a){
            case "a":
                return 1
            case "e":
                return 2
            case "i":
                return 3
            case "o":
                return 4
            case "u":
                return 5
            default:
                return 0
        }
    }
    for (let i=0; i<text.length; i++){
        result += checker(text[i])
    }
    console.log(result)
}

solve(["bamboo"])
