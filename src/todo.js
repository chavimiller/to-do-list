import { general } from "./projectManager";

export class toDoItem {
        constructor(title, description, dueDate, priority, project = general) {
            this.title = title;
            this.description = description;
            this.dueDate = dueDate;
            this.priority = priority;
            this.project = project;
            this.complete = false;
        } 
        
        toggleComplete() {
            this.complete = !this.complete;
        }
    }
