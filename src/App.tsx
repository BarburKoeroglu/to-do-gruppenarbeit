import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDoItem} from "./ToDoItem";
import ShowList from "./ShowList";
import {ItemStatus} from "./ItemStatus";
import PostToDo, {PostToDoProps} from "./PostToDo";
import {getNextStatus} from './todo-service';
import useToDo from './useToDo';
import NavigationLinkBar from './NavigationLinkBar';
import {HashRouter, Route, Routes } from 'react-router-dom';

function App() {

    const {todos, getToDos, advanceToDo, postToDos, deleteToDo} = useToDo()


    return (
        <HashRouter>
            <h1>Headline Router Project</h1>
            <NavigationLinkBar/>

            <Routes>
                <Route path={"/"} element={<ShowList toDoListItems={todos} advanceToDo={advanceToDo} deleteToDo={deleteToDo}/>}/>
                <Route path={"/todo/open"} element={<ShowList toDoListItems={todos.filter(todos=>todos.status === "OPEN")} advanceToDo={advanceToDo} deleteToDo={deleteToDo}/>}/>
                <Route path={"/todo/inprogress"} element={<ShowList toDoListItems={todos.filter(todos=>todos.status === "IN_PROGRESS")} advanceToDo={advanceToDo} deleteToDo={deleteToDo}/>}/>
                <Route path={"/todo/done"} element={<ShowList toDoListItems={todos.filter(todos=>todos.status === "DONE")} advanceToDo={advanceToDo} deleteToDo={deleteToDo}/>}/>


            </Routes>

            <PostToDo postToDo={postToDos}/>

        </HashRouter>

    );
}

export default App;
