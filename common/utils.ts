import _ from "lodash";


/**
 * Format Months into a friendlier way when turned into years
 *
 * @export
 * @param {number} months
 * @return {*}  {string}
 */
export function friendlyFormatMonths(months: number): string {
	return months >= 12
		? Math.round(months / 12) + " Years"
		: months + " Months";
}

/**
 * Prevent the web page from being reloaded or navigating away in
 * the browser
 *
 * @export
 * @param {BeforeUnloadEvent} event
 * @return {*}
 */
export function confirmOnPageExit(event: BeforeUnloadEvent) {
	// If we haven't been passed the event get the window.event
	event = event || window.event;

	var message =
		"Are you sure you want to leave this page? You will have to restart your assessment.";

	// For IE6-8 and Firefox prior to version 4
	if (event) {
		event.returnValue = message;
	}

	// For Chrome, Safari, IE8+ and Opera 12+
	return message;
}

/**
 * Given the tracker list of milestones and the milestone code of interest
 * return whether the milestone is checked or not
 *
 * @export
 * @param {tracker[]} tracker
 * @param {string} milestoneCode
 * @return {*}  {boolean}
 */
export function isMilestoneChecked(
	tracker: tracker[],
	trackerCode: milestoneCategory,
	milestoneCode: string
): boolean {
	return (
		tracker
			.find((track) => track.code === trackerCode)
			?.results.find((result) => result.code === milestoneCode)?.value ||
		false
	);
}

/**
 * Calculate the total track score given the results of the tracker
 *
 * @export
 * @param {tracker[]} tracker
 * @param {string} code
 * @return {*}  {{ passed: number; total: number }}
 */
export function getMilestoneTrackScore(
	tracker: tracker[],
	code: string
): { passed: number; total: number } {
	const results = tracker.find((track) => track.code === code)?.results;

	return {
		passed: results?.filter((result) => result.value === true).length || 0,
		total: results?.length || 0,
	};
}


export const getUpdateTrackerValue = (
	type: milestoneCategory,
	code: string,
	value: boolean,
	tracker: tracker[]
) => {
	console.log(type, code, value, tracker);
	const trackerClone = _.cloneDeep(tracker);
	const trackIdx = trackerClone.findIndex((track) => track.code === type);
	if (trackIdx < 0) return [];

	console.log(trackIdx);

	const resultsIdx = trackerClone[trackIdx].results.findIndex(
		(result) => result.code === code
	);
	if (resultsIdx < 0) return [];

	trackerClone[trackIdx].results[resultsIdx].value = value;
	return(trackerClone);

	// tracker.find(track => track.code === type)?.results.find(result => result.code === code)?.value = value
	//setTracker(trackerClone);
};

export const getGoBack = (
	routeProgression: route[],
	currentRoute: route
) => {
	const routeIndex = routeProgression.indexOf(currentRoute);
	if (routeIndex === -1 || routeIndex === 0) return null;

	const newRoute = routeProgression[routeIndex - 1];
	return newRoute;
	//setCurrentRoute(newRoute);
};

export const getOnNext = (
	routeProgression: route[],
	currentRoute: route
) => {
	const routeIndex = routeProgression.indexOf(currentRoute);
	if (routeIndex === -1) return null;

	const newRoute = routeProgression[routeIndex + 1];
	return newRoute;
	//setCurrentRoute(newRoute);
};
