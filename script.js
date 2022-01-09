import { checkStorage, createListItem, deleteItem, markAsDone} from './modules/data.mjs';
import { listElement,printoutList } from './modules/printList.mjs'


let myBtn = document.getElementById("myBtn");

let newInput = document.getElementById("newInput");

let header = document.querySelectorAll("header");


checkStorage();

//adding new list when click on button

myBtn.addEventListener("click", function () {

    createListItem();
   

});


// function to mark done when work is finished

listElement.addEventListener("click", function (evt) {

    if (evt.target.className === "checkboxClass" || evt.target.className === "done") {
        markAsDone(evt.target.parentElement.id);
    } else {
        let toChange = evt.target.id;
        deleteItem(toChange);

       

    };
});
// function to delete all items
removeAll.addEventListener("click", function () {
   
   
        localStorage.clear();
       
        listElement.innerHTML="";
    
    

});
