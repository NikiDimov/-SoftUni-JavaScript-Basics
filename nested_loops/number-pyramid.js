function pyramid(input){
    let n = Number(input[0])
    let counter = 1
    for(let row=1; row<=n; row++){
        let printline = ''
        for (let col=1; col<=row; col++){
            if (counter>n){
                break
            }
            printline += counter + " "
            counter ++
        }
        console.log(printline)
        if (counter>n){
            break
        }
    }
}

pyramid(["25"])