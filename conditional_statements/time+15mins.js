function timeGenerator(input){
    const step = 15
    let hours = Number(input[0])
    let minutes = Number(input[1])
    if ((minutes + step)>59){
        minutes = minutes+step-60
        hours += 1
        if (hours>23){
            hours = 0
        }
    }
    else {
        minutes += step
    }
    if (minutes<10){
        console.log(`${hours}:0${minutes}`)
    }
    else {
        console.log(`${hours}:${minutes}`)
    }
}
timeGenerator(["12", "49"])