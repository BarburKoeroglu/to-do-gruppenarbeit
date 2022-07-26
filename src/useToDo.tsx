import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDoItem} from "./ToDoItem";
import ShowList from "./ShowList";
import {ItemStatus} from "./ItemStatus";
import PostToDo, {PostToDoProps} from "./PostToDo";
import {getNextStatus} from './todo-service';



export default function useToDo() {
    const [todos, setToDos] = useState<ToDoItem[]>([])

    useEffect(() => {
        getToDos()
    }, [])

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
            id: todo.id,
            description: todo.description,
            status: getNextStatus(todo.status)
        }

        axios.put(`/api/todo/${todo.id}`, updateToDo)
            .then(getToDos)
    }


    const deleteToDo = (id: string) => {
        axios.delete(`/api/todo/${id}`)
            .then(getToDos)


    }
    
    return {todos, postToDos, getToDos, deleteToDo, advanceToDo}
}