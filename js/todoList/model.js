(function () {
    var todolist = window.todoList || {};

    todoList.Model = function () {
        this.tasks = [];

        return this;
    };

    todoList.Model.prototype.addTask = function (title) {
        var task = new todoList.Task(title);

        this.tasks.push(task);
    };

    todoList.Model.prototype.removeTask = function (id) {
        this.findTaskById(id);
    };

    todoList.Model.prototype.findTaskById = function (id) {
        return $.grep(this.tasks, function(e){ return e.id == id; });
    };

}());