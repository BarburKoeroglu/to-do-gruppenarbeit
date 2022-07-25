import {useState} from "react";
import {ToDoItem} from "./ToDoItem";


export type PostToDoProps = {
    postToDo: (description: string)=> void;
}


export default function PostToDo(props: PostToDoProps) {

    const [newItem, setNewItem] = useState<string>("")

    return (
    <div>
        <input type="name" onChange={(event)=> setNewItem(event.target.value)}/>
        <button onClick={(event) => props.postToDo(newItem)}>Submit</button>
    </div>


    )
}
