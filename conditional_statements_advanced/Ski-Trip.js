function solve(input){
    let days = Number(input[0])-1
    let room = input[1]
    let rate = input[2]
    let total = 0
    if (room == "room for one person"){
        total = days*18
    }
    else if (room == "apartment"){
        total = days*25
        if (days<10){
            total*=0.7
        }
        else if (days>=10 && days<=15){
            total*=0.65
        }
        else {
            total*=0.5
        }
    }
    else if (room == "president apartment"){
        total = days*35
        if (days<10){
            total*=0.9
        }
        else if (days>=10 && days <=15){
            total*=0.85
        }
        else {
            total*=0.8
        }
    }
    if (rate == "positive"){
        total*=1.25
    }
    else if (rate == "negative"){
        total*=0.9
    }

    console.log(total.toFixed(2))
}

solve(["30",
"president apartment",
"negative"])

