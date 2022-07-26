import {ToDoItem} from "./ToDoItem";
import SingleToDo from "./SingleToDo";
import Board from "./Board";



export type ShowListProps = {                               //props sind immer ein Objekt
    toDoListItems: ToDoItem[],
    advanceToDo: (item: ToDoItem) => void
    deleteToDo: (id: string) => void
}

export default function ShowList(props: ShowListProps){

    const openToDos: ToDoItem[] = props.toDoListItems.filter((currentToDo) => currentToDo.status === "OPEN")
    const inProgressToDos: ToDoItem[] = props.toDoListItems.filter((currentToDo) => currentToDo.status === "IN_PROGRESS")
    const doneToDos: ToDoItem[] = props.toDoListItems.filter((currentToDo) => currentToDo.status === "DONE")

    return(
        <div>
            <Board todos = {openToDos} advanceToDo={props.advanceToDo} deleteToDo={props.deleteToDo}/>
            <Board todos = {inProgressToDos} advanceToDo={props.advanceToDo} deleteToDo={props.deleteToDo}/>
            <Board todos = {doneToDos} advanceToDo={props.advanceToDo} deleteToDo={props.deleteToDo}/>
        </div>

    )
}