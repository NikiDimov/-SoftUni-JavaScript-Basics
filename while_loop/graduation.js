function solve(input){
    let name = input[0]
    let index = 1
    let current_class = 0
    let fail = 1
    let total = 0
    
    while (index <= 12){
        if (Number(input[index])<4){
            if (fail == 0){
                console.log(`${name} has been excluded at ${index} grade`)
                return
            }
            fail -=1
            continue
        }
        total+=Number(input[index])
        index++       
    }
    console.log(`${name} graduated. Average grade: ${(total/12).toFixed(2)}`)
}

solve (["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

