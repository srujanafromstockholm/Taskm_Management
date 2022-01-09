export let listElement = document.getElementById("taskList");
//function to print list on page
export function printoutList(listToPrint) {

    listElement.innerHTML = "";
    

    for (let i = 0; i < listToPrint.length; i++) {
        let listPunkt = listToPrint[i].item;



        if (listToPrint[i].isDone == true) {

            let newList = document.createElement("li")
            newList.innerText = `work to do ${listPunkt}`
            

            let deleteBox = document.createElement("div");
            deleteBox.innerText ="X";
            deleteBox.classList = "deleteBox";
            let newListCheckbox = document.createElement("div");
            newListCheckbox.innerText = "✓";
            newListCheckbox.classList = "done";
            newList.append(newListCheckbox);
            listElement.append(newList);
            newList.prepend(deleteBox);
            newList.setAttribute("id", [i]);
            newList.classList = "listItemClass";



        } else {

            let newList = document.createElement("li");
            newList.innerText = `work to do ${listPunkt}`;
            let deleteBox = document.createElement("div");
            deleteBox.classList = "deleteBox";
            deleteBox.innerText ="X";


            let newListCheckbox = document.createElement("div");
            newListCheckbox.classList = "checkboxClass";
            newList.append(newListCheckbox);
            listElement.append(newList)
            newList.prepend(deleteBox);
            newList.setAttribute("id", [i]);
            newList.classList = "listItemClass";           

        };
    }
};
