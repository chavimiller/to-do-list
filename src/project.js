import { toDoItem } from "./todo";

export class project {
    constructor(listName, listItems = []) {
        this.listName = listName;
        this.listItems = listItems;
    }

    addItem(task) {
        this.listItems.push(task)
    }

    deleteItem(task) {
        this.listItems = this.listItems.filter(x => x !== task)
    } 
}


//maybe delete by index


