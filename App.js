import express from "express";
import cors from "cors";
import session from "express-session";
import mongoose from "mongoose";
import Hello from "./Hello.js";
import Lab5 from "./Lab5.js";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import UserRoutes from "./Kanbas/Users/routes.js";
import "dotenv/config";

const DB_CONNECTION_STRING =
  process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas";
mongoose.connect(DB_CONNECTION_STRING);

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "").split(",");
const app = express();
app.use(
  cors({
    credentials: true,
    origin: (origin, callback) => {
      if (!origin || ALLOWED_ORIGINS.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  })
);
const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());

CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
UserRoutes(app);

app.listen(process.env.PORT || 4000);
