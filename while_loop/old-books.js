function solve(input){
    let index = 1
    let myBook = input[0]
    let data = input[1]
    while (data!="No More Books" && index<input.length){
        if (data == myBook){
            console.log(`You checked ${index-1} books and found it.`)
            return
        }
        index++
        data = input[index]
        
    }
    console.log("The book you search is not here!")
    console.log(`You checked ${index-1} books.`)
}

solve(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
])

