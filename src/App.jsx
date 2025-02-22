import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero subtitle='Helping devs find their dream jobs one at a time.' />
			<HomeCards />
			<JobListings />
			<ViewAllJobs />
		</>
	);
};

export default App;
