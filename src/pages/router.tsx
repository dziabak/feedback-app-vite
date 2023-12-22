// BUILT-IN IMPORTS
import { createBrowserRouter } from "react-router-dom";
// INTERNAL IMPORTS
import RootLayout from "./RootLayout";
import Suggestions from "./Suggestions";
import Roadmap from "./Roadmap";
import NewFeedback from "./NewFeedback";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ index: true, element: <Suggestions /> },
			{ path: "/suggestions", element: <Suggestions /> },
			{ path: "/roadmap", element: <Roadmap /> },
			{ path: "/new-feedback", element: <NewFeedback /> },
		],
	},
]);
