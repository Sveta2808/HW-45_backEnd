const http = require("http");
const app = require("./app");
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

// server listening 
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// run:
// TOKEN_KEY=secret API_PORT=3000 MONGO_URI=mongodb://localhost:27017/mydb node index.js

// docker run --name LocalMongo -d -it -p 27017:27017 mongo:4.4.10-rc0-focal
// sudo docker container ls
// sudo docker start LocalMongo