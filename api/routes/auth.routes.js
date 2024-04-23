import express from "express";
import  {signup  ,signin} from "../contollers/signupcontroller.js";
// import  {signin } from "../contollers/signincontroller.js";

const authroute = express.Router()

authroute.post( '/sign-up', signup )

authroute.post('/signin' , signin )

export default authroute