// BUILT-IN IMPORTS
import { Outlet } from "react-router";

const RootLayout = () => {
	return (
		<main className="bg-c-gray font-main">
			<Outlet />
		</main>
	);
};

export default RootLayout;
