// import React from 'react'

export default function SignIn() {
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
			<form action="" className="flex flex-col placeholder-gray-500 gap-4  ">
				<input
					type="text"
					name="username"
					placeholder="username"
					id="username"
					className="border p-3 rounded-lg"
				/>
				<input
					type="email"
					name="email"
					placeholder="email"
					id="email"
					className="border p-3 rounded-lg"
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					id="password"
					className="border p-3 rounded-lg"
        />
        <button type="button" className="bg-slate-700 p-3 rounded-lg uppercase text-white hover:opacity-90">Sign In</button>
			</form>
		</div>
	);
}
