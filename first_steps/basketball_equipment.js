function basketballOutcome(input){
    let fee = Number(input[0])
    let snickersPrice = fee*0.6
    let equipmentPrice = snickersPrice*0.8
    let ballPrice = equipmentPrice*0.25
    let accessoriesPrice = ballPrice*0.2
    let total = fee + snickersPrice + equipmentPrice + ballPrice + accessoriesPrice
    console.log(total) 
}
basketballOutcome(["365"])