import { update } from "lodash";
import { friendlyFormatMonths, getMilestoneTrackScore, isMilestoneChecked } from "../common/utils";
import { getMilestoneByAgeAndCategory, getMilestonesByAge, milestones } from "../model";
import {getUpdateTrackerValue} from "../common/utils"

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
	//const milestones = getMilestoneByAgeAndCategory;

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

	// TODO: add tests for false
	// TODO: ^^ Requires extracting out the updateTracker method from the IndexPage
});

describe("Is Tracker Updated", () => {

	test("update should return false because no new item is pushed", () =>{
		expect(getUpdateTrackerValue("gross motor", "language", false, [])).toStrictEqual([]);
	})

});
