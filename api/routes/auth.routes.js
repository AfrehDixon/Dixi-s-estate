import express from "express";
import  {signup } from "../contollers/signincontroller.js";

const authroute = express.Router()

authroute.post('/sign-up', signup )

export default authroute