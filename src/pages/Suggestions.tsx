// INTERNAL IMPORTS
import Navigation from "../components/Navigation";
import SuggestionsGrid from "../features/SuggestionsGrid";

const Suggestions = () => {
	return (
		<div className="container grid grid-cols-4 gap-4 p-4">
			<Navigation />
			<SuggestionsGrid />
		</div>
	);
};

export default Suggestions;
