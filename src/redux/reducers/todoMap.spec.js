import todoMap from "./todoMap";

describe('todos reducer', ()=> {
    test('should handle initial state', () => {
        expect(
            todoMap(undefined, {})
        ).toEqual([])
    })
    test('it should handle ADD_TODO', () => {
        expect(
            todoMap([], {
                type: 'ADD_TODO',
                text: 'Run the tests',
                id: 0
                })
            ).toEqual([
                {
                    text: 'Run the tests',
                    id: 0,
                    completed: false
                }
            ]) 
        expect(
            todoMap([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }
            ], {
                    type: 'ADD_TODO',
                    text: 'Use Redux',
                    id: 1
                })
            ).toEqual([
                {
                    text:'Run the tests',
                    completed: false,
                    id: 0
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ])
        expect(
            todoMap([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 1
                }
            ], {
                type: 'ADD_TODO',
                text: 'Fix the tests',
                id: 2
                }
            ).toEqual([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 0
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 1
                }, {
                    text: 'Fix the tests',
                    completed: false,
                    id: 2
                }
            ])     
        )
    })
    test('it should handle TOGGLE_TODO', () => {
        expect(
            todoMap([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }, {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                }
            ], {
                type: 'TOGGLE_TODO',
                id: 1
            })
        ).toEqual([
            {
                text: 'Run the tests',
                completed: true,
                id: 1
            } , {
                text: 'Use Redux',
                    completed: false,
                    id: 0
            }
        ])
    })
})