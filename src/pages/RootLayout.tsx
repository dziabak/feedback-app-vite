// BUILT-IN IMPORTS
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<main className="p-4 bg-c-gray font-main">
			<Outlet />
		</main>
	);
};

export default RootLayout;
