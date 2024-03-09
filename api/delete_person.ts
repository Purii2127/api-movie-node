import { conn } from '../conn';
import express from "express";

export const router = express.Router();

router.delete("/:Pid", (req, res) => {
    let Pid = +req.params.Pid;
    conn.query("delete from person where Pid = ?", [Pid], (err, result) => {
       if (err) throw err;
       res
         .status(200)
         .json({ affected_row: result.affectedRows });
    });
  });
  