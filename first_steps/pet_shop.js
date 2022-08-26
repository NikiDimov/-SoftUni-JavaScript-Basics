function ShopOutcomes(input){
    let dogPacks = Number(input[0])
    let catPacks = Number(input[1])
    let DOG_FOOD_PRICE = 2.5
    let CAT_FOOD_PRICE = 4
    let result = dogPacks*DOG_FOOD_PRICE + catPacks*CAT_FOOD_PRICE
    console.log(`${result} lv.`)
}
ShopOutcomes(["5 ","4 "])