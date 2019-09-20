import React from "react";
import { shallow } from "enzyme";
import { VisibilityFilters } from "../components/VisibilityFilters";

describe('Testing VisibilityFilters component', () => {
    it('renders correctly', () => {
        shallow(<VisibilityFilters />)
    })
})