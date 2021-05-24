// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import AssessmentResults from "../../components/AssessmentResults";

describe("Assessment Results", () => {
    test("Is it being rendered", () =>{

        const age = jest.fn();
        const tracker = jest.fn();
        const exitTracker = jest.fn();
        render(<AssessmentResults age={0} exitTracker={exitTracker} tracker={[]} />)
      
        expect(screen.getByTestId("AssessmentResults")).toBeInTheDocument();
    })
})
    
