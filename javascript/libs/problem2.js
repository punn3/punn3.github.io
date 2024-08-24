function readInput() {
    let listInput = [];
    while (true) {
        let input = prompt("Enter an integer (a negative to quit):");
        if (input > 0) {
            listInput.push(input);
        } else if (input < 0) {
            break;
        } else {

        }
    }
    return listInput;
}

function displayStats(arrayInput) {
    let count = arrayInput.length;
    let sum = arrayInput.reduce((a, b) =>  parseInt(a) + parseInt(b), 0); //sum by reduce
    /*for (let i = 0; i < count; i++) { //sum normal
        let number = parseInt(list[i]);
        sum += number;
    }*/ 
    let minimum = Math.min(...arrayInput) ;
    let maximum =  Math.max(...arrayInput) ;
    let avg = sum / count;

   (count == 0) ?
         alert("For the list that is empty, the average is 0, the minimum is 0, and the maximum is 0")
        :alert('For the list ' + arrayInput + ' the Average is ' + avg.toFixed(2) +
            ' , the minimum is ' + minimum + ' , the maximum is ' + maximum);
    

    
    
}

let list = readInput();
displayStats(list);