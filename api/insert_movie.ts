import  mysql  from 'mysql';
import { conn } from '../conn';
import express from "express";

export const router = express.Router();

export interface movie {
    Title:  string;
    Plot:   string;
    Poster: string;
}
router.post("/", (req, res) => {
    let moviee: movie = req.body;
    let sql =
      "INSERT INTO `movie`(`Title`, `Plot`, `Poster`) VALUES (?,?,?)";
    sql = mysql.format(sql, [moviee.Title,moviee.Plot,moviee.Poster]);
    conn.query(sql, (err, result) => {
      if (err) throw err;
      res
        .status(201)
        .json({ affected_row: result.affectedRows, last_idx: result.insertId });
    });
  });


