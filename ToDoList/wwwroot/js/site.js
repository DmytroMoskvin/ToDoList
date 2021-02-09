let addButton = document.getElementById('add-elem-button');
let addElemForm = document.getElementById('add-elem-form');
let resetButton = document.getElementById('reset-button')
let radioLables = document.querySelectorAll('.inputs > div > label');
let checkBoxes = document.querySelectorAll('.check-done-div > input');
let deleteButtons = document.querySelectorAll('.task-form .buttons > button:last-child');

addElemForm.style.display = 'none';

addButton.addEventListener('click', function () {
    if (addElemForm.style.display == 'none') {
        addElemForm.style.display = 'flex';
        addButton.innerText = '-';
        addButton.style.borderRadius = '10px 10px 0 0';
        addButton.style.borderBottom = 0;
    }
    else {
        addElemForm.style.display = 'none';
        addButton.innerText = '+';
        addButton.style.borderRadius = '10px';
        addButton.style.borderBottom = '1px solid lightgray';
    }
});

resetButton.addEventListener('click', function () {
    addElemForm.style.backgroundColor = 'white';
    addElemForm.querySelector('.check-done-div > label').innerText = '';
});


for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', function () {
        let label = checkBoxes[i].closest('div').querySelector('label');
        console.log(label);
        if (checkBoxes[i].checked) {
            label.innerText = '✓';
        }
        else {
            label.innerText = '';
        }
        let parentForm = checkBoxes[i].closest("form");
        if (parentForm.classList.contains('task-form')) {
            parentForm.submit();
        }
    });
}

for (let i = 0; i < radioLables.length; i++) {
    radioLables[i].addEventListener('click', function () {
        checkRadio(radioLables, radioLables[i]);
    });
}

for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', function () {
        let parentForm = deleteButtons[i].closest("form");
        parentForm.action = '/Home/Delete';
        parentForm.submit();
    });
}

function checkRadio(allButtons, checkButton) {
    checkButton.closest("form").style.backgroundColor = checkButton.style.backgroundColor;
}
