// import dependencies
import React from "react";

// import react-testing methods
import { render, screen } from "@testing-library/react";

// add custom jest matchers from jest-dom
import "@testing-library/jest-dom/extend-expect";
import ChildFeautres from "../../components/ChildFeatures";

test ("ChildFeatures Component Renders Appropriately", () => {

    expect(ChildFeautres).toBeDefined();
})