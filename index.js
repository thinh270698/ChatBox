let textSend =""
const textInput = document.getElementById("Text-Input")
const rootContent = document.getElementById("Root-content") 
textInput.onchange = ()=>{
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const message = document.createElement("div")
    const messageText = document.createElement("p")
    const messageTime = document.createElement("span")

    messageText.innerText = textInput.value;
    messageTime.innerText  = date+' '+time;;
    message.classList.add("Chat-Box-Body-Send");
    message.appendChild(messageText);
    message.appendChild(messageTime);
    rootContent.appendChild(message);
    textInput.value=""
}
