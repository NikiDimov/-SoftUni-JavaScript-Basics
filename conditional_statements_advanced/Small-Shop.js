function calculatePrice(input){
    let product = input[0]
    let town = input[1]
    let counts = Number(input[2])
    if (town=="Sofia"){
        switch(product){
            case "coffee":
                console.log(counts*0.5)
                break
            case "water":
                console.log(counts*0.8)
                break
            case "beer":
                console.log(counts*1.2)
                break
            case "sweets":
                console.log(counts*1.45)
                break
            case "peanuts":
                console.log(counts*1.6)
                break
        }
    
    }
    else if (town=="Varna"){
        switch(product){
            case "coffee":
                console.log(counts*0.45)
                break
            case "water":
                console.log(counts*0.7) 
                break
            case "beer":
                console.log(counts*1.1)
                break
            case "sweets":
                console.log(counts*1.35)
                break
            case "peanuts":
                console.log(counts*1.55)
                break
        }
    
    }
    else if (town=="Plovdiv"){
        switch(product){
            case "coffee":
                console.log(counts*0.4)
                break
            case "water":
                console.log(counts*0.7) 
                break
            case "beer":
                console.log(counts*1.15)
                break
            case "sweets":
                console.log(counts*1.3)
                break
            case "peanuts":
                console.log(counts*1.5)
                break
        }
    
    }
}

calculatePrice(["water", "Plovdiv", "2"])