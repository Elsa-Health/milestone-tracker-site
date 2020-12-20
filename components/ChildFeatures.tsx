import React from "react";
import _ from "lodash";
import dynamic from "next/dynamic";
// import Select from "react-select/src/Select";
import { friendlyFormatMonths } from "../common/utils";
import TrackerNavigator from "./TrackerNavigator";
import Button from "./Button";

const Select = dynamic(() => import("react-select"), {
	ssr: false,
	loading: () => null,
});

const MONTHS = 12;

interface AgeOption {
	value: number;
	label: string;
}
const options: AgeOption[] = _.times(13, (n) => n + 2).map((age) => ({
	value: age * MONTHS,
	label: `${age} Years`,
}));

interface ChildFeaturesProps {
	age: number;
	setAge: (age: number) => any;
	onNext: (event: React.MouseEvent) => any;
	goBack: (event: React.MouseEvent) => any;
	exitTracker: (event: React.MouseEvent) => any;
}

const ChildFeatures: React.FC<ChildFeaturesProps> = ({
	age,
	setAge,
	onNext,
	goBack,
	exitTracker,
}) => {
	return (
		<div>
			<TrackerNavigator onBack={goBack} onCancel={exitTracker} />
			<div className="px-0 md:px-5 lg:px-10 xl:px-20 2xl:px-40">
				<h1 className="text-xl lg:text-2xl mb-4">
					To start, please tell us the age of the child.
				</h1>

				<Select
					placeholder="Child Age"
					value={{
						value: age,
						label: friendlyFormatMonths(age),
					}}
					// @ts-ignore
					onChange={(val) => setAge(val?.value || 24)}
					options={options}
				/>
			</div>

			<div className="flex justify-end mt-8 lg:mt-24">
				<Button text="Next" onClick={onNext} />
			</div>
		</div>
	);
};

export default ChildFeatures;
