import React from "react";
import { friendlyFormatMonths, getMilestoneTrackScore } from "../common/utils";
import _ from "lodash";
import { getMilestoneByAgeAndCategory } from "../model";
import Button from "./Button";
import Card from "./Card";

interface AssessmentResultsProps {
	age: number;
	tracker: tracker[];
	exitTracker: (event: React.MouseEvent) => any;
}

const AssessmentResults: React.FC<AssessmentResultsProps> = ({
	age,
	tracker,
	exitTracker,
}) => {
	const grossScore = getMilestoneTrackScore(tracker, "gross motor");
	const fineScore = getMilestoneTrackScore(tracker, "fine motor");
	const cognitiveScore = getMilestoneTrackScore(tracker, "cognitive");
	const languageScore = getMilestoneTrackScore(tracker, "language");
	const socialScore = getMilestoneTrackScore(tracker, "social");

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
	return (
		<div data-testid="AssessmentResults" >
			{/* <TrackerNavigator onBack={goBack} onCancel={exitTracker} /> */}
			<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40 pt-4">
				<h1 className="text-2xl md:text-3xl mb-2 prose font-bold">
					Development Assessment
				</h1>
				<h1 className="text-md">
					Assessment results for the child's development are below
				</h1>

				<br />

				<h1 className="text-md">
					Child's Age: {friendlyFormatMonths(age)}
				</h1>

				<div className="mt-10 grid grid-cols-12 gap-4">
					<div className="col-span-12 md:col-span-6 border border-gray-50 rounded-md">
						<img src="./superhero.svg" className="object-cover" />
					</div>
					<div className="col-span-12 md:col-span-6">
						<h1 className="text-lg bold mb-3">
							Overall, the child is{" "}
							<span className=" underline text-elsa-blue">
								{scoreDeficit === 0 && "on track"}
								{scoreDeficit <= 5 &&
									scoreDeficit !== 0 &&
									"almost there"}
								{scoreDeficit > 5 && "falling behind"}
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
								Gross Motor ({grossScore.passed}/
								{grossScore.total})
								<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
									<div
										className="bg-elsa-blue h-3"
										style={{
											width: `${
												(grossScore.passed * 100) /
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
								Fine Motor ({fineScore.passed}/{fineScore.total}
								)
								<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
									<div
										className="bg-elsa-blue h-3"
										style={{
											width: `${
												(fineScore.passed * 100) /
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
								Cognitive Skills ({cognitiveScore.passed}/
								{cognitiveScore.total})
								<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
									<div
										className="bg-elsa-blue h-3"
										style={{
											width: `${
												(cognitiveScore.passed * 100) /
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
								Language Skills ({languageScore.passed}/
								{languageScore.total})
								<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
									<div
										className="bg-elsa-blue h-3"
										style={{
											width: `${
												(languageScore.passed * 100) /
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
								Social & Play Skills ({socialScore.passed}/
								{socialScore.total})
								<div className="flex flex-row border border-gray-300 w-full rounded-md overflow-hidden">
									<div
										className="bg-elsa-blue h-3"
										style={{
											width: `${
												(socialScore.passed * 100) /
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
					{scoreDeficit === 0 ? (
						<p>
							Based on the assessment, your child has met all
							their milestones according to the criteria we are
							tracking!
						</p>
					) : (
						<div>
							<p>
								Based on the assessment, the following things
								are recommended as areas to work on to improve
								development.
							</p>
							<div className="grid grid-cols-12 gap-4 mt-4">
								{tracker
									.filter((track) =>
										track.results.some(
											(res) => res.value === false
										)
									)
									.map((track, idx) => (
										<Card
											key={`next_step_${idx}__${track.code}`}
											containerClassName="col-span-12 md:col-span-6"
										>
											<div className="">
												<h1 className="text-lg bold">
													{_.upperFirst(track.code)}
												</h1>
												<ul className="list-disc pl-8">
													{track.results
														.filter(
															(result) =>
																result.value ===
																false
														)
														.map((result, ridx) => (
															<li
																key={`result_${ridx}__${result.code}`}
															>
																{
																	getMilestoneByAgeAndCategory(
																		age,
																		track.code,
																		result.code
																	)?.text
																}
															</li>
														))}
												</ul>
											</div>
										</Card>
									))}
							</div>
						</div>
					)}
				</div>

				<div className="mt-8">
					Note: This assessment does not consitute a medical
					diagnosis. If you have seiorus concerns about your child's
					development, please visit a healthcare professional
				</div>
			</div>

			<div className="flex justify-end mt-8 lg:mt-24">
				<Button text="Complete" onClick={exitTracker} />
			</div>
		</div>
	);
};

export default AssessmentResults;
