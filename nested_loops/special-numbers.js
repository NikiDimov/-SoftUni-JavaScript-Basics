function solve(input){
    let num = Number(input[0])
    let printLine= ''
    for (let i=1; i<=9; i++){
        for (let y=1; y<=9; y++){
            for (let x=1; x<=9; x++){
                for (let z=1; z<=9; z++){
                    if (num%i==0 && num%y==0 && num%x==0 && num%z==0){
                        printLine+=`${i}${y}${x}${z} `

                    }
                }
            }
        }
    }
    console.log(printLine)
}
solve(["3"])