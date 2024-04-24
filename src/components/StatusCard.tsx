
import {Todo} from "../todo.ts";
import {TodoStatusCard} from "./TodoStatusCard.tsx";


type StatusCardParams = {
    todos: Todo[]
}

export function StatusCard({todos}: StatusCardParams): JSX.Element {
    return (<>
            <ul className="status-columns">
                <li className="status-column">
                    <TodoStatusCard status={"OPEN"} todos={todos}/>
                </li>
                <li className="status-column">
                    <TodoStatusCard status={"IN_PROGRESS"} todos={todos}/>
                </li>
                <li className="status-column">
                    <TodoStatusCard status={"DONE"} todos={todos}/>
                </li>
            </ul>
        </>
    )
}