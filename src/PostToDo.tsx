import {useState} from "react";
import {ToDoItem} from "./ToDoItem";
import axios from "axios";



export default function PostToDo() {

    const [newItem, setNewItem] = useState<string>("")

    return (
    <div>
        <input type="name" onChange={(event)=> setNewItem(event.target.value)}/>

    </div>


    )
}
