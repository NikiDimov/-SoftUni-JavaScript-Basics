function guess(input){
    const password = "s3cr3t!P@ssw0rd"
    let guess_pass = input[0]
    if (guess_pass == password){
        console.log("Welcome")
    }
    else {
        console.log("Wrong password!")
    }
}

guess(["s3cr3t!P@ssw0rd"])