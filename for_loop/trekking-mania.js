function solve(input){
    let groups = Number(input[0])
    let people = 0
    let Musala = 0
    let Monblan = 0
    let Kilimandjaro = 0
    let K2 = 0
    let Everest = 0
    for (let i=1; i<=groups; i++){
        let current = Number(input[i])
        people+=current
        if (current<=5){
            Musala+=current
        }
        else if (current>=6 && current<=12){
            Monblan+=current
        }
        else if (current>=13 && current<=25){
            Kilimandjaro+=current
        }
        else if (current>=26 && current<=40){
            K2 +=current
        }
        else if (current>=41){
            Everest+=current
        }
    }
    let all = [Musala, Monblan, Kilimandjaro, K2, Everest]
    for (let i=0; i<5; i++){
        console.log(`${(all[i]/people*100).toFixed(2)}%`)
    }
}

solve(["5",
"25",
"41",
"31",
"250",
"6"])
