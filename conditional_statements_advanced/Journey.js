function solve(input) {
    let budget = Number(input[0])
    let season = input[1]
    let destination = NaN
    let place = NaN
    if (budget <= 100) {
        if (season == "summer") {
            budget *= 0.3
        }
        else if (season == "winter") {
            budget *= 0.7
        }
        destination = "Bulgaria"
    }
    else if (budget <= 1000) {
        if (season == "summer") {
            budget *= 0.4
        }
        else if (season == "winter") {
            budget *= 0.8
        }
        destination = "Balkans"
    }
    else {
        budget *= 0.9
        destination = "Europe"
    }
    if (season == "summer" && destination!="Europe") {
        place = "Camp"
    }
    else {
        place = "Hotel"
    }
    console.log(`Somewhere in ${destination}`)
    console.log(`${place} - ${budget.toFixed(2)}`)
}

solve(["1500", "summer"])