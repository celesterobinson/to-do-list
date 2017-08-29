$(document).ready(function(){
    var itemInput = $('#new-to-do');
    itemInput.on('keydown', function(event) {
        if (event.keyCode === 13) {
            var newTasks = itemInput.val().split(',');
            for(var i = 0; i < newTasks.length; i++) {
                addTask(newTasks[i]);
            }
            $('#new-to-do').val('');
        }
    })

    function addTask(newTask) {
        var newLi = document.createElement("li");
        var ul = document.getElementById("list");
        var task = document.createTextNode(newTask);
        newLi.appendChild(task);
        newLi.setAttribute('id', newTask);
        ul.appendChild(newLi);
        newLi.onclick = strikethrough;
    }

    function strikethrough(event) {
        $(this).toggleClass('item');
    }
})