import  mysql  from 'mysql';
import { conn } from '../conn';
import express from "express";

export const router = express.Router();

export interface person {
    P_Name:  string;
}
router.post("/", (req, res) => {
    let personn: person = req.body;
    let sql =
      "INSERT INTO `person`(`P_Name`) VALUES (?)";
    sql = mysql.format(sql, [personn.P_Name]);
    conn.query(sql, (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    });
  });


