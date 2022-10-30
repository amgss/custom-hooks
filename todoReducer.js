export const todoReducer = (initialState = [], action) => {

    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];
        case 'del':
            return initialState.filter(todo => todo.id !== action.payload.id);
        case 'done':
            return initialState.map(todo => (
                {
                    ...todo,
                    done: (todo.id === action.payload.id) ? !todo.done : todo.done
                }
            ));

        default:
            return initialState;
    }

}