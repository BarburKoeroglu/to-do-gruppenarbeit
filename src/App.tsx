import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDoItem} from "./ToDoItem";
import ShowList from "./ShowList";
import {ItemStatus} from "./ItemStatus";
import PostToDo, {PostToDoProps} from "./PostToDo";

function App() {

    const [toDos, setToDos] = useState<ToDoItem[]>([])

    useEffect(() => {
        getToDos()
    }, [])

    const getToDos = () => {
        axios.get("/api/todo")
            .then((response) => {
                return response.data
            })
            .then(data => {
                setToDos(data)
            })
            .catch((error) => {
                console.error(error)
            })
    }

    const postToDos = (description: string) => {
        const newItem = {
            description: description,
            status: ItemStatus.OPEN
        }

        axios.post("/api/todo", newItem)
            .then((response) => {
                console.log(response.data)
            })
            .then((response) => {
                getToDos()
            })
            .catch((error) => {
                console.log(error)
            })
    }





  return (


    <div className="App">
      <header className="App-header">
          <ShowList toDoListItems={toDos}/>
          <PostToDo postToDo={postToDos}/>

      </header>
    </div>
  );
}

export default App;
