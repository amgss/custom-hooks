import { useCallback, useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodos = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || [];
    }

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        console.log(todos);
        localStorage.setItem('todos', JSON.stringify(todos || []));
    }, [todos])

    const handleNewTodo = useCallback(
        (todo) => {
            const action = {
                type: 'add',
                payload: todo
            };

            dispatch(action);
        },
        [],
    )

    const handleDelTodo = useCallback(
        (id) => {
            const action = {
                type: 'del',
                payload: { id }
            };

            dispatch(action);
        },
        [],
    )

    const handleDoneTodo = useCallback(
        (id) => {
            const action = {
                type: 'done',
                payload: { id }
            };

            dispatch(action);
        },
        [],
    )

    return {
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todos,
        handleDelTodo,
        handleDoneTodo,
        handleNewTodo
    }
}
