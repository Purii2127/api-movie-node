import { conn } from "../conn";
import express from "express";

export const router = express.Router();

router.get("/searchmovie", (req, res) => {
  const { searchTerm } = req.query;
  const sql = `
    SELECT movie.Mid, movie.Title, movie.Plot, movie.Poster, 
           GROUP_CONCAT(DISTINCT CONCAT_WS(': ', person.P_Name, CASE WHEN stars.Pid IS NULL THEN 'N/A' ELSE 'Star' END) SEPARATOR ', ') AS Stars,
           GROUP_CONCAT(DISTINCT person.P_Name SEPARATOR ', ') AS Creators
    FROM movie
    LEFT JOIN stars ON movie.Mid = stars.Mid
    LEFT JOIN creators ON movie.Mid = creators.Mid
    LEFT JOIN person ON stars.Pid = person.Pid OR creators.Pid = person.Pid
    WHERE movie.Title LIKE ? 
    GROUP BY movie.Mid;
  `;

  conn.query(sql, [`%${searchTerm}%`], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error searching movie");
    } else {
      res.json(result);
    }
  });
});
