import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDoItem} from "./ToDoItem";
import ShowList from "./ShowList";
import {ItemStatus} from "./ItemStatus";
import PostToDo, {PostToDoProps} from "./PostToDo";
import { getNextStatus } from './todo-service';

function App() {

    const [toDos, setToDos] = useState<ToDoItem[]>([])

    useEffect(() => {
        getToDos()
    },[])

    const getToDos = () => {
        axios.get("/api/todo")
            .then((response) => response.data)
            .then(data => setToDos(data))
            .catch((error) => console.error(error))             // Wann wird catch notwendig?
    }

    const postToDos = (description: string) => {
        const newItem = {
            description: description,
            status: ItemStatus.OPEN                         // Status OPEN wird vordefiniert
        }

        axios.post("/api/todo", newItem)
            .then(getToDos)
    }


        const advanceToDo = (todo: ToDoItem) => {
            const updateToDo = {
                id: toDos.id,
                description: toDos.description,
                status: getNextStatus(toDos.status)
            }

        axios.put(`/api/todo/${todo.id}`, updateToDo)
            .then(getToDos())
        }
    }

const deleteToDo=(id:string) => {
    axios.delete(`/api/todo/${id}`)
        .then (getToDos)
}

  return (


    <div className="App">

          <ShowList toDoListItems={toDos} advanceToDo={postToDos(advanceToDo)} deleteToDo={deleteToDo}/>
          <PostToDo postToDo={postToDos}/>


    </div>
  );
}

export default App;
