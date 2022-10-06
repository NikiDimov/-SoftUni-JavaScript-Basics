function solve(input){
    let start = Number(input[0])
    let end = Number(input[1])
    let printline = ''
    for (let i = start; i<=end; i++){
        let text = i.toString()
        let odd = 0
        let even = 0
        for (let j = 0; j<6; j++){
            if (j%2==0){
                even += Number(text[j])
            }
            else {
                odd += Number(text[j])
            }
        }
        if (odd == even){
            printline += `${text} `
        }
    }
    console.log(printline)
}

solve(["100000",
"100050"])
