import { conn } from '../conn';
import express from "express";

export const router = express.Router();

router.delete("/:Sid", (req, res) => {
    let Sid = +req.params.Sid;
    conn.query("delete from stars where Sid = ?", [Sid], (err, result) => {
       if (err) throw err;
       res
         .status(200)
         .json({ affected_row: result.affectedRows });
    });
  });
  