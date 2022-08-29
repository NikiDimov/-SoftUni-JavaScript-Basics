function outcomesCalculator(input){
    const nylonPrice = 1.5
    const paintPrice = 14.5
    const paintThinnerPrice = 5
    let nylon = Number(input[0])
    let paint = Number(input[1])
    let thinner = Number(input[2])
    let neededWorkingHours = Number(input[3])
    total = (nylon+2)*nylonPrice + paint*paintPrice*1.1 + paintThinnerPrice*thinner + 0.4
    workers_outcomes = total*0.3*neededWorkingHours
    console.log(total+workers_outcomes)
}
outcomesCalculator(["10 ","11 ","4 ","8 "])
