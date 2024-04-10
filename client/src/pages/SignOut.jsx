// import React from 'react'

export default function SignOut() {
  return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
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
			</form>
		</div>
	);
}
