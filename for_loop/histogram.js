function solve(input){
    let total = Number(input[0])
    let arr1 = []
    let arr2 = []
    let arr3 = []
    let arr4 = []
    let arr5 = []
    let all = [arr1, arr2, arr3, arr4, arr5]
    for (let i=1; i<=total; i++){
        let num = Number(input[i])
        if (num<200){
            arr1.push(num)
        }
        else if (num>=200 && num<=399){
            arr2.push(num)
        }
        else if (num>=400 && num<=599){
            arr3.push(num)
        }
        else if (num>=600 && num<=799){
            arr4.push(num)
        }
        else if (num>=800){
            arr5.push(num)
        }
    }
    for (i=0; i<5; i++){
        console.log(`${(all[i].length/total*100).toFixed(2)}%`)
    }
}
solve(["9", "367", "99", "200", "799", "999", "333", "555", "111", "9"])