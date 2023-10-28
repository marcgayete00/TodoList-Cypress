function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskText = taskInput.value;

    if (taskText.trim() !== '') {
        var taskList = document.getElementById('taskList');

        var li = document.createElement('li');
        li.textContent = taskText;

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remove';
        deleteButton.id = 'deleteButton';
        deleteButton.onclick = function() {
            li.remove();
        };

        var completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.id = 'completeButton';
        completeButton.onclick = function() {
            li.id = "taskListItem"
            li.classList.toggle('completed');
        };

        li.appendChild(deleteButton);
        li.appendChild(completeButton);

        taskList.appendChild(li);
        taskInput.value = '';
    }
}
