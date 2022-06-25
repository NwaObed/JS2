
function getOperation(){
    op = parseInt(
        prompt(
            `Please choose your prefered operation using the following options \n
            1 : Addition\n
            2 : Subtraction\n
            3 : Multiplication\n
            4 : Division\n
            0 : Quit`
        )
    )
    return op
}



//addition function

function getSum(num1, num2){
    // Sum
    result = num1 + num2
    return result
}

function getDiff(num1, num2){
    //  Subtraction
    result = num1 - num2
    return result
}

function getProduct(num1, num2){
    // Multiplication
    result = num1 * num2
    return result
}

function getQuotient(num1, num2){
    // Division
    result = num1 / num2
    return result
}

// User Input
function getInput(){
    num1 = parseFloat(prompt("Enter first number"))
    num2 = parseFloat(prompt("Enter second number"))

    return [num1, num2]
}
options = [0,1,2,3,4]
function checkValid(num){
    if (options.includes(num)){
        valid = true
    }
    else{
        valid = false
    }
    return valid
}

// Make Decisions
function makeDecision(){
    md = parseInt(prompt(
        `Do you wish to continue?\n
        1 : Yes\n
        0: No`
    ))

    if (md == 1){
        // op = getOperation()
        decision = true
    }
    else if(md == 0){
        // alert("Thank for trusting our service, Bye for now!")
        decision = false
    }
    else{
        showError()
        decision = makeDecision()
    }

    return decision
}

function showError(){
    alert(
        `Invalid number. Please enter a valid option`
    )

    return op
}

function Calculator(){
        // Welcome message

    alert("Hello dear user, welcome to Zuri Calculator")

    // Step 1 :Select operation to perform


    op = getOperation()

    while (!checkValid(op)) {
        //Error
        showError()
        op = getOperation()
    }
    if (op == 0){
        //No operation, quit!
        alert("Thank for trusting our service, Bye for now!")
    }

    else{
        Input = getInput()
        num1 = Input[0]
        num2 = Input[1]
    }
    if (op == 1) {
        // Perform addition
        result = getSum(num1,num2)
        alert(
            `First number = ${num1}\n
            Second number = ${num2}\n
            Sum = ${result}`
        )
    }
    
    
    else if (op == 2) {
        // Perform subtraction
        result = getDiff(num1,num2)
        alert(
            `First number = ${num1}\n
            Second number = ${num2}\n
            Difference = ${result}`
        )
    }
    
    else if (op == 3) {
        // Perform multiplication
        result = getProduct(num1,num2)
        alert(
            `First number = ${num1}\n
            Second number= = ${num2}\n
            Product = ${result}`
        )
    }
    
    else if (op == 4) {
        //Perform division
        result = getQuotient(num1,num2)
        alert(
            `First number = ${num1}\n
            Second number = ${num2}\n
            Quotient = ${result}`
        )
    }
    

    // Continue or quit
    decision = makeDecision()

    while (decision){
        op = getOperation()
        while (!checkValid(op)) {
            //Error
            showError()
            op = getOperation()
        }
        if (op == 0){
            //No operation, quit!
            alert("Thank for trusting our service, Bye for now!")
        }
        else{
            if (op == 1){
                // Perform sum
                num = parseFloat(prompt('Enter another number '))
                num0 = result
                newResult = getSum(result,num)
                alert(
                `New number = ${num}\n
                Previous result = ${num0}\n
                Sum = ${newResult}`)
            }
            else if (op == 2) {
                // Perform subtraction
                num = parseFloat(prompt('Enter another number '))
                num0 = result
                newResult = getDiff(result,num)
                alert(
                `New number = ${num}\n
                Previous result = ${num0}\n
                Difference = ${newResult}`)
            }
            
            else if (op == 3) {
                // Perform multiplication
                num = parseFloat(prompt('Enter another number '))
                num0 = result
                newResult = getProduct(result,num)
                alert(
                `New number = ${num}\n
                Previous result = ${num0}\n
                Product = ${newResult}`)
            }
            
            else if (op == 4) {
                //Perform division
                num = parseFloat(prompt('Enter another number '))
                num0 = result
                newResult = getQuotient(result,num)
                alert(
                `New number = ${num}\n
                Previous result = ${num0}\n
                Quotient = ${newResult}`)
            }
            // else if (op == 0) {
            //     //No operation, quit!
            //     alert("Thank for trusting our service, Bye for now!")
            // }
            
            // else {
            //     //Error
            //     showError()
            // }
        }
        // Exit plan for the while loop
        result = newResult
        op = makeDecision()
    }
    // else{
    //     //No operation, quit!
    //     alert("Thank for trusting our service, Bye for now!")
    // }

    

    
}

Calculator()