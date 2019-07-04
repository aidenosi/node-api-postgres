const Pool = require("pg").Pool;
const pool = new Pool({
  user: "aiden",
  host: "localhost",
  databse: "api",
  password: "password",
  port: 5432
});
