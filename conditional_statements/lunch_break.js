function lunchBreak(input){
    let TVshowName = input[0]
    let episodTime = Number(input[1])
    let breakTime = Number(input[2])
    let timeForLunch = breakTime*0.125
    let timeForChill = breakTime*0.25
    let timeForTVshow = breakTime-timeForChill-timeForLunch
    if (timeForTVshow>=episodTime){
        console.log(`You have enough time to watch ${TVshowName} and left with ${Math.ceil(timeForTVshow-episodTime)} minutes free time.`)
    }
    else {
        console.log(`You don't have enough time to watch ${TVshowName}, you need ${Math.ceil(episodTime-timeForTVshow)} more minutes.`)
    }

}

lunchBreak(["Teen Wolf",

"48",

"60"])