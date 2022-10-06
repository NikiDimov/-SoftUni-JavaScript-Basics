function solve(input){
    let movie = input[0]
    let seats = Number(input[1])
    let type = input[2]
    let totalTickets = 0
    let totalStudents = 0
    let totalStandard = 0
    let totalKid = 0
    let index = 2
    while (movie!="Finish"){
        let counter = 0
        while(seats>0 && type!="End"){
            if (type=="Finish"){
                break
            }
            if (type=="student"){
                totalStudents++
            }
            else if (type=="standard"){
                totalStandard++
            }
            else if (type=="kid"){
                totalKid++
            }
            counter++
            totalTickets++
            index++
            type = input[index]
            seats--
            if (seats<=0){
                index--
            }
        }
        console.log(`${movie} - ${(counter/(counter+seats)*100).toFixed(2)}% full.`)
        if (type=="Finish"){
            break
        }
        index++
        movie = input[index]
        index++
        seats = input[index]
        index++
        type = input[index]
    }
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(totalStudents/totalTickets*100).toFixed(2)}% student tickets.`)
    console.log(`${(totalStandard/totalTickets*100).toFixed(2)}% standard tickets.`)
    console.log(`${(totalKid/totalTickets*100).toFixed(2)}% kids tickets.`)
}


solve(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Rush",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Deadpool",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "Finish"])

