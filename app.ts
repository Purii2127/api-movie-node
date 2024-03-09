import express from "express";
import { router as index } from "./api/index";
import { router as movie } from "./api/movie";
import { router as details } from "./api/details";
import { router as insertmovie } from "./api/insert_movie";
import { router as insertperson } from "./api/insert_person";
import { router as insertstar } from "./api/insert_star";
import { router as insertcreators } from "./api/insert_creators";

import { router as deletemovie } from "./api/delete_movie";
import { router as deleteperson } from "./api/delete_person";
import { router as deletestars } from "./api/delete_stars";
import { router as deletecreators } from "./api/delete_creators";

import { router as Queryy } from "./api/Query";

import cors from "cors";

export const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json()); // แปลงร่างของคำขอเป็น JSON

app.use("/", index);
app.use("/movie", movie);
app.use("/details", details);

app.use("/insertmovie", insertmovie);
app.use("/insertperson", insertperson);
app.use("/insertstar", insertstar);
app.use("/insertcreators", insertcreators);

app.use("/deletemovie", deletemovie);
app.use("/deleteperson", deleteperson);
app.use("/deletestars", deletestars);
app.use("/deletecreators", deletecreators);
app.use("/Query",Queryy)