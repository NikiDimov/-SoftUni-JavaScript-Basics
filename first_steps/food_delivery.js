function foodPrice(input){
    const chickenPrice = 10.35
    const fishPrice = 12.40
    const vegetarianMenuePrice = 8.15
    let chickenMenue = Number(input[0])
    let fishMenue = Number(input[1])
    let vegetarianMenue = Number(input[2])
    total = (chickenPrice*chickenMenue + fishPrice*fishMenue + vegetarianMenue*vegetarianMenuePrice)*1.2 + 2.5
    console.log(total)

}

foodPrice(["2 ","4 ","3 "])