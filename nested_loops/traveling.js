function travel(input){
    let index = 0
    let data = input[index]
    while (data!="End"){
        if (isNaN(Number(data))){
            let destination = data
            console.log(`Going to ${destination}!`)
        }
        index++
        data = input[index]
    }
}

travel(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

