import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "hw5",
});
