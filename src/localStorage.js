import { project } from "./project";
import { toDoItem } from "./todo";
const STORAGE_KEY = "masterList";

export function saveToLocalStorage(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export function loadFromLocalStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    
    const rawList = JSON.parse(data);
    return rawList.map(proj => new project(proj.listName, proj.listItems));
}