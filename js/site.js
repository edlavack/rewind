function getValue(){
    let message = document.getElementById("message").value;
   let revMessage = reverse(message);
   displayReversed(revMessage);
}




function reverse(message){
//string? array of characters
let reversedMessage = "";
for (let index = message.length-1; index >= 0; index--) {
    
   reversedMessage += message[index];
    
}

return reversedMessage;
}



function displayReversed(revMessage){
    let results = document.getElementById("results");
    results.classList.add("revMessage");
    results.innerHTML = revMessage;

}