let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', (handleUserInput))

  stdin.on('data', (data) => {
    if (data === "w") {
      conn.write("Move: up")
    } else if (data === "a") {
      conn.write("Move: left")
    } else if (data === "s") {
      conn.write("Move: down")
    } else if (data === 'd') {
      conn.write("Move: right");
    }
  })
  return stdin;
  }

  const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    };
  }


  module.exports = {
    setupInput
  };