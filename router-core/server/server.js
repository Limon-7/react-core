const express = require("express");
const app = new express();
const portNumber = 3000;

app.listen(portNumber, (err) => {
  if (err) console.error(err);
  else console.log(`server listen to port ${portNumber}`);
});
