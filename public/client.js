let socket = io.connect("http://localhost:5000");

let message = document.getElementById("message");
let output = document.getElementById("output");
let btn = document.getElementById("send");

btn.addEventListener("click", function(){
    let msg = socket.emit("message", {
        message: message.value,
    });
    console.log(msg);
});

socket.on("message", function(data){
    output.innerHTML += `<p><strong>${data.message}</strong></p>`;
});