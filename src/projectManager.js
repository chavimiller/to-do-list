import { toDoItem } from "./todo";
import { project } from "./project";

export let masterList = [];

export function addProject(newProject) {
    masterList.push(newProject);
}

export function deleteProject(project) {
    masterList = masterList.filter(x => x !== project)
}

export const general = new project("General");
addProject(general)

export const vacation = new project("Vacation in Vietnam");
addProject(vacation)

export const dishes = new toDoItem("Dishes", "Clean all dishes in the sink", "today" )
general.addItem(dishes)


