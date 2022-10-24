//Variables
const readline = require('readline');
const cmd = readline.createInterface(process.stdin,process.stdout);
let num = 10;
let letters = "abcdefjhigklmnopqrstuvwxyz";
let words = ["javascribt","html","css","nodejs","python","react","mongodb"];
let s = '*';
let chosenWord;
let starsWord = [];


// Random Word
let rn = Math.floor(Math.random() * words.length);
chosenWord = words[rn];


// Call Function Chose word & Add stars
funStar(); 

// Call Welcome Figlet Function
fig(`HANG MAN`); 

// Start The Program of Gusses & Call Gusess Function
setTimeout(() => {
    
    gusses(num);
}, 1000);












// Gusses Function
function gusses(num){
    console.log(`You have ${num} gusses`);
    console.log("The word is:");
    console.log(starsWord);
    
    cmd.question(`What is your gusse?\n`,(input)=> {
        input = input.toLowerCase();  
        //Geek out  => Allow the user to guess the entire word  
        if(input == chosenWord){
            console.log("Perfect");
            cmd.close();
           }

            // If The User Input  == one of the letters Replace '*' to letter 
            if(chosenWord.includes(input)) {
                
            for (let i = 0; i < chosenWord.length; i++) {
                if(input == chosenWord[i]) {
                    starsWord = Array.from(starsWord);
                    starsWord[i] = chosenWord[i];
                    starsWord = starsWord.join('');
                }
                
            }
            
            // If All '*'  Replaceed to letter show Good & Close 
            if(starsWord == chosenWord) {
                console.log(`The word is:\n${starsWord}`);
                console.log("Wow you are good!!!");
                cmd.close();
            }

            // Call Gusses Function Again 
            gusses(num);
        }  if (input.length != 1) { /* If Input Invalid Ask User To Enter One Character */
        console.log("Please enter only one character");
        gusses(num);
    } else if (false == letters.includes(input)) {
                    
                    console.log("The Input Is Invalid");
                    gusses(num);
                } else { /* If The Input Wrong Decrease The Gusses number */ 
                num--;
                // If Gusses Number Is 0 Close & Hard Luck
                    if(num == 0){
                        console.log("\nHard Luck");
                        cmd.close();
                        }

                    gusses(num);
                    }
    });
}

//Close Function
cmd.on('close', function () {
  console.log('\nBYE  !!!');
  process.exit(0);
});


// Figlet Function
function fig(a){
    
    let figlet = require('figlet');
    
    figlet(a, function(err, data) {
        
        console.log(data);
    });
}


// Function Chose word & Add stars
function funStar (){
    
    for(let i = 0;i < chosenWord.length;i++) {
        starsWord[i] = s;
    }
    starsWord = starsWord.join('');
}




