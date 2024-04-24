import {useEffect, useState} from 'react'
import {Route, Routes} from "react-router";


import './App.css'
import {Todo} from "./todo.ts";
import axios from "axios";
import {TodoPag} from "./pages/todoPag.tsx";

import {Navi} from "./components/Navi.tsx";
import {AddTodo} from "./components/AddTodo.tsx";
import {EditPage} from "./pages/editPage.tsx";
import {SingleColumnPage} from "./pages/singleColumnPage.tsx";
import {ThreeColumnPage} from "./pages/threeColumnPage.tsx";


export default function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    function getTodos() {
        axios
            .get("/api/todo")
            .then(response =>
                setTodos(response.data)
            )
    }

    useEffect(() => getTodos(),[todos])



    return (
        <div className="App">
            <Navi />
            <Routes>
                <Route path="/" element={<ThreeColumnPage todos={todos}/>}/>
                <Route path="/open" element={<SingleColumnPage status={"OPEN"} todos={todos}/>}/>
                <Route path="/inprog" element={<SingleColumnPage status={"IN_PROGRESS"} todos={todos}/>}/>
                <Route path="/done" element={<SingleColumnPage status={"DONE"} todos={todos}/>}/>
                <Route path="/todo/:id" element={<TodoPag />}/>
                <Route path="/edit/:id" element={<EditPage/>}/>
            </Routes>
            <AddTodo />
        </div>
    )
}