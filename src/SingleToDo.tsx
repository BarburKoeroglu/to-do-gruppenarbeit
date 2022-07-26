import {ToDoItem} from "./ToDoItem";


export type GetToDoListProps = {
    item: ToDoItem;
    advanceToDo: (todo: ToDoItem) => void
    deleteToDo: (id: string) => void


}

export default function SingleToDo(props: GetToDoListProps){
    return (

        <div>
            {props.item.description}
            <button onClick={() => props.advanceToDo(props.item)}>Advance</button>
            <button onClick={() => props.deleteToDo(props.item.id)}>Delete</button>
        </div>
    )
}

