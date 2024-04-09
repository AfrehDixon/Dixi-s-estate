// import { useState } from 'react'
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile";
import Header from "./component/Header";

function App() {
	return (
    <BrowserRouter>
       <Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<SignIn />} />
				<Route path="/signout" element={<SignOut />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</BrowserRouter>
		
	);
}

export default App;
