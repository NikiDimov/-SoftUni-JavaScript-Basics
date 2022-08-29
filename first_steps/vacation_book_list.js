function calculator(input){
    let totalPages = Number(input[0])
    let pagesPerHour = Number(input[1])
    let toatalTargetDays = Number(input[2])
    let hoursPerDay = totalPages/pagesPerHour/toatalTargetDays
    console.log(hoursPerDay)
}

calculator(["212 ", "20 ", "2 "])
