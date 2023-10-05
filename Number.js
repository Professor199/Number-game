var attempts=0;
for (let i=0;i<101;i++){
let a=prompt("Enter the number between 1-100: ")
var b=Math.floor(Math.random(1,101)*101) 
    if (a!=b){
        attempts++
        var c=101-attempts
        if(i!=100){
        continue
        }
        else{
            console.log("Your score:"+ c)
            console.log("The right number is: "+ b) 
            break 
        }
    }
    else{
        console.log("Your answer is right")
        console.log("The right answer is: "+ b)
        console.log("Your score: "+ c)
        break
        
    }
    
}

