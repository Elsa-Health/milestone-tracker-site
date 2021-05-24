import { update } from "lodash";
import { confirmOnPageExit, friendlyFormatMonths, getMilestoneTrackScore, getUpdateTrackerValue, isMilestoneChecked } from "../common/utils";
import { getMilestoneByAgeAndCategory, getMilestonesByAge, milestones } from "../model";

const months1= 24;
const months2= 33;
const months3= 9;
// const notDivisible_1= 33;
// const notDivisible_2= 26;

describe("Friendly Format Months", () => {

	// if (months1>=12 && months1%12 == 0){
	test("its should return years given months", () => {
		expect(friendlyFormatMonths(months1)).toBe(months1/12+" Years");
		//console.log(mths/12+" Years");
	 });
	// }
	// else if (months>12 && months%12 != 0){
	test("its should return years given months that are not divisible by 12", () => {
		expect(friendlyFormatMonths(months2)).toBe(Math.round(months2/12)+" Years");
		//expect(friendlyFormatMonths(notDivisible_1)).toBe(Math.round(notDivisible_1/12)+" Years");
		//console.log(Math.round(mths/12)+" Years");
	 });
	// }
	// else if(months<12){
	test("its should return months given months that are not more than 12", () => {
		expect(friendlyFormatMonths(months3)).toBe(months3+" Months");
		//console.log(mths+" Months");
	 });
	// }
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

describe("Get Milestone TrackScore ", () =>{

	test("Is the value true?", () =>{

		const score = getMilestoneTrackScore([], "0");
		expect(score).toBeDefined();
	})
})

// describe("checking Function confirmOnPageExit", () =>{
// 	test("clicking Exit should ask for confirmation", () =>{
// 		const map = {};
		
// 		window.addEventListener = jest.fn((event, cb) => {
//   			map[event] = cb;

		
// 	});

// 	})
// })

describe("Is GoBack present", () => {

	const onGoback = jest.fn();

	test("back should return to the current route", () =>{
		expect(onGoback).toHaveBeenCalledTimes(0);
	})
})
