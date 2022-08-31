function goToTrip(input){
    const jigsawPrice = 2.6
    const dollPrice = 3
    const bearPrice = 4.1
    const minionPrice = 8.2
    const truckPrice = 2
    let tripPrice = Number(input[0])
    let totalJigsaws = Number(input[1])
    let totalDolls = Number(input[2])
    let totalBears = Number(input[3])
    let totalMinions = Number(input[4])
    let totalTrucks = Number(input[5])
    let totalToys = totalJigsaws+totalDolls+totalBears+totalMinions+totalTrucks
    let totalPrice = totalJigsaws*jigsawPrice + 
        totalDolls*dollPrice + totalBears*bearPrice + 
        totalMinions*minionPrice + totalTrucks*truckPrice
    if (totalToys>=50){
        totalPrice*=0.75
    }
    totalPrice*=0.9
    if (totalPrice>=tripPrice){
        console.log(`Yes! ${(totalPrice-tripPrice).toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${(tripPrice-totalPrice).toFixed(2)} lv needed.`)
    }

}

goToTrip(["40.8", "20","25","30","50","10"])