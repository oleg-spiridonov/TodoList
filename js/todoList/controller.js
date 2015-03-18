(function () {
    var todolist = window.todoList || {};

    todoList.Controller = function (eventBus, ui) {
        this.ui = ui;

        this.events = {
            addTask: 'add-task',
            removeTask: 'remove-task',
            receiveAllTasks: 'receive-tasks-from-model'
        };

        this.subscribeOnEvents();

        return this;
    };

    todoList.Controller.subscribeOnEvents = function () {
        this.eventBus.on(this.events.receiveAllTasks, this.setTasksToUI);
    };

    todoList.Controller.prototype.createEventModel = function () {

    };

    todoList.Controller.prototype.addTaskToModel = function (task) {
        this.eventBus.trigger(this.eventBus.events.addTask, task);
    };

    todoList.Controller.prototype.removeTaskFromModel = function (id) {
        this.eventBus.trigger(this.eventBus.events.removeTask, id);
    };

    todoList.Controller.prototype.setTasksToUI = function (tasks) {
         this.ui.setTasks(tasks);
    };

    todoList.Controller.prototype.getAllTasksFromModel = function () {
        this.eventBus.trigger(this.eventBus.events.getAllTasks);
    };
}());