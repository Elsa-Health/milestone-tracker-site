// import dependencies
import React from "react";

// import react-testing methods
import { fireEvent, render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import LandingPage from "../../components/LandingPage";
import Button from "../../components/Button";
//import Button from "../../components/LandingPage";

describe("Testing The Landing Page", () => {

    test("Is it rendered", () =>{
        const onStart = jest.fn();
       // const callBack = jest.fn();

        render(<LandingPage onStart={onStart}/>);

        expect (screen.getByTestId("LandingPage")).toBeInTheDocument();
        
    });

    test("Button click function gets triggered", () => {
		const onStart = jest.fn();
		render(<Button text="Start Tracking" onClick={onStart} />);

		const button = screen.getByTestId("button");

		fireEvent.click(button);

		expect(onStart).toBeCalled();
	});

})