import SingleToDo from "./SingleToDo"
import { ToDoItem } from "./ToDoItem"


type BoardProps = {
    todos: ToDoItem[]
    advanceToDo: (todo: ToDoItem) => void
    deleteToDo: (id: string) => void
}

export default function Board(props: BoardProps){

    return(
        <div>
            {props.todos.map((currentToDo) => <SingleToDo item={currentToDo}
                                                        advanceToDo={props.advanceToDo}
                                                        deleteToDo={props.deleteToDo}/>)}
            

        </div>
    )
}