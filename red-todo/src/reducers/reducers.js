

export function TodoReducer(initialState, action) {
    switch (action.type) {
        case 'addTodo':
            return[
                ...initialState,
                {item: action.payload.item,
                completed: action.payload.completed,
                id: action.payload.id}
            ] 
        default:
            return initialState
    }
}