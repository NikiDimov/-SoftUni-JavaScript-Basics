function getArea(input){
    let figureType = input[0]
    let side = Number(input[1])
    let area = NaN
    if (figureType=="square"){
        area = side*side
    }
    else if (figureType=="rectangle"){
        area = side*Number(input[2])
    }
    else if (figureType=="circle"){
        area = side*side*Math.PI
    }
    else if (figureType=="triangle"){
        area = side*Number(input[2])/2
    }
    console.log(area.toFixed(3))
}

getArea(["square", 10])