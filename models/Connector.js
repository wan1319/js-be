const Connector = require("knex")({
    client: "mysql",
    connection: {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "",
      database: "mern15",
    },
  });
  
  module.exports = Connector;