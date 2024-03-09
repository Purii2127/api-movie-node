import { conn } from '../conn';
import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
    // เรียกใช้งาน SQL เพื่อดึงข้อมูลทั้งหมดจากตาราง "image"
    const sql = "SELECT * FROM movie ";
    conn.query(sql, (err, result) => {
      if (err) {
        res.json(err);
      } else {
        res.json(result);
      }
    });
  });
