import { Link } from "react-router-dom";

const Roadmap = () => {
	return (
		<div className="container">
			<div className="flex justify-between p-4 rounded-lg bg-c-dark-blue">
				<div className="flex flex-col space-y-2">
					<Link
						to="/suggestions"
						className="flex items-center text-sm font-bold text-c-white">
						<svg
							className="mr-2"
							width="7"
							height="10"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M6 9L2 5l4-4"
								stroke="#FFFFFF"
								strokeWidth="2"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
						Go Back
					</Link>
					<p className="mr-8 text-2xl font-bold text-c-white">Roadmap</p>
				</div>
				<button className="px-6 py-3 text-sm font-bold rounded-lg bg-c-magenta text-c-white">
					<Link to="/new-feedback">+ Add Feedback</Link>
				</button>
			</div>
			
			<div className="grid grid-cols-3 gap-4 my-8">
				<div>
					<p className="text-lg font-bold text-c-dark-blue">Planned (2)</p>
					<p className="text-c-dark-gray">Ideas prioritized for research</p>
				</div>
				<div>
					<p className="text-lg font-bold text-c-dark-blue">In-Progress (3)</p>
					<p className="text-c-dark-gray">Currently being developed</p>
				</div>
				<div>
					<p className="text-lg font-bold text-c-dark-blue">Live (1)</p>
					<p className="text-c-dark-gray">Released features</p>
				</div>
			</div>

			<div className="grid grid-cols-3 gap-4">
				<div className="rounded-lg bg-c-white">
					<div className="w-full h-2 rounded-tl-lg rounded-tr-lg bg-c-orange"></div>
					<div className="px-8 py-4 space-y-4">
						<div className="flex items-center">
							<div className="w-1 p-1 mr-3 rounded-full bg-c-orange"></div>
							<p className="text-c-dark-gray">Planned</p>
						</div>

						<div className="space-y-2">
							<p className="text-lg font-bold">Add tags for solutions</p>
							<p className="text-c-dark-gray">
								Easier to search solutions based on a specific stack.
							</p>
							<p className="inline-block px-3 py-2 m-1 text-sm font-semibold transition-colors rounded-xl bg-c-gray text-c-light-blue">
								Enhancement
							</p>
						</div>

						<div className="flex items-center justify-between">
							<button className="flex items-center p-2 space-x-2 text-xs font-bold rounded-lg bg-c-gray text-c-light-blue">
								<svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M1 6l4-4 4 4"
										stroke="#4661E6"
										strokeWidth="2"
										fill="none"
										fillRule="evenodd"
									/>
								</svg>
								<p>112</p>
							</button>

							<div className="flex items-center space-x-2">
								<svg width="18" height="16" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M2.62 16H1.346l.902-.91c.486-.491.79-1.13.872-1.823C1.036 11.887 0 9.89 0 7.794 0 3.928 3.52 0 9.03 0 14.87 0 18 3.615 18 7.455c0 3.866-3.164 7.478-8.97 7.478-1.017 0-2.078-.137-3.025-.388A4.705 4.705 0 012.62 16z"
										fill="#CDD2EE"
										fillRule="nonzero"
									/>
								</svg>
								<p className="font-bold text-c-dark-blue">2</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Roadmap;
