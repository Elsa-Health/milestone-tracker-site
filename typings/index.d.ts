type milestoneCategory =
	| "gross motor"
	| "fine motor"
	| "cognitive"
	| "language"
	| "social";

type categoryMilestone = {
	code: string;
	weight: number;
	text: string;
};

/**
 * Overall Milestone object containing the different categories that will be asked in the checklist
 *
 * @interface Milestone
 */
interface Milestone {
	months: number;
	name: string;
	categories: {
		code: milestoneCategory;
		name: string;
		milestones: categoryMilestone[];
	}[];
}

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

interface ChecklistPageProps {
	age: number;
	setAge?: (age: number) => any;
	tracker: tracker[];
	updateTrackerValue: (
		type: milestoneCategory,
		code: string,
		value: boolean
	) => any;
	onNext: (event: React.MouseEvent) => any;
	goBack: (event: React.MouseEvent) => any;
	exitTracker: (event: React.MouseEvent) => any;
}
