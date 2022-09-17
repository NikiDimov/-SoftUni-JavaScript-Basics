function solve(input){
    let month = input[0]
    let days = Number(input[1])
    let totalPriceForStudio = 0
    let totalPriceForApartm = 0
    if (month=="May" || month=="October"){
        totalPriceForStudio += days*50
        totalPriceForApartm += days*65
        if (days>14){
            totalPriceForStudio*=0.7
            totalPriceForApartm*=0.9
        }
        else if (days>7){
            totalPriceForStudio*=0.95
        }
    }
    else if (month == "June" || month == "September"){
        totalPriceForStudio += days*75.2
        totalPriceForApartm += days*68.7
        if (days>14){
            totalPriceForStudio*=0.8
            totalPriceForApartm*=0.9
        }
    }
    else if (month == "July" || month == "August"){
        totalPriceForStudio += days*76
        totalPriceForApartm += days*77
        if (days>14){
            totalPriceForApartm*=0.9
        }
    }
    console.log(`Apartment: ${totalPriceForApartm.toFixed(2)} lv.`)
    console.log(`Studio: ${totalPriceForStudio.toFixed(2)} lv.`)
}

solve(["August","20"])
