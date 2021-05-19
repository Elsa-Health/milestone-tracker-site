import React from "react";
import { getMilestonesByAgeAndCategory } from "../model";
import Button from "./Button";
import Card from "./Card";
import TrackerNavigator from "./TrackerNavigator";

const GrossMotorChecklist: React.FC<ChecklistPageProps> = ({
	age,
	tracker,
	updateTrackerValue,
	onNext,
	goBack,
	exitTracker,
}) => {
	return (
		<div data-testId="GrossMotorChecklist">
			<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
			<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
				<h1 className="text-xl font-bold md:font-normal lg:text-2xl mb-4">
					Is the child able to do the following related to their{" "}
					<span className="text-elsa-blue">gross motor</span> skills?
				</h1>

				<h1 className="mt-2 text-md lg:text-xl mb-4">
					Please check all that the child is able to do.
				</h1>

				{getMilestonesByAgeAndCategory(age, "gross motor").map(
					(milestone) => {
						const isChecked =
							tracker
								.find((track) => track.code === "gross motor")
								?.results.find(
									(result) => result.code === milestone.code
								)?.value || false;
						return (
							<Card
								key={milestone.text}
								containerClassName="mb-4"
							>
								<div className="grid grid-cols-12 items-center gap-3">
									<div className="col-span-10 md:col-span-11">
										<label
											htmlFor={milestone.code}
											className="ml-2 block text-md text-gray-900 cursor-pointer"
										>
											{milestone.text}
										</label>
									</div>
									<div className="col-span-2 md:col-span-1 justify-center flex">
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
											className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded cursor-pointer"
										/>
									</div>
								</div>
							</Card>
						);
					}
				)}
			</div>

			<div className="flex justify-end mt-8 lg:mt-24">
				<Button text="Next" onClick={onNext} />
			</div>
		</div>
	);
};

export default GrossMotorChecklist;
