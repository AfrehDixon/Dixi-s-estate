import express from "express";
import UserContoller from "../contollers/user.controller.js";

const Userroute = express.Router();

Userroute.get("/test", UserContoller );

export default Userroute
