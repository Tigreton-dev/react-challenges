import { useState, useMemo } from "react";

// The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
// In this example, we have an expensive function that runs on every render.

// When changing the count or adding a todo, you will notice a delay in execution.
// To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.

// We can wrap the expensive function call with useMemo.

// The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

// In the following example, the expensive function will only run when count is changed and not when todo's are added.

const Demo = () => {
    const [count, setCount] = useState<number>(0);
    const [todos, setTodos] = useState<Array<string>>([]);

    const calculation = useMemo(() => {
        console.log("Calculating...");
        let num = count
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    }, [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };

    const addTodo = () => {
        setTodos((t: Array<string>) => [...t, "New Todo"]);
    };

    return (
        <div>
            <div>
                <h2>My Todos</h2>
                {todos.map((todo, index) => {
                    return <p key={index}>{todo}</p>;
                })}
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </div>
    );
};

export default Demo;
