import {ItemStatus} from "./ItemStatus";

export type ToDoItem = {
    id: string,
    description: string,
    status: ItemStatus,
}