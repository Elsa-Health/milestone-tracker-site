import Nav from "../components/nav";
import _ from "lodash";
import Select from "react-select";
import { useEffect, useState } from "react";
import {
	getMilestonesByAge,
	getMilestonesByAgeAndCategory,
	milestoneCategory,
	milestones,
} from "../model";

const MONTHS = 12;

const options = _.times(13, (n) => n + 2).map((age) => ({
	value: age * MONTHS,
	label: `${age} Years`,
}));

interface TrackerNavigatorProps {
	onBack: () => void;
	onCancel: () => void;
}

const TrackerNavigator: React.FC<TrackerNavigatorProps> = ({
	onBack,
	onCancel,
}) => (
	<div className="flex text-elsa-blue text-lg flex-row justify-between mb-8">
		<span
			onClick={onBack}
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
			className="cursor-pointer hover:bg-gray-100 p-3 pb-2 rounded-md"
		>
			Cancel
		</span>
	</div>
);

const TrackerContainer: React.FC = ({ children }) => (
	<div className="bg-gray-50 border-gray-300 border p-10 md:px-14 lg:px-12 rounded-lg">
		{children}
	</div>
);

interface LandingPageProps {
	onStart: () => void;
}
const LandingPage: React.FC<LandingPageProps> = ({ onStart }) => (
	<>
		<div className="flex-row flex justify-center mb-14">
			<img src="./elsa-children-main.svg" className="w-80" alt="" />
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
			<button
				onClick={onStart}
				className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
			>
				Start Tracking
			</button>
		</div>
	</>
);

type tracker = {
	code: milestoneCategory;
	results: { code: string; weight: number; value: boolean }[];
};

type route =
	| "landing"
	| "features"
	| "gross"
	| "fine"
	| "congitive"
	| "language"
	| "social"
	| "assessment";

