import { conn } from '../conn';
import express from "express";

export const router = express.Router();

router.delete("/:Cid", (req, res) => {
    let Cid = +req.params.Cid;
    conn.query("delete from creators where Cid = ?", [Cid], (err, result) => {
       if (err) throw err;
       res
         .status(200)
         .json({ affected_row: result.affectedRows });
    });
  });
  