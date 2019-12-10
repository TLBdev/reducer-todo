

export function TodoReducer(initialState, action) {
    switch (action.type) {
        case 'addTodo':
            return [
                ...initialState,
                {
                    item: action.payload,
                    completed: false,
                    id: Date.now()
                }
            ]
        case 'toggleComplete':

            const alteredTodos = []

            const toDo = {
                item: 'action.payload.item',
                completed: false,
                id: 0
            }
            initialState.forEach(e => {
                if (action.payload != e.id) {
                    alteredTodos.push(e)

                } else {
                    toDo.item = e.item
                    toDo.completed = !e.completed
                    toDo.id = e.id
                }

            });
            return [...alteredTodos, toDo]
        case 'removeTrue':
            const newList = []
            initialState.forEach(e => {
                if (!e.completed) {
                    newList.push(e)
                }
            })
            return [...newList]
        default:
            return initialState
    }
}