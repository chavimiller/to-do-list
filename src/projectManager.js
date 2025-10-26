import { toDoItem } from "./todo";
import { project } from "./project";
import { loadFromLocalStorage, saveToLocalStorage } from "./localStorage";

export let masterList = loadFromLocalStorage() || [];

export function addProject(newProject) {
  masterList.push(newProject);
  saveToLocalStorage(masterList);
}

export function deleteProject(project) {
  masterList = masterList.filter((x) => x !== project);
  saveToLocalStorage(masterList);
}

export const general = new project("General");

if (masterList.length === 0) {
  addProject(general);
}
