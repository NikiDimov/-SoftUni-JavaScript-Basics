function calculatePrice(input){
    let fruit = input[0]
    let dayOfWeek = input[1]
    let counts = Number(input[2])
    const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const daysOfWeekEnd = ["Saturday", "Sunday"]
    const fruits = ["banana" , "apple" , "orange",  "grapefruit" , "kiwi",  "pineapple", "grapes"]
    if (daysOfWeek.includes(dayOfWeek) && (fruits.includes(fruit))){
        switch(fruit){
            case "banana":
                console.log((counts*2.5).toFixed(2))
                break
            case "apple":
                console.log((counts*1.2).toFixed(2))
                break
            case "orange":
                console.log((counts*0.85).toFixed(2))
                break
            case "grapefruit":
                console.log((counts*1.45).toFixed(2))
                break
            case "kiwi":
                console.log((counts*2.7).toFixed(2))
                break
            case "pineapple":
                console.log((counts*5.5).toFixed(2))
                break
            case "grapes":
                console.log((counts*3.85).toFixed(2))
                break
        }
    }
    else if (daysOfWeekEnd.includes(dayOfWeek) && (fruits.includes(fruit))){
        switch(fruit){
            case "banana":
                console.log((counts*2.7).toFixed(2))
                break
            case "apple":
                console.log((counts*1.25).toFixed(2))
                break
            case "orange":
                console.log((counts*0.9).toFixed(2))
                break
            case "grapefruit":
                console.log((counts*1.6).toFixed(2))
                break
            case "kiwi":
                console.log((counts*3).toFixed(2))
                break
            case "pineapple":
                console.log((counts*5.6).toFixed(2))
                break
            case "grapes":
                console.log((counts*4.2).toFixed(2))
                break         
            
        }
    }
    else {
        console.log("error")
    }
}

calculatePrice(["kiwi", "Monday", "2.5"])