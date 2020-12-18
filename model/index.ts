export type milestoneCategory =
	| "gross motor"
	| "fine motor"
	| "cognitive"
	| "language"
	| "social";

type categoryMilestones = {
	code: string;
	weight: number;
	text: string;
};

interface Milestone {
	months: number;
	name: string;
	categories: {
		code: milestoneCategory;
		name: string;
		milestones: categoryMilestones[];
	}[];
}

export const milestones: Milestone[] = [
	{
		months: 24,
		name: "2 Years",
		categories: [
			{
				code: "gross motor",
				name: "Gross Motor Skills",
				milestones: [
					{
						code: "walk",
						weight: 1,
						text:
							"Walk up and down the stairs while holding your hand",
					},
					{
						code: "catch",
						weight: 1,
						text: "Catch a large ball with arms straight out",
					},
					{
						code: "stand",
						weight: 1,
						text: "Stand on tiptoes if shown first",
					},
					{
						code: "balance",
						weight: 1,
						text:
							"Stand on balance beam with two feet and attempt to step forward",
					},
				],
			},
			{
				code: "fine motor",
				name: "Fine Motor Skills",
				milestones: [
					{
						code: "turning",
						weight: 1,
						text: "Turning single page in a book",
					},
					{
						code: "Holding",
						weight: 1,
						text: "Holding and drinking from a cup independently",
					},
					{
						code: "scissors",
						weight: 1,
						text: "Making snips with scissors",
					},
					{
						code: "puzzles",
						weight: 1,
						text: "Competing insert puzzles",
					},
				],
			},
			{
				code: "cognitive",
				name: "Cognitive Skills",
				milestones: [
					{
						code: "find",
						weight: 1,
						text:
							"Finds things even when hidden under two or three covers",
					},
					{
						code: "sentences",
						weight: 1,
						text:
							"Completes sentences and rhymes in familiar books",
					},
					{
						code: "sort",
						weight: 1,
						text: "Begins to sort shapes and colours",
					},
					{
						code: "games",
						weight: 1,
						text: "Play simple make believe games",
					},
				],
			},
			{
				code: "language",
				name: "Language Skills",
				milestones: [
					{
						code: "phrases",
						weight: 1,
						text:
							"Speak in two and three word phrases or sentences",
					},
					{
						code: "1000",
						weight: 1,
						text:
							"Uses at least 200 words and as many as 1,000 words",
					},
					{
						code: "name",
						weight: 1,
						text: "State their first name",
					},
					{
						code: "pronouns",
						weight: 1,
						text: "Refers to themselves with pronouns",
					},
				],
			},
			{
				code: "social",
				name: "Social Skills",
				milestones: [
					{
						code: "eye-contact",
						weight: 1,
						text: "Establishing eye contact",
					},
					{
						code: "smiling",
						weight: 1,
						text: "Smiling when socially approached",
					},
					{
						code: "expressions",
						weight: 1,
						text: "Responding to facial expressions",
					},
					{
						code: "playing",
						weight: 1,
						text: "Playing with other children",
					},
					{
						code: "verbalising",
						weight: 1,
						text: "Verbalising their desires",
					},
				],
			},
		],
	},
];

export function getMilestonesByAge(age: number): Milestone | undefined {
	return milestones.find((milestone) => milestone.months === age);
}

export function getMilestonesByAgeAndCategory(
	age: number,
	categoryCode: milestoneCategory
): categoryMilestones[] {
	return (
		getMilestonesByAge(age)?.categories.find(
			(category) => category.code === categoryCode
		)?.milestones || []
	);
}
