(function () {
    var todolist = window.todoList || {};

    todoList.Service = function (model, eventBus) {
        this.model = model;
        this.eventBus = eventBus;

        this.eventBus.on(this.eventBus.events.addTask, this.addTaskToModel);
        this.eventBus.on(this.eventBus.events.removeTask, this.removeTaskFromModel);
        this.eventBus.on(this.eventBus.events.getAllTasks, this.getAllTasksFromModel);

        return this;
    };

    todoList.Service.prototype.addTaskToModel = function (task) {
        this.model.addTask(task);
    };

    todoList.Service.prototype.removeTaskFromModel = function (id) {
        this.model.removeTask(id);
    };

    todoList.Service.prototype.getAllTasksFromModel = function () {
         this.eventBus.trigger('receive-tasks-from-model', this.model.getAllTasks());
    };

}());