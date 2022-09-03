function checkNum(input){
    let num = Number(input[0])
    let valid = (num>=100 && num<=200) || num == 0
    if(!valid){
        console.log("invalid")
    }
}
checkNum(["150"])
