function ProjectCreation(input){
    let name = input[0]
    let projectCounts = Number(input[1])
    let time = Number(projectCounts*3)
    let result = `The architect ${name} will need ${time} hours to complete ${projectCounts} project/s.`
    console.log(result)
}

ProjectCreation(["George ","4"])