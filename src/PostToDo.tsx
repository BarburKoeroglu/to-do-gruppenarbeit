import {ChangeEvent, FormEvent, useState} from "react";
import {ToDoItem} from "./ToDoItem";




export type PostToDoProps = {
    postToDo: (description: string)=> void;
}


export default function PostToDo(props: PostToDoProps) {

    const [newItem, setNewItem] = useState<string>("")

    const onDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setNewItem(event.target.value)
    }

    const onToDoSubmit = (event: FormEvent<HTMLFormElement>) =>{

        event.preventDefault()
        props.postToDo(newItem)
        setNewItem("")

    }

    return (
    <form onSubmit={onToDoSubmit}>
        <input onChange={onDescriptionChange} value={newItem}/>
        <button>Submit</button>
    </form>


    )
}
