import Head from "next/head";
import _ from "lodash";
import { useEffect, useState } from "react";

import LandingPage from "../components/LandingPage";
import Nav from "../components/nav";
import { getMilestonesByAge } from "../model";
import { confirmOnPageExit } from "../common/utils";
import ChildFeatures from "../components/ChildFeatures";
import GrossMotorChecklist from "../components/GrossMotorChecklist";
import FineMotorChecklist from "../components/FineMotorChecklist";
import CognitiveChecklist from "../components/CognitiveChecklist";
import LanguageChecklist from "../components/LanguageChecklist";
import SocialChecklist from "../components/SocialChecklist";
import AssessmentResults from "../components/AssessmentResults";

const TrackerContainer: React.FC = ({ children }) => (
	<div className="bg-gray-50 border-gray-300 border p-8 md:px-14 lg:px-12 rounded-lg">
		{children}
	</div>
);

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

	// Set the tracker local state with the relevant age group milestones for tracking
	useEffect(() => {
		setTrackerMilestones();
	}, [age]);

	//NEXT: Fix console error with useEffect!

	// useEffect(() => {
	// 	// scroll to top on new page render
	// 	window.scrollTo(0, 0);
	// 	if (currentRoute !== "landing") {
	// 		// Prevent unintentional navigation away from the site
	// 		window.onbeforeunload = confirmOnPageExit;
	// 	} else {
	// 		setTrackerMilestones(); // reset the age milestones to clear state
	// 		window.onbeforeunload = null;
	// 	}
	// }, [currentRoute]);

	const setTrackerMilestones = () => {
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
	};

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

	return (
		<TrackerContainer>
			{currentRoute === "landing" && <LandingPage onStart={onNext} />}
			{currentRoute === "features" && (
				<ChildFeatures
					setAge={setAge}
					age={age}
					onNext={onNext}
					goBack={goBack}
					exitTracker={exitTracker}
				/>
			)}
			{currentRoute === "gross" && ageMilestones && (
				<GrossMotorChecklist
					age={age}
					tracker={tracker}
					updateTrackerValue={updateTrackerValue}
					onNext={onNext}
					goBack={goBack}
					exitTracker={exitTracker}
				/>
			)}

			{currentRoute === "fine" && ageMilestones && (
				<FineMotorChecklist
					age={age}
					tracker={tracker}
					updateTrackerValue={updateTrackerValue}
					onNext={onNext}
					goBack={goBack}
					exitTracker={exitTracker}
				/>
			)}

			{currentRoute === "congitive" && ageMilestones && (
				<CognitiveChecklist
					age={age}
					tracker={tracker}
					updateTrackerValue={updateTrackerValue}
					onNext={onNext}
					goBack={goBack}
					exitTracker={exitTracker}
				/>
			)}

			{currentRoute === "language" && ageMilestones && (
				<LanguageChecklist
					age={age}
					tracker={tracker}
					updateTrackerValue={updateTrackerValue}
					onNext={onNext}
					goBack={goBack}
					exitTracker={exitTracker}
				/>
			)}

			{currentRoute === "social" && ageMilestones && (
				<SocialChecklist
					age={age}
					tracker={tracker}
					updateTrackerValue={updateTrackerValue}
					onNext={onNext}
					goBack={goBack}
					exitTracker={exitTracker}
				/>
			)}

			{currentRoute === "assessment" && (
				<AssessmentResults
					age={age}
					tracker={tracker}
					exitTracker={exitTracker}
				/>
			)}
		</TrackerContainer>
	);
};

export default function IndexPage() {
	return (
		<div data-testid="IndexPage">
			<Head>
				<title>Elsa Health | Pediatric Milestone Tracker</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<meta
					name="description"
					content="Elsa Health child milestone assessment tool online. Assess the developmental progress of your child online."
				/>
			</Head>
			<Nav />
			<div className="py-20 px-4 md:px-24 lg:px-30 xl:px-60 2xl:px-80">
				<DevelopmentTracker />

				<div className="mt-12 text-center">
					<p>
						Developed by Elsa Health with support from the UNICEF
						Innovation Fund.
					</p>
				</div>
			</div>
		</div>
	);
}
