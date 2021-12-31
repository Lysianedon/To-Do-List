const taskField = document.querySelector('#item'); //Input field
const form = document.querySelector('form');
const addButton = document.querySelector('.add');
const toDoList = document.querySelector('.tasks-list');
const monTitre = document.querySelector('h1');


class AddTaskToList {

    constructor(valueField) {

        this.valueField = valueField;

        //Creating a new li > input > span for my new task
        if (valueField !== "" && valueField !== " ") {

            let newLi = document.createElement('li');

            let newInput = document.createElement('input');
            newInput.type = "checkbox";

            let newSpan = document.createElement('span');
            newSpan.innerHTML = `${valueField}`;

            newLi.appendChild(newInput);
            newLi.appendChild(newSpan);

            toDoList.appendChild(newLi);
            taskField.value = "";


            // ADDING A NOTIFICATION WHEN ADDING A NEW TASK TO THE LIST

            let alert = document.createElement('p');
            alert.innerHTML = "Successfully added!";
            alert = document.body.insertBefore(alert, monTitre);
            alert.classList.add('success');

            //Removing the alert after 2 sec

            setTimeout(() => {
                alert.remove();
            }, 1200);

            //Creating a toggle checkbox : when the checkbox is ticked, the task is overlined and then removed

            let checked = false;
            newInput.addEventListener('click', () => {

                checked = !checked;

                if (checked) {
                    newSpan.classList.add('tasksDone');

                    setTimeout(() => {
                        newSpan.parentElement.remove();
                    }, 560)

                } else {
                    newSpan.classList.remove('tasksDone');
                }

        });

        // ADDING AN ERROR NOTIFICATION WHEN TRYING TO ADD A TASK WHILE THE FIELD IS EMPTY

        } else {

            let alert = document.createElement('p');
            alert.innerHTML = "Error : Fill the field !";
            alert = document.body.insertBefore(alert, monTitre);
            alert.classList.add('error');

            //Removing the alert after 2 sec

            setTimeout(() => {
                alert.remove();
            }, 1500);

        };
    };

};

form.addEventListener('submit', event => {

    event.preventDefault();
    valueField = taskField.value;

    let newTask = new AddTaskToList(valueField);



});
