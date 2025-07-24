import "./styles.css";
import { layout, renderActiveListTitle, switchActiveList, addNewTask, showMasterList, addNewList, renderDeleteListButton, renderNewListItem } from "./layout.js";
import { masterList } from "./projectManager.js";
import { activeList } from "./layout.js";
import { project } from "./project.js";


layout()
renderActiveListTitle()
addNewTask()
showMasterList()
addNewList()
switchActiveList()

if (activeList && activeList.listItems) {
    activeList.listItems.forEach(item => {
        renderNewListItem(item)
    })
}
console.log(masterList)

