import {ToDoItem} from "./ToDoItem";



export type ShowListProps = {
    toDoListItems: ToDoItem[]
}

export default function ShowList(props: ShowListProps){
    return(
        <div>
            {props.toDoListItems.map((element) => element.description)};

        </div>

    )
}