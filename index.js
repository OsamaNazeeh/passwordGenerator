const characters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",//last index:51
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",//last index: 62
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",//From 62 and above 
    "/"
];

let passwordOneEl = document.getElementById("password-one-el");
let passwordTwoEl = document.getElementById("password-two-el");

//createSugesstions
function createSugesstions(length = 16){
    
    let password = "";
    
    for(let i = 0 ; i < length; ++i){
        let randomCharIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomCharIndex];
    }

    return password;
}



function passwordGenerator(length=16){
    passwordOneEl.textContent = createSugesstions(length);
    passwordTwoEl.textContent = createSugesstions(length);
}