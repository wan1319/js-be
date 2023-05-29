const http = require("http");
const app = require("./app");

const server = http.createServer(app);
const port = 4000;

server.listen(port, () => {
    console.log(`Server running port ${port}`);
});