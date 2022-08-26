function LandScaping(input){
    let squares = Number(input[0])
    let PRICE_PER_SQUARE = 7.61
    let total_price = squares*PRICE_PER_SQUARE
    let discount = total_price*0.18
    console.log(`The final price is: ${total_price-discount} lv.`)
    console.log(`The discount is: ${discount} lv.`)
}
LandScaping(["550"])