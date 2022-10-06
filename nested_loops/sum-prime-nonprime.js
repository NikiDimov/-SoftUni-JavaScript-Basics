function solve(input){
    let data = input[0]
    let index = 0
    let sumPrime = 0
    let sumNonPrime = 0
    while (data!="stop"){
        let isPrime = true
        let num = Number(input[index])
        if (num<0){
            console.log("Number is negative.")
            index++
            data = input[index]
            continue
        }
        for(let i = 2, s = Math.sqrt(num); i <= s; i++){
            if(num % i === 0){
                sumNonPrime += num
                isPrime = false
                break
            }   
        }
        if (isPrime==true){
            sumPrime+=num
        }
        index++
        data = input[index]
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`)
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`)
}

solve(["0",
"-9",
"0",
"stop"])


