import React from "react";

interface TrackerNavigatorProps {
	onBack: (event: React.MouseEvent) => any;
	onCancel: (event: React.MouseEvent) => any;
}

const TrackerNavigator: React.FC<TrackerNavigatorProps> = ({
	onBack,
	onCancel,
}) => (
	<div data-testid="TrackerNavigator" className="flex text-elsa-blue text-lg flex-row justify-between mb-8">
		<span
            onClick={onBack}
            data-testid="TrackerNavigatorBackBtn"
			className="cursor-pointer hover:bg-gray-100 p-2 pr-4 rounded-md"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="h-5 w-5 text-gray-700 inline"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M15 19l-7-7 7-7"
				/>
			</svg>
			Back
		</span>
		<span
            onClick={onCancel}
            data-testid="TrackerNavigatorCancelBtn"
			className="cursor-pointer hover:bg-gray-100 p-2 pb-2 rounded-md"
		>
			Cancel
		</span>
	</div>
);

export default TrackerNavigator;
