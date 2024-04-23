import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
	// var salt = bcrypt.genSaltSync(10);
	const { username, email, password } = req.body;
	const hashedPassword = bcrypt.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	// console.log(newUser);

	try {
		await newUser.save();
		res.status(201).json("User created succesfully");
	} catch (err) {
		next(err);
	}
};

export const signin = async (req, res, next) => {
	const { email, password } = req.body;
	try {
		const validUser = await User.findOne({ email });
		if (!validUser) return next(errorHandler(404, "Wrong credentials"));
		const validPassword = bcrypt.compareSync(password, validUser.password);
		if (!validPassword) return next(errorHandler(401, "Wrong cretdentials"));
		const token = jwt.sign( { id: validUser._id }, "afrehdixonafreh" );
		const { password: pass, ...rest } = validUser._doc;
		res.cookie("access_token", token, { httpOnly: true }).status(200).json(validUser);
	} catch (error) {
		next(error);
	}
};
