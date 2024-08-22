import express from "express";
import { message } from "./controller";
export const messaage_route = express.Router();

messaage_route.post("/send", express.json(), message);
