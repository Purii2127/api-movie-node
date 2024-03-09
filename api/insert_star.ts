import  mysql  from 'mysql';
import { conn } from '../conn';
import express from "express";

export const router = express.Router();

// router.get("/movie", (req, res) => {
//     // เรียกใช้งาน SQL เพื่อดึงข้อมูลทั้งหมดจากตาราง "image"
//     const sql = "SELECT * FROM movie ";
//     conn.query(sql, (err, result) => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(result);
//       }
//     });
//   });

//   router.get("/person", (req, res) => {
//     // เรียกใช้งาน SQL เพื่อดึงข้อมูลทั้งหมดจากตาราง "image"
//     const sql = "SELECT * FROM person ";
//     conn.query(sql, (err, result) => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(result);
//       }
//     });
//   });

export interface star {
    Mid:  string;
    Pid:  string;
}
router.post("/insert", (req, res) => {
    let starr: star = req.body;
    let sql =
      "INSERT INTO `stars`(`Mid`,`Pid`) VALUES (?,?)";
    sql = mysql.format(sql, [starr.Mid,starr.Pid]);
    conn.query(sql, (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    });
  });


