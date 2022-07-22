import React from "react";
import Paginator from "./Paginator";
import {create} from "react-test-renderer"

describe("Paginator component tests", () => {
    test("pages count is 11 but should be showed only 10", () => {
        const component = create(<Paginator totalUsersCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(10)
    })
})