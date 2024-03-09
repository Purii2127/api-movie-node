import { conn } from '../conn';
import express from "express";

export const router = express.Router();

router.delete("/:Mid", (req, res) => {
    let Mid = +req.params.Mid;
    conn.query("delete from movie where Mid = ?", [Mid], (err, result) => {
       if (err) throw err;
       res
         .status(200)
         .json({ affected_row: result.affectedRows });
    });
  });
  