function solve(input){
    let money = Math.floor(Number(input[0])*100)
    let totalCoins = 0
    let list = [200, 100, 50, 20, 10, 5, 2, 1]
    while (money>0){
        for(let i =0; i<list.length; i++){
            if (list[i]<=money){
                money-=list[i]
                totalCoins+=1
                break
            }
        }
    }
    console.log(totalCoins) 
}

solve(["0.56"])