import { toDoItem } from "./todo";

export class project {
    constructor(listName, listItems = []) {
        this.listName = listName;
        this.listItems = listItems;
    }

    addItem(task) {
        this.listItems.push(task)
    }

    expandItem() {

    }
    //delete by index instead
    deleteItem(task) {
        this.listItems = this.listItems.filter(x => x !== task)
    } 

    toggleItem() {

    }
}


//maybe delete by index


