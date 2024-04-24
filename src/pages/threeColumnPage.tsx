import {TodoStatusCard} from "../components/TodoStatusCard.tsx";
import {Todo} from "../todo.ts";


type ThreeColumnPageParams = {
    todos: Todo[]
}

export function ThreeColumnPage({todos}: ThreeColumnPageParams): JSX.Element {
    return (<>
            <ul className="status-columns three-column-layout">
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