import reducer from "../redux/reducers/todos";
import { ADD_TODO } from "../redux/actionTypes";


describe('Testing reducer todos', () => {
    test('it should return an initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                allIds: [],
                byIds:{}
            }
        )
    })
    xit('it should handle ADD_TODO', () => {
        expect(
            reducer([], {
                type: ADD_TODO,
                text: "Run the tests"
            })
        ).toEqual([
            {
                text: "Run the tests",
                completed: false,
                id: 0
            }
        ])
        expect(
            reducer(
                [
                    {
                        text: "Use Redux",
                        completed: false,
                        id: 0
                    }
                ],
                {
                    type: ADD_TODO,
                    text: "Run the tests"
                    }
                )
            ).toEqual([
                {
                    text: "Run the tests",
                    completed: false,
                    id: 1
                },
                {
                    text: "Use Redux",
                    completed: false,
                    id: 0 
                }
            ]

        )
    })
})