import {ToDoItem} from "./ToDoItem";


export type GetToDoListProps = {
    item: ToDoItem;


}

export default function SingleToDo(props: GetToDoListProps){
    return (

        <div>
            {props.item.description}
        </div>
    )
}

