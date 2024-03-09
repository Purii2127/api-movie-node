import  mysql  from 'mysql';
import { conn } from '../conn';
import express from "express";

export const router = express.Router();

export interface creators {
    Mid:  string;
    Pid:  string;
}
router.post("/insert", (req, res) => {
    let creatorss: creators = req.body;
    let sql =
      "INSERT INTO `creators`(`Mid`,`Pid`) VALUES (?,?)";
    sql = mysql.format(sql, [creatorss.Mid,creatorss.Pid]);
    conn.query(sql, (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    });
  });

