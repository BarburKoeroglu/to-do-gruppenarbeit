import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDoItem} from "./ToDoItem";
import ShowList from "./ShowList";

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




  return (


    <div className="App">
      <header className="App-header">
          <ShowList toDoListItems={toDos}/>




      </header>
    </div>
  );
}

export default App;
