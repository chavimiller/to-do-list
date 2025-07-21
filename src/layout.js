import Bookmark from "./Bookmark.svg"
import LowPriority from './LowPriority.svg'
import MedPriority from './MedPriority.svg'
import HighPriority from './HighPriority.svg'
import { masterList, general, vacation } from "./projectManager";
import { toDoItem } from "./todo";
import { formatDistance, subDays } from "date-fns";

let content;
let contentGrid;
let menuSideBar;
let mainContent;
let mainHeaderBar;
let taskArea;
let bookmarkSVG;
let menuHeader;
let allListsContainer;
let activeList = general;
let addList;
let checkBox;

export function layout() {
    content = document.querySelector("#content");

    contentGrid = document.createElement("div");
    contentGrid.classList.add("content-grid");
    content.appendChild(contentGrid);

    menuSideBar = document.createElement("div");
    menuSideBar.classList.add("menu-sidebar");
    contentGrid.appendChild(menuSideBar);

    mainContent = document.createElement("div");
    mainContent.classList.add("main-content");
    contentGrid.appendChild(mainContent);

    mainHeaderBar = document.createElement("div");
    mainHeaderBar.classList.add("main-header-bar");
    mainContent.appendChild(mainHeaderBar);

    taskArea = document.createElement("div");
    taskArea.classList.add("task-area");
    mainContent.appendChild(taskArea);

    bookmarkSVG = document.createElement("img");
    bookmarkSVG.src = Bookmark;
    mainContent.appendChild(bookmarkSVG);

    menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");
    menuHeader.textContent = "My Lists";
    menuSideBar.appendChild(menuHeader);

    allListsContainer = document.createElement("div")
    allListsContainer.classList.add("all-lists-container")
    menuSideBar.appendChild(allListsContainer);
}

export function renderActiveListTitle() {
    let activeListTitle = document.createElement("div");
    activeListTitle.classList.add("active-list-title");
    activeListTitle.textContent = activeList.listName;
    mainHeaderBar.appendChild(activeListTitle);
}

export function renderNewListItem(item) {
    activeList.listItems.map((item, index) => {

        let showTask = document.createElement("div");
        showTask.classList.add("task-element");

        let taskTitle = document.createElement("div");
        taskTitle.classList.add("task-title");

        checkBox = document.createElement("div");
        checkBox.classList.add("task-checkbox");
        taskTitle.textContent = item.title;
        
        if (taskTitle.textContent === "") {
            return; 
        } else {
        taskArea.insertBefore(showTask, taskArea.firstChild);
        showTask.appendChild(checkBox);
        showTask.appendChild(taskTitle);
        }
    })
}

export function addNewTask() {
    let newTask = document.createElement("div");
    newTask.classList.add("new-task-button");
    newTask.textContent = "+ New Item";
    taskArea.appendChild(newTask);
    newTask.addEventListener("click", () => {
        newTask.style.display = "none";

        let taskInputForm = document.createElement("form"); 
        taskInputForm.classList.add("task-input-form");
        document.body.appendChild(taskInputForm);

        let taskInputTitle = document.createElement("input");
        taskInputTitle.id = 'task-input-title';
        taskInputTitle.placeholder = "Title";
        taskInputForm.appendChild(taskInputTitle);
        
        let taskInputDescr = document.createElement("input");
        taskInputDescr.id = 'task-input-description';
        taskInputDescr.placeholder = 'Description';
        taskInputForm.appendChild(taskInputDescr);

        let taskInputDue = document.createElement("input");
        taskInputDue.id = 'task-input-duedate';
        taskInputDue.placeholder = 'Due Date';
        taskInputForm.appendChild(taskInputDue);

        let taskInputPriority = document.createElement("select");
        taskInputPriority.id = 'task-input-priority';
        taskInputForm.appendChild(taskInputPriority);
        const options = [
            {label: "Low", value: "🟢",},
            {label: "Medium", value: "🔵"},
            {label: "High", value: "🔴"}
        ];
        options.map((choice) => {
            let option = document.createElement("option");
            option.value = choice.label;
            option.textContent = choice.value;
            taskInputPriority.appendChild(option);
        })

        let taskInputAssignList = document.createElement("select");
        taskInputAssignList.id = 'task-input-assign-list';
        taskInputForm.appendChild(taskInputAssignList);
        const listOptions = masterList;
        masterList.map((choice) => {
            let option = document.createElement("option");
            option.value = choice.listName;
            option.textContent = choice.listName;
            taskInputAssignList.appendChild(option);

        })


        let taskSubmitButton = document.createElement("button");
        taskSubmitButton.type = "submit";
        taskSubmitButton.textContent = "Add";
        taskInputForm.appendChild(taskSubmitButton);
        taskSubmitButton.addEventListener("click", (e) => {
            e.preventDefault();
            newTask.style.display = "block";
            let makeTask = new toDoItem(taskInputTitle.value, taskInputDescr.value, taskInputDue.value, taskInputPriority.value, taskInputAssignList.value);
            const list = masterList.find((choice) =>
                choice.listName === taskInputAssignList.value)
            if (list) {
                list.addItem(makeTask);
                renderNewListItem()
            } else {
                general.addItem(makeTask);
                renderNewListItem()
            }
            
            taskInputForm.remove()
        })
    })
}

export function showMasterList() {
    masterList.map((list, index) => {
        addList = document.createElement("div");
        addList.textContent = list.listName;
        allListsContainer.appendChild(addList);
    })
    
}

export function addNewList() {
    let newListButton = document.createElement("div");
    newListButton.classList.add("new-list-button");
    newListButton.textContent = "+ New List";
    menuSideBar.appendChild(newListButton);
}

/* Toggle not working
export function markCheckBox() {
    checkBox.addEventListener("click", () => {
        checkBox.classList.add("task-checkbox-toggle");
    })
}
*/