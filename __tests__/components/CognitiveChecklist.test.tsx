// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import CognitiveChecklist from "../../components/CognitiveChecklist";
import { getMilestoneByAgeAndCategory, getMilestonesByAge } from "../../model";
import { isMilestoneChecked } from "../../common/utils";
import Adapter from 'enzyme-adapter-react-16';
// import {shallow} from "enzyme";
// import Enzyme from 'enzyme';

// Enzyme.configure({adapter:new Adapter()});
// describe ("Checking the SocialChecklist", () => {
//     test("Renders the buttons and other content from the component", () => {
//         const goBack = jest.fn();
//         const onNext = jest.fn();
//         const exitTracker = jest.fn()
//         const updateTrackerValue = jest.fn();
//         render(<CognitiveChecklist age={0} goBack={goBack} onNext={onNext} exitTracker={exitTracker} tracker={[]} updateTrackerValue={updateTrackerValue}/>)
    
//         expect(screen.getByTestId("CognitiveChecklist")).toBeInTheDocument();
//     });
// })

describe ("Checking MilestonesByAgeAndCategory", () =>{
    const ageMilestones = getMilestoneByAgeAndCategory(24, "gross motor", "walk");
    console.log(ageMilestones?.text);
    console.log(ageMilestones?.code);
    console.log(ageMilestones?.weight);

    expect(ageMilestones).toBeDefined();

    // expect(isMilestoneChecked(mockTracker, "cognitive,")).toBeUndefined();

});

// describe("updateTracker", () => {
//     const goBack = jest.fn();
//     const onNext = jest.fn();
//     const exitTracker = jest.fn()
//     const updateTrackerValue = jest.fn();
//     const component = shallow(<input
        
//         id={"walk"}
//         name={"walk"}
//         ref="updateCC"
//         type="checkbox"
//         checked={false}
//         onChange={() =>
//             updateTrackerValue(
//                 "cognitive",
//             "walk",
//             true
//             )
//         }
//         className="updateCC h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded cursor-pointer"
//     />)
//     component.find(".updateCC").simulate('change', {target: {checked: true}});
//     expect(updateTrackerValue).toHaveBeenCalled();
// })