// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import Nav from "../../components/nav";

describe("Testing The NavBar", () => {

    test("Is it rendered", () =>{
       // const onStart = jest.fn();
       // const callBack = jest.fn();

        render(<Nav/>);

        expect (screen.getByTestId("navId")).toBeInTheDocument();

    });
})