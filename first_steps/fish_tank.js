function Aquarium(input){
    let length = Number(input[0])
    let width = Number(input[1])
    let hight = Number(input[2])
    let percentage = Number(input[3])
    let volume = length*width*hight*0.001
    let totalWater = volume-volume*percentage/100
    console.log(totalWater)
}
Aquarium(["105 ","77 ","89 ","18.5 "])