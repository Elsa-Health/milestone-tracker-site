import { friendlyFormatMonths, isMilestoneChecked } from "../common/utils";
import { getMilestonesByAge } from "../model";

describe("Friendly Format Months", () => {
	test("its should return years given months", () => {
		expect(friendlyFormatMonths(24)).toBe("2 Years");
	});

	test("its should return years given months that are not divisible by 12", () => {
		expect(friendlyFormatMonths(26)).toBe("2 Years");
		expect(friendlyFormatMonths(33)).toBe("3 Years");
	});

	test("its should return months given months that are not more than 12", () => {
		expect(friendlyFormatMonths(6)).toBe("6 Months");
	});
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

	// TODO: add tests for false
	// TODO: ^^ Requires extracting out the updateTracker method from the IndexPage
});
