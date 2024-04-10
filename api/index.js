// const express= require("express")
import express from "express";
import mongoose from "mongoose";
import Userroute from "./routes/user.routes.js";
import authroute from "./routes/auth.routes.js";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

mongoose
	.connect("mongodb+srv://DixonAfreh:frimpi02@real-estate.8k1z8ja.mongodb.net/")
	.then(() => {
		console.log("Connected to database");
	})
	.catch((e) => {
		console.log("Error");
	});

app.use("/api/user", Userroute);
app.use("/api/auth", authroute);

// app.use((err, req, res, next) => {
// 	const statuscode = err.statuscode || 500;
// 	const message = err.message || "Internal Server Error";
// 	return res.status(statuscode).json({
// 		statuscode,
// 		message,
// 		success: false,
// 	});
// });

app.listen(3000, () => {
	console.log("Server is running on port 3000.........");
});
