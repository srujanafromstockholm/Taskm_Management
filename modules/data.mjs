
//funktion to check whether the localstorage has tasks

import { printoutList } from "./printList.mjs";

export function checkStorage() {


    let myListSerialized = localStorage.getItem("myList");

    if (myListSerialized) {

        let myListDeSerialized = JSON.parse(localStorage.getItem("myList"));
        printoutList(myListDeSerialized);

    }

};

// adding new work to the task list

export function createListItem() {

    let usersInput = { item: newInput.value, isDone: false };

    let myListSerialized = localStorage.getItem("myList");

    if (myListSerialized) {

        let myListDeSerialized = JSON.parse(localStorage.getItem("myList"));
        myListDeSerialized.push(usersInput);
        localStorage.setItem("myList", JSON.stringify(myListDeSerialized));

        newInput.value = "";

        checkStorage();

    } else {

        let myList = [];
        myList.push(usersInput);
        localStorage.setItem("myList", JSON.stringify(myList));

        newInput.value = "";

        checkStorage();
    };

};

// function to delete item
export function deleteItem(toChange) {

    

    let myListDeSerialized = JSON.parse(localStorage.getItem("myList"));

    myListDeSerialized.splice(toChange, 1);
    localStorage.setItem("myList", JSON.stringify(myListDeSerialized));

    checkStorage();

};



//function to mark as done
export function markAsDone(toMarkDone) {

    let myListDeSerialized = JSON.parse(localStorage.getItem("myList"));

    let doneItem = myListDeSerialized[toMarkDone];

    if (doneItem.isDone == false) {

        myListDeSerialized[toMarkDone].isDone = true;

    } else if (doneItem.isDone == true) {

        myListDeSerialized[toMarkDone].isDone = false;

    }

    localStorage.setItem("myList", JSON.stringify(myListDeSerialized));

    checkStorage();

};