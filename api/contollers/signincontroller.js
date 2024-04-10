import User from "../Model/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    var salt = bcrypt.genSaltSync(10);
    const { username, email, password } = req.body;
	const hashedPassword =  bcrypt.hashSync(password, 10);
	const newUser = new User({ username, email, password: hashedPassword });
	console.log(newUser);

	try {
		await newUser.save();
		res.status(201).json( "User created succesfully" );
	} catch (err) {
		next(err);
	}
};
