function record(input){
    let worldRecord = Number(input[0])
    let distanceToSwim = Number(input[1])
    let timePerMeter = Number(input[2])
    let resistance = Math.floor(distanceToSwim/15)*12.5
    let totalTime = distanceToSwim*timePerMeter + resistance
    if (totalTime<worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
    }
    else {
        console.log(`No, he failed! He was ${(totalTime-worldRecord).toFixed(2)} seconds slower.`)
    }
}

record(["10464",

"1500",

"20"])