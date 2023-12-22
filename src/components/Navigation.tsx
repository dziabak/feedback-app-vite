// BUILT-IN IMPORTS
import { Link } from "react-router-dom";

const Navigation = () => {
	return (
		<nav>
			<div className="grid grid-rows-3 gap-4">
				<div className="bg-[url('/assets/suggestions/desktop/background-header.png')] bg-no-repeat bg-cover rounded-xl p-4 flex flex-col justify-end">
					<h1 className="text-xl font-bold text-c-white">Frontend Mentor</h1>
					<p className="text-c-white/75">Feedback Board</p>
				</div>
				<div className="p-4 bg-c-white rounded-xl">
					<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-c-white">
						All
					</button>
					<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-c-white">
						UI
					</button>
					<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-c-white">
						UX
					</button>
					<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-c-white">
						Enhancement
					</button>
					<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-c-white">
						Bug
					</button>
					<button className="px-3 py-2 m-1 text-xs font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue hover:bg-c-light-blue hover:text-c-white">
						Feature
					</button>
				</div>
				<div className="flex flex-col justify-between p-4 bg-c-white rounded-xl">
					<div className="flex items-end justify-between">
						<p className="text-lg font-bold text-c-dark-blue">Roadmap</p>
						<Link
							to="/roadmap"
							className="text-sm font-semibold underline text-c-light-blue">
							View
						</Link>
					</div>
					<div className="space-y-1">
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<div className="w-1 p-1 mr-3 rounded-full bg-c-orange"></div>
								<p className="text-c-light-blue">Planned</p>
							</div>
							<p className="font-bold text-c-light-blue">2</p>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<div className="w-1 p-1 mr-3 rounded-full bg-c-magenta"></div>
								<p className="text-c-light-blue">In-Progress</p>
							</div>
							<p className="font-bold text-c-light-blue">3</p>
						</div>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<div className="w-1 p-1 mr-3 rounded-full bg-c-aqua"></div>
								<p className="text-c-light-blue">Live</p>
							</div>
							<p className="font-bold text-c-light-blue">1</p>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
