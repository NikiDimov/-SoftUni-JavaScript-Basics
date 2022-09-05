function solve(input){
    let flowerType = input[0]
    let countFlowers = Number(input[1])
    let budget = Number(input[2])
    let total = 0
    if (flowerType=="Roses"){
        total = 5*countFlowers
        if (countFlowers>80){
            total*=0.9
        }
    }
    else if (flowerType=="Dahlias"){
        total = 3.8*countFlowers
        if (countFlowers>90){
            total*=0.85
        }
    }
    else if (flowerType=="Tulips"){
        total = 2.8*countFlowers
        if (countFlowers>80){
            total*=0.85
        }
    }
    else if (flowerType=="Narcissus"){
        total = 3*countFlowers
        if (countFlowers<120){
            total*=1.15
        }
    }
    else if (flowerType=="Gladiolus"){
        total = 2.5*countFlowers
        if (countFlowers<80){
            total*=1.2
        }
    }
    if (budget>=total){
        console.log(`Hey, you have a great garden with ${countFlowers} ${flowerType} and ${(budget-total).toFixed(2)} leva left.`)
    }
    else {
        console.log(`Not enough money, you need ${(total-budget).toFixed(2)} leva more.`)
    }
}

solve(["Tulips","88","260"])
