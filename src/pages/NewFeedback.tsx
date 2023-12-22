import { Link } from "react-router-dom";

const NewFeedback = () => {
	return (
		<div className="container">
			<div className="flex flex-col my-12 space-y-2">
				<Link
					to=".."
					className="flex items-center text-sm font-bold text-c-dark-gray">
					<svg
						className="mr-2"
						width="7"
						height="10"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M6 9L2 5l4-4"
							stroke="#4661E6"
							strokeWidth="2"
							fill="none"
							fillRule="evenodd"
						/>
					</svg>
					Go Back
				</Link>
			</div>

			<div className="p-8 bg-c-white w-[540px]">
				<form className="space-y-4">
					<div className="flex flex-col space-y-2">
						<label htmlFor="title">
							<p className="text-sm font-bold text-c-dark-blue">
								Feedback Title
							</p>
							<p className="text-sm text-c-dark-gray">
								Add a short, descriptive headline
							</p>
						</label>
						<input
							type="text"
							name="title"
							id="title"
							className="p-3 rounded-md bg-c-light-gray"
						/>
					</div>

					<div className="flex flex-col space-y-2">
						<label htmlFor="category">
							<p className="text-sm font-bold text-c-dark-blue">Category</p>
							<p className="text-sm text-c-dark-gray">
								Choose a category for your feedback
							</p>
						</label>
						<select
							name="category"
							id="category"
							className="p-3 rounded-md bg-c-light-gray">
							<option value="feature">Feature</option>
							<option value="UI">UI</option>
							<option value="UX">UX</option>
							<option value="enhancement">Enhancement</option>
							<option value="bug">Bug</option>
						</select>
					</div>

					<div className="flex flex-col space-y-2">
						<label htmlFor="details">
							<p className="text-sm font-bold text-c-dark-blue">
								Feedback Details
							</p>
							<p className="text-sm text-c-dark-gray">
								Include any specific comments on what should be improved, added,
								etc.
							</p>
						</label>
						<textarea
							name="details"
							id="details"
							className="rounded-md bg-c-light-gray"
						/>
					</div>

					<div className="flex justify-end pt-8 space-x-4">
						<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-dark-blue text-c-white hover:bg-c-dark-blue/75">
							Cancel
						</button>
						<button className="px-6 py-3 text-sm font-bold transition-colors rounded-lg bg-c-magenta text-c-white hover:bg-c-magenta/75">
							Add Feedback
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewFeedback;
