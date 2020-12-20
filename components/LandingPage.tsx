import React from "react";
import Button from "./Button";

interface LandingPageProps {
	onStart: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => (
	<>
		<div className="flex-row flex justify-center mb-14">
			<img
				src="./elsa-children-main.svg"
				className="w-60 md:w-80 h-32 md:h-auto"
				alt=""
			/>
		</div>
		<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
			<h1 className="text-2xl md:text-3xl mb-8 prose font-bold text-center">
				Development Milestone Tracker
			</h1>

			<div className="flex">
				<div className="mr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-9 w-9 text-gray-700"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
						/>
					</svg>
				</div>
				<div className="prose prose-md md:prose-lg max-w-none">
					This tool is for assessing and tracking your child's
					milestone development to make sure they are on track. It
					will look at the following areas of development:
					<ul className="text-md">
						<li className="">Gross Motor</li>
						<li className="">Fine Motor</li>
						<li className="">Cognitive</li>
						<li className="">Language/ Communication</li>
						<li className="">Social and Play</li>
					</ul>
				</div>
			</div>

			<div className="flex mt-6">
				<div className="mr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-9 w-9 text-gray-700"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
						/>
					</svg>
				</div>
				<div className="prose prose-md md:prose-lg max-w-none">
					You'll answer a few questions about your child and identify
					various skills on the next pages.
				</div>
			</div>

			<div className="flex mt-6">
				<div className="mr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="h-9 w-9 text-gray-700"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
						/>
					</svg>
				</div>
				<div className="prose prose-md md:prose-lg max-w-none">
					This information will not be shared with anyone and will not
					be stored. It should not be used to make any medical
					decisions. If you have a medical emergency, please consult a
					healthcare provider immediately.
				</div>
			</div>
		</div>

		<div className="flex justify-center mt-8">
			<Button text="Start Tracking" onClick={onStart} />
		</div>
	</>
);

export default LandingPage;
