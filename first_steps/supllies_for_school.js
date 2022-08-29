function moneyNeeded(input){
    let pensPackets = Number(input[0])
    let markersPackets = Number(input[1])
    let detergentLiters = Number(input[2])
    let discountPercent = Number(input[3])
    const pensPacketsPrice = 5.8
    const markersPacketsPrice = 7.2
    const detergentLitersPrice = 1.2
    let total = (pensPackets*pensPacketsPrice + markersPackets*markersPacketsPrice + 
        detergentLiters*detergentLitersPrice)*(100-discountPercent)/100
    console.log(total)
}

moneyNeeded(["2 ","3 ","4 ","25 "])