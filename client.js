const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connectToSnake = function () {
  console.log("Connecting...")

  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });

  conn.on("connect", () => {
    console.log("Connection Worked")
    conn.write('Name: ESD');
    conn.write("Say: WAZZZUP")
  })


  conn.on('data', (data) => {
    console.log("Server Says: ", data)
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = { connectToSnake }