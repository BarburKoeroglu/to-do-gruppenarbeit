import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import {ToDoItem} from "./ToDoItem";
import ShowList from "./ShowList";
import {ItemStatus} from "./ItemStatus";
import PostToDo, {PostToDoProps} from "./PostToDo";
import {getNextStatus} from './todo-service';
import useToDo from './useToDo';

function App() {

    const {todos, getToDos, advanceToDo, postToDos, deleteToDo} = useToDo()


  return (


    <div className="App">
          <ShowList toDoListItems={todos} advanceToDo={advanceToDo} deleteToDo={deleteToDo}/>
          <PostToDo postToDo={postToDos}/>
    </div>
  );
}

export default App;
