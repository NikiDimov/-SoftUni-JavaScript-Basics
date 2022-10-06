function solve(input){
    let floors = Number(input[0])
    let rooms = Number(input[1])
    for (let i = floors; i>0; i--){
        let printline = ''
        for (let y = 0; y<rooms; y++){
            if (i==floors){
                printline+=`L${i}${y} `
            }
            else if (i%2!=0){
                printline+=`A${i}${y} `
            }
            else if (i%2==0){
                printline+=`O${i}${y} `
            }
        }
        console.log(printline)   
    }
}

solve(["6", "4"])