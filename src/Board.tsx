import SingleToDo from "./SingleToDo"
import {ToDoItem} from "./ToDoItem"


type BoardProps = {
    title: string
    todos: ToDoItem[]
    advanceToDo: (todo: ToDoItem) => void
    deleteToDo: (id: string) => void
}

export default function Board(props: BoardProps){

    return(
        <div>
            <p>
                {props.title}
            </p>
            {props.todos.map((currentToDo) => <SingleToDo item={currentToDo}
                                                        advanceToDo={props.advanceToDo}
                                                        deleteToDo={props.deleteToDo}/>)}
            

        </div>
    )
}