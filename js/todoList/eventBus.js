(function ($) {
    var todolist = window.todoList || {};

    todoList.EventBus = function () {
        this.events = {
            addTask: 'add-task',
            removeTask: 'remove-task',
            getAllTasks: 'get-all-tasks-from-model'
        };

        return this;
    };

}(jQuery));