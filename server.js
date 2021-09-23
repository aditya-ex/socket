const express = require("express");
const socket = require("socket.io");

const app = express();

const port = process.env.PORT || 5000;

const server = app.listen(port, () =>
  console.log(`Server up and running on port ${port} !`)
);

app.use(express.static("public"));

let io = socket(server);

io.on("connection", (socket) => {
  console.log("socket connection successful", socket.id);
  socket.on("message", function(data){
    io.sockets.emit("message", data);
  });
});
