let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 

let re1 = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function bubbleSort() {

    let size = prompt('Enter size of array');

        let arr = new Array (size);
    
        for(let i = 0; i < size;i++) {
    
            arr[i] = parseInt(prompt('Eneter element :'));  
    
    
        }
    
        console.log(arr);

        var res = utility.bubble(arr);
    
    console.log(res);
     
 }

bubbleSort();