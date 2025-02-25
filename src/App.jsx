import React from "react";
import {
	RouterProvider,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainLayout from "./layouts/MainLayout";
import JobsPage from "./pages/JobsPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path='/' element={<MainLayout />}>
				<Route index element={<HomePage />} />
				<Route path='/jobs' element={<JobsPage />} />
				<Route
					path='/jobs/:id'
					element={<JobPage />}
					loader={jobLoader}
				/>
				<Route path='*' element={<NotFoundPage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default App;
