// control + shift + j to open console and paste
var count = 4000; //number of times to send
var message = "spam message here By Ravindu Manoj "; //spam message 
var i = 0;var timer = setInterval(function() {
    var evt = document.createEvent("TextEvent");
    evt.initTextEvent("textInput", true, true, window, message + i, 0, "en-US");
    document.querySelector(".input-container .input").focus();
    document.querySelector(".input-container .input").dispatchEvent(evt);
    i++;if (i == count)clearInterval(timer);console.log(i + " messages sent");var event = new MouseEvent('click', {'view': window,'bubbles': true,'cancelable': true});document.querySelector(".icon.btn-icon.icon-send").dispatchEvent(event);
}, 10);
