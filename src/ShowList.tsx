import {ToDoItem} from "./ToDoItem";
import SingleToDo from "./SingleToDo";



export type ShowListProps = {
    toDoListItems: ToDoItem[]
}

export default function ShowList(props: ShowListProps){
    return(
        <div>
            {props.toDoListItems.map((element) => <SingleToDo item={element}/>)}
        </div>

    )
}