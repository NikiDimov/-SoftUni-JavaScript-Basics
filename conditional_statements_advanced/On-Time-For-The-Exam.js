function solve(input){
    let examHour = Number(input[0])
    let examMinute = Number(input[1])
    let arrivalHour = Number(input[2])
    let arrivalMinute = Number(input[3])
    let examTime = examHour*60 + examMinute
    let arrivalTime = arrivalHour*60 + arrivalMinute
    if (arrivalTime>examTime){
        console.log("Late")
        if (arrivalTime-examTime < 60){
            console.log(`${arrivalTime-examTime} minutes after the start`)
        }
        else {
            let totalTime = arrivalTime-examTime
            let hours = Math.floor(totalTime/60)
            let minutes = totalTime%60
            if (minutes<10){
                console.log(`${hours}:0${minutes} hours after the start`)
            }
            else {
                console.log(`${hours}:${minutes} hours after the start`)
            }
        }
    }
    else if ((examTime - arrivalTime)<=30){
        console.log("On time")
        if ((examTime - arrivalTime) != 0){
            console.log(`${examTime-arrivalTime} minutes before the start`)
        }
    }
    else {
        console.log("Early")
        if (examTime-arrivalTime < 60){
            console.log(`${examTime - arrivalTime} minutes before the start`)
        }
        else {
            let totalTime = examTime - arrivalTime
            let hours = Math.floor(totalTime/60)
            let minutes = totalTime%60
            if (minutes<10){
                console.log(`${hours}:0${minutes} hours before the start`)
            }
            else {
                console.log(`${hours}:${minutes} hours before the start`)
            }
        }
    }
}

solve(["9",
"00",
"8",
"30"])






