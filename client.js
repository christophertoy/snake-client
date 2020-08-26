const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write("Name: TOY");

  // Set Timeout Test 
  // const moves = ["Move: up", "Move: left", "Move: up", "Move: up", "Move: right"];
  //   let delay = 0
  //   for (const move of moves) {
  //     setTimeout (() => {
  //       conn.write(move)
  //   }, delay);
  //   delay += 1000;
  // }  


// Interval Move Test
// const move = function(moves) {
//     for (const move of moves){
//       conn.write(move)
//     }
//   }

//   setInterval(() => {
//     move(moves)
//   }, 1000);

  })


  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;

};

module.exports = {
  connect
};