const DevelopmentTracker: React.FC = () => {
	const routeProgression: route[] = [
		"landing",
		"features",
		"gross",
		"fine",
		"congitive",
		"language",
		"social",
		"assessment",
	];
	const [currentRoute, setCurrentRoute] = useState<route>("landing");
	const [age, setAge] = useState<number>(24);
	const [tracker, setTracker] = useState<tracker[]>([]);

	useEffect(() => {
		const ageMilestones = getMilestonesByAge(age);
		if (!ageMilestones) return;

		const initTracker = ageMilestones.categories.map((category) => ({
			code: category.code,
			results: category.milestones.map((mile) => ({
				code: mile.code,
				weight: mile.weight,
				value: false,
			})),
		}));

		setTracker(initTracker);
	}, [age]);

	const updateTrackerValue = (
		type: milestoneCategory,
		code: string,
		value: boolean
	) => {
		console.log(type, code, value, tracker);
		const trackerClone = _.cloneDeep(tracker);
		const trackIdx = trackerClone.findIndex((track) => track.code === type);
		if (trackIdx < 0) return;

		console.log(trackIdx);

		const resultsIdx = trackerClone[trackIdx].results.findIndex(
			(result) => result.code === code
		);
		if (resultsIdx < 0) return;

		trackerClone[trackIdx].results[resultsIdx].value = value;

		// tracker.find(track => track.code === type)?.results.find(result => result.code === code)?.value = value
		setTracker(trackerClone);
	};

	const getMilestoneTrackScore = (
		code: string
	): { passed: number; total: number } => {
		const results = tracker.find((track) => track.code === code)?.results;

		return {
			passed:
				results?.filter((result) => result.value === true).length || 0,
			total: results?.length || 0,
		};
	};

	const goBack = () => {
		const routeIndex = routeProgression.indexOf(currentRoute);
		if (routeIndex === -1 || routeIndex === 0) return null;

		const newRoute = routeProgression[routeIndex - 1];
		setCurrentRoute(newRoute);
	};

	const exitTracker = () => setCurrentRoute("landing");

	const onNext = () => {
		const routeIndex = routeProgression.indexOf(currentRoute);
		if (routeIndex === -1) return null;

		const newRoute = routeProgression[routeIndex + 1];
		setCurrentRoute(newRoute);
	};

	const ageMilestones = getMilestonesByAge(age);

	console.log("Milestones: ", ageMilestones);

	return (
		<TrackerContainer>
			{currentRoute === "landing" && <LandingPage onStart={onNext} />}
			{currentRoute === "features" && (
				<div>
					<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
					<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
						<h1 className="text-xl lg:text-2xl mb-4">
							To start, please tell us the age of the child.
						</h1>

						<Select
							className=""
							placeholder="Child Age"
							value={{
								value: age,
								label: friendlyFormatMonths(age),
							}}
							onChange={(val) => setAge(val?.value || 24)}
							options={options}
						/>
					</div>

					<div className="flex justify-end mt-8 lg:mt-24">
						<button
							onClick={onNext}
							className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
						>
							Next
						</button>
					</div>
				</div>
			)}
			{currentRoute === "gross" && ageMilestones && (
				<div>
					<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
					<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
						<h1 className="text-xl lg:text-2xl mb-4">
							Is the child able to do the following related to
							their <span className="text-elsa-blue">gross</span>{" "}
							motor skills?
						</h1>

						<h1 className="mt-2 text-md lg:text-xl mb-4">
							Please check all that the child is able to do
						</h1>

						{getMilestonesByAgeAndCategory(age, "gross motor").map(
							(milestone) => {
								const isChecked =
									tracker
										.find(
											(track) =>
												track.code === "gross motor"
										)
										?.results.find(
											(result) =>
												result.code === milestone.code
										)?.value || false;
								return (
									<Card
										key={milestone.text}
										containerClassName="mb-4"
									>
										<div className="grid grid-cols-12 items-center">
											<div className="col-span-11">
												<label
													htmlFor={milestone.code}
													className="ml-2 block text-md text-gray-900"
												>
													{milestone.text}
												</label>
											</div>
											<div className="col-span-1 justify-center flex">
												<input
													id={milestone.code}
													name={milestone.code}
													type="checkbox"
													checked={isChecked}
													onChange={() =>
														updateTrackerValue(
															"gross motor",
															milestone.code,
															!isChecked
														)
													}
													className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded"
												/>
											</div>
										</div>
									</Card>
								);
							}
						)}
					</div>

					<div className="flex justify-end mt-8 lg:mt-24">
						<button
							onClick={onNext}
							className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
						>
							Next
						</button>
					</div>
				</div>
			)}

			{currentRoute === "fine" && ageMilestones && (
				<div>
					<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
					<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
						<h1 className="text-xl lg:text-2xl mb-4">
							Is the child able to do the following related to
							their <span className="text-elsa-blue">fine</span>{" "}
							motor skills?
						</h1>

						<h1 className="mt-2 text-md lg:text-xl mb-4">
							Please check all that the child is able to do
						</h1>

						{getMilestonesByAgeAndCategory(age, "fine motor").map(
							(milestone) => {
								const isChecked =
									tracker
										.find(
											(track) =>
												track.code === "fine motor"
										)
										?.results.find(
											(result) =>
												result.code === milestone.code
										)?.value || false;
								return (
									<Card
										key={milestone.text}
										containerClassName="mb-4"
									>
										<div className="grid grid-cols-12 items-center">
											<div className="col-span-11">
												<label
													htmlFor={milestone.code}
													className="ml-2 block text-md text-gray-900"
												>
													{milestone.text}
												</label>
											</div>
											<div className="col-span-1 justify-center flex">
												<input
													id={milestone.code}
													name={milestone.code}
													type="checkbox"
													checked={isChecked}
													onChange={() =>
														updateTrackerValue(
															"fine motor",
															milestone.code,
															!isChecked
														)
													}
													className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded"
												/>
											</div>
										</div>
									</Card>
								);
							}
						)}
					</div>

					<div className="flex justify-end mt-8 lg:mt-24">
						<button
							onClick={onNext}
							className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
						>
							Next
						</button>
					</div>
				</div>
			)}

			{currentRoute === "congitive" && ageMilestones && (
				<div>
					<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
					<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
						<h1 className="text-xl lg:text-2xl mb-4">
							Is the child able to do the following related to
							their{" "}
							<span className="text-elsa-blue">cognitive</span>{" "}
							motor skills?
						</h1>

						<h1 className="mt-2 text-md lg:text-xl mb-4">
							Please check all that the child is able to do
						</h1>

						{getMilestonesByAgeAndCategory(age, "cognitive").map(
							(milestone) => {
								const isChecked =
									tracker
										.find(
											(track) =>
												track.code === "cognitive"
										)
										?.results.find(
											(result) =>
												result.code === milestone.code
										)?.value || false;
								return (
									<Card
										key={milestone.text}
										containerClassName="mb-4"
									>
										<div className="grid grid-cols-12 items-center">
											<div className="col-span-11">
												<label
													htmlFor={milestone.code}
													className="ml-2 block text-md text-gray-900"
												>
													{milestone.text}
												</label>
											</div>
											<div className="col-span-1 justify-center flex">
												<input
													id={milestone.code}
													name={milestone.code}
													type="checkbox"
													checked={isChecked}
													onChange={() =>
														updateTrackerValue(
															"cognitive",
															milestone.code,
															!isChecked
														)
													}
													className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded"
												/>
											</div>
										</div>
									</Card>
								);
							}
						)}
					</div>

					<div className="flex justify-end mt-8 lg:mt-24">
						<button
							onClick={onNext}
							className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
						>
							Next
						</button>
					</div>
				</div>
			)}

			{currentRoute === "language" && ageMilestones && (
				<div>
					<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
					<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
						<h1 className="text-xl lg:text-2xl mb-4">
							Is the child able to do the following related to
							their{" "}
							<span className="text-elsa-blue">language</span>{" "}
							motor skills?
						</h1>

						<h1 className="mt-2 text-md lg:text-xl mb-4">
							Please check all that the child is able to do
						</h1>

						{getMilestonesByAgeAndCategory(age, "language").map(
							(milestone) => {
								const isChecked =
									tracker
										.find(
											(track) => track.code === "language"
										)
										?.results.find(
											(result) =>
												result.code === milestone.code
										)?.value || false;
								return (
									<Card
										key={milestone.text}
										containerClassName="mb-4"
									>
										<div className="grid grid-cols-12 items-center">
											<div className="col-span-11">
												<label
													htmlFor={milestone.code}
													className="ml-2 block text-md text-gray-900"
												>
													{milestone.text}
												</label>
											</div>
											<div className="col-span-1 justify-center flex">
												<input
													id={milestone.code}
													name={milestone.code}
													type="checkbox"
													checked={isChecked}
													onChange={() =>
														updateTrackerValue(
															"language",
															milestone.code,
															!isChecked
														)
													}
													className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded"
												/>
											</div>
										</div>
									</Card>
								);
							}
						)}
					</div>

					<div className="flex justify-end mt-8 lg:mt-24">
						<button
							onClick={onNext}
							className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
						>
							Next
						</button>
					</div>
				</div>
			)}

			{currentRoute === "social" && ageMilestones && (
				<div>
					<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
					<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
						<h1 className="text-xl lg:text-2xl mb-4">
							Is the child able to do the following related to
							their <span className="text-elsa-blue">social</span>{" "}
							motor skills?
						</h1>

						<h1 className="mt-2 text-md lg:text-xl mb-4">
							Please check all that the child is able to do
						</h1>

						{getMilestonesByAgeAndCategory(age, "social").map(
							(milestone) => {
								const isChecked =
									tracker
										.find(
											(track) => track.code === "social"
										)
										?.results.find(
											(result) =>
												result.code === milestone.code
										)?.value || false;
								return (
									<Card
										key={milestone.text}
										containerClassName="mb-4"
									>
										<div className="grid grid-cols-12 items-center">
											<div className="col-span-11">
												<label
													htmlFor={milestone.code}
													className="ml-2 block text-md text-gray-900"
												>
													{milestone.text}
												</label>
											</div>
											<div className="col-span-1 justify-center flex">
												<input
													id={milestone.code}
													name={milestone.code}
													type="checkbox"
													checked={isChecked}
													onChange={() =>
														updateTrackerValue(
															"social",
															milestone.code,
															!isChecked
														)
													}
													className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded"
												/>
											</div>
										</div>
									</Card>
								);
							}
						)}
					</div>

					<div className="flex justify-end mt-8 lg:mt-24">
						<button
							onClick={onNext}
							className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
						>
							Next
						</button>
					</div>
				</div>
			)}

			{currentRoute === "assessment" &&
				(() => {
					const grossScore = getMilestoneTrackScore("gross motor");
					const fineScore = getMilestoneTrackScore("fine motor");
					const cognitiveScore = getMilestoneTrackScore("cognitive");
					const languageScore = getMilestoneTrackScore("language");
					const socialScore = getMilestoneTrackScore("social");

					const scoreDeficit =
						grossScore.total +
						fineScore.total +
						cognitiveScore.total +
						languageScore.total +
						socialScore.total -
						(grossScore.passed +
							fineScore.passed +
							cognitiveScore.passed +
							languageScore.passed +
							socialScore.passed);
					// const socialScore = getMilestoneTrackScore("social")
					return (
						<div>
							{/* <TrackerNavigator onBack={goBack} onCancel={exitTracker} /> */}
							<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40 pt-4">
								<h1 className="text-2xl md:text-3xl mb-2 prose font-bold">
									Development Assessment
								</h1>
								<h1 className="text-md">
									Assessment results for the child's
									development are below
								</h1>

								<br />

								<h1 className="text-md">
									Child's Age: {friendlyFormatMonths(age)}
								</h1>

								<div className="mt-10 grid grid-cols-12 gap-4">
									<div className="col-span-12 md:col-span-6 border border-gray-50 rounded-md">
										<img
											src="./superhero.svg"
											className="object-cover"
										/>
									</div>
									<div className="col-span-12 md:col-span-6">
										<h1 className="text-lg bold mb-3">
											Overall, the child is{" "}
											<span className=" underline text-elsa-blue">
												{scoreDeficit === 0 &&
													"on track"}
												{scoreDeficit <= 5 &&
													scoreDeficit !== 0 &&
													"almost there"}
												{scoreDeficit > 5 &&
													"falling behind"}
											</span>
											.
										</h1>

										<div className="flex w-full md:w-64 lg:w-80 mb-3 text-sm md:text-md">
											<div className="w-1/6 justify-center flex items-center">
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
														d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
													/>
												</svg>
											</div>
											<div className="w-5/6">
												Gross Motor ({grossScore.passed}
												/{grossScore.total})
												<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
													<div
														className="bg-elsa-blue h-3"
														style={{
															width: `${
																(grossScore.passed *
																	100) /
																grossScore.total
															}%`,
														}}
													/>
												</div>
											</div>
										</div>

										<div className="flex w-full md:w-64 lg:w-80 mb-3 text-sm md:text-md">
											<div className="w-1/6 justify-center flex items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													className="h-5 w-5 text-gray-700"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
													/>
												</svg>
											</div>
											<div className="w-5/6">
												Fine Motor ({fineScore.passed}/
												{fineScore.total})
												<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
													<div
														className="bg-elsa-blue h-3"
														style={{
															width: `${
																(fineScore.passed *
																	100) /
																fineScore.total
															}%`,
														}}
													/>
												</div>
											</div>
										</div>

										<div className="flex w-full md:w-64 lg:w-80 mb-3 text-sm md:text-md">
											<div className="w-1/6 justify-center flex items-center">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													className="h-5 w-5 text-gray-700 inline"
												>
													<path
														fill="#fff"
														d="M12 14l9-5-9-5-9 5 9 5z"
													/>
													<path
														fill="#fff"
														d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
													/>
												</svg>
											</div>
											<div className="w-5/6 md:text-md">
												Cognitive Skills (
												{cognitiveScore.passed}/
												{cognitiveScore.total})
												<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
													<div
														className="bg-elsa-blue h-3"
														style={{
															width: `${
																(cognitiveScore.passed *
																	100) /
																cognitiveScore.total
															}%`,
														}}
													/>
												</div>
											</div>
										</div>

										<div className="flex w-full md:w-64 lg:w-80 mb-3 text-sm md:text-md">
											<div className="w-1/6 justify-center flex items-center">
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
														d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
													/>
												</svg>
											</div>
											<div className="w-5/6">
												Language Skills (
												{languageScore.passed}/
												{languageScore.total})
												<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
													<div
														className="bg-elsa-blue h-3"
														style={{
															width: `${
																(languageScore.passed *
																	100) /
																languageScore.total
															}%`,
														}}
													/>
												</div>
											</div>
										</div>

										<div className="flex w-full md:w-64 lg:w-80 mb-3 text-sm md:text-md">
											<div className="w-1/6 justify-center flex items-center">
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
														d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
													/>
												</svg>
											</div>
											<div className="w-5/6">
												Social & Play Skills (
												{socialScore.passed}/
												{socialScore.total})
												<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
													<div
														className="bg-elsa-blue h-3"
														style={{
															width: `${
																(socialScore.passed *
																	100) /
																socialScore.total
															}%`,
														}}
													/>
												</div>
											</div>
										</div>
									</div>
								</div>

								{/* Next Steps */}
								<div className="mt-14">
									<h1 className="text-2xl md:text-3xl mb-1 prose font-bold">
										Next Steps
									</h1>
									<p>
										Based on the assessment, the following
										things are recommended as areasto work
										on to improve development.
									</p>

									<div className="grid grid-cols-12 gap-4 mt-4">
										<Card containerClassName="col-span-12 md:col-span-6">
											<div className="">
												<h1 className="text-lg">
													Gross Motor
												</h1>
												<ul className="list-disc pl-8">
													<li>Something to do</li>
													<li>Something to do</li>
												</ul>
											</div>
										</Card>
										<Card containerClassName="col-span-12 md:col-span-6">
											<div className="">
												<h1 className="text-lg">
													Gross Motor
												</h1>
												<ul className="list-disc pl-8">
													<li>Something to do</li>
													<li>Something to do</li>
												</ul>
											</div>
										</Card>
									</div>
								</div>

								<div className="mt-8">
									Note: This assessment does not consittue a
									medical diagnosis. If ou have seiorus
									concerns about your child's development,
									please visit a healthcare professional
								</div>
							</div>

							<div className="flex justify-end mt-8 lg:mt-24">
								<button
									onClick={exitTracker}
									className="bg-elsa-blue px-20 py-5 rounded-md shadow-md text-white focus:outline-none hover:shadow-lg"
								>
									Complete
								</button>
							</div>
						</div>
					);
				})()}
		</TrackerContainer>
	);
};

interface CardProps {
	containerClassName?: string;
}

const Card: React.FC<CardProps> = ({ children, containerClassName }) => (
	<div
		className={`bg-white overflow-hidden shadow rounded-lg ${containerClassName}`}
	>
		<div className="px-4 py-5 sm:p-6">{children}</div>
	</div>
);

export default function IndexPage() {
	return (
		<div>
			<Nav />
			<div className="py-20 px-8 md:px-24 lg:px-30 xl:px-60 2xl:px-80">
				<DevelopmentTracker />
			</div>
		</div>
	);
}

function friendlyFormatMonths(months: number): string {
	return months >= 12 ? months / 12 + " Years" : months + " Months";
}
