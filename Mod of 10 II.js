
// You are given a number stored in a variable with the namenum

// Find out the value obtained from the expressioni % 10, whereiconsists of all the values from 1 to the value stored innum, includingnum

function modeof10(num) {
      
    let i = 1;
    
    while (i<=num){
        let value = i%10;
        console.log(value);
        i++;
    }
    }
    