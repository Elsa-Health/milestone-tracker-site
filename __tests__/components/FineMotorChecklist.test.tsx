// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import FineMotorChecklist from "../../components/FineMotorChecklist";
import _ from "lodash";
import Card from "../../components/Card";;

describe ("Checking the SocialChecklist", () => {
    test("Renders the buttons and other content from the component", () => {
        const goBack = jest.fn();
        const onNext = jest.fn();
        const exitTracker = jest.fn()
        const updateTrackerValue = jest.fn();
        const onChange = jest.fn();
        render(<FineMotorChecklist age={0} goBack={goBack} onNext={onNext} exitTracker={exitTracker} tracker={[]} updateTrackerValue={updateTrackerValue}/>)
    
        expect(screen.getByTestId("FineMotorChecklist")).toBeInTheDocument();
        onChange(updateTrackerValue),() => {
            updateTrackerValue("fine motor", "code", false)
        }
        expect(onChange(updateTrackerValue)).toBeUndefined();
        //expect(screen.getByTestId("input")).toBeInTheDocument();
    });

    // test("Check input", () => {

    //    // render(<Input className="h-6 w-6 text-elsa-blue focus:ring-elsa-blue border-gray-300 rounded cursor-pointer"/>)
    //    render(
    //        <Card>
    //            <input type="text" name="milestone.code" id="milestone.code" />

    //        </Card>
    //    );
        
    //    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
    // }
    //     )
})