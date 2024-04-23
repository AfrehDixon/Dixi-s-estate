// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({});
	const [error, seterror] = useState(null);
	const [loading, setloading] = useState(false);

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
		// console.log(formData);
	}

	const handeleSubmit = async (e) => {
		e.preventDefault();
		setloading(false);
		try {
			const res = await fetch("/api/auth/sign-up", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (data.success == false) {
				seterror(data.message);
				setloading(false);
				return;
			}
			setloading(false);
			seterror(null);
			navigate("/signin");
		} catch (error) {
			setloading(false);
			seterror(error.message);
		}
	};

	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
			<form
				onSubmit={handeleSubmit}
				action=""
				className="flex flex-col placeholder-gray-500 gap-4  "
			>
				<input
					type="text"
					name="username"
					placeholder="username"
					id="username"
					className="border p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="email"
					name="email"
					placeholder="email"
					id="email"
					className="border p-3 rounded-lg"
					onChange={handleChange}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					id="password"
					className="border p-3 rounded-lg"
					onChange={handleChange}
				/>
				<button
					disabled={loading}
					className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80"
				>
					{loading ? "Loading......" : "sign Up"}
				</button>
			</form>
			<div className="flex gap-3 mt-3">
				<p>Have an account ? </p>
				<Link to="/signin">
					<span className="text-blue-700">Sign in</span>
				</Link>
			</div>
			{error && <p className="text-red-400">{error}</p>}
		</div>
	);
}
