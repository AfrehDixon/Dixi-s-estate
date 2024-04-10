import User from "../Model/user.model.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
	const { username, email, password } = req.body;
	const hashedPassword = bcryptjs.hashSync(password, 10);

	try {
		const newUser = new User({ username, email, password: hashedPassword });
		await newUser.save();
	} catch (e) {
		res.status(500).json(e.message);
	}

	res.status(201).json({ message: "User created succesfully" });
};