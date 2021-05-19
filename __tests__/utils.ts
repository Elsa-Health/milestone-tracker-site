import { update } from "lodash";
import { friendlyFormatMonths, getMilestoneTrackScore, isMilestoneChecked } from "../common/utils";
import { getMilestonesByAge, milestones } from "../model";

const mths= 25;
// const years_2= 24;
// const notDivisible_1= 33;
// const notDivisible_2= 26;

describe("Friendly Format Months", () => {

	if (mths>=12 && mths%12 == 0){
	test("its should return years given months", () => {
		expect(friendlyFormatMonths(mths)).toBe(mths/12+" Years");
		//console.log(mths/12+" Years");
	});
	}
	else if (mths>12 && mths%12 != 0){
	test("its should return years given months that are not divisible by 12", () => {
		expect(friendlyFormatMonths(mths)).toBe(Math.round(mths/12)+" Years");
		//expect(friendlyFormatMonths(notDivisible_1)).toBe(Math.round(notDivisible_1/12)+" Years");
		//console.log(Math.round(mths/12)+" Years");
	});
	}
	else if(mths<12){
	test("its should return months given months that are not more than 12", () => {
		expect(friendlyFormatMonths(mths)).toBe(mths+" Months");
		//console.log(mths+" Months");
	});
	}
});

describe("Is Milestone Checked", () => {
	const ageMilestones = getMilestonesByAge(24);

	const mockTracker =
		ageMilestones?.categories.map((category) => ({
			code: category.code,
			results: category.milestones.map((mile) => ({
				code: mile.code,
				weight: mile.weight,
				value: false,
			})),
		})) || [];

	test("it should return false because no item is checked", () => {
		expect(isMilestoneChecked(mockTracker, "language", "phrases")).toBe(
			false
		);
	});

	// const milestoneupdate = getMilestoneTrackScore;

	// const mockTracker1 =
	// 	milestoneupdate()?((category: { code: any; milestones: any[]; }) => ({
	// 		code: category.code,
	// 		tracker: category.milestones.map((mile) => ({
	// 			code: mile.code,
	// 			weight: mile.weight,
	// 			value: false,
	// 		})),
	// 	})) || [];

	// test("it should return false because no item is checked", () => {
	// 	expect(isMilestoneChecked(mockTracker1, "language", "phrases")).toBe(
	// 		false
	// 	);
	// });

	// TODO: add tests for false
	// TODO: ^^ Requires extracting out the updateTracker method from the IndexPage
});
