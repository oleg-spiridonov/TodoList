(function (w, $) {
    var todolist = window.todoList || {};

    todoList.prototype.init = function () {
        this.service = {};
        this.model = new todoList.Model();
    };

    todoList.prototype.addTask = function () {
        this.model.addTask();
    };

    todoList.prototype.removeTask = function () {
        this.model.removeTask();
    };




    /*** Model ***/

    todoList.Model = function () {
        var model = {};
        model.tasks = [];

        model.prototype.addTask = function (title) {
            var task = new todoList.Task(title);
            model.tasks.push(task);
        };

        model.prototype.removeTask = function (title) {
            var task = new todoList.Task(title);
            model.tasks.push(task);
        };

        return model;
    };

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




    /*** Task ***/

    todoList.Task = function (task) {
        if(task && task.title) {
            this.id = this.generateId();
            this.title = task.title || '';
            this.date = new Date();
            this.completed = task.completed || false;
        }

        return this;
    };

    todoList.Task.prototype.complete = function () {
        this.completed = true;
    };

    todoList.Task.prototype.uncomplete = function () {
        this.completed = false;
    };

    todoList.Task.prototype.setTitle = function (title) {
        this.title = title;
    };

    todoList.Task.prototype.generateId =  function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + s4() + '-' +
            s4() + s4() + '-' + s4() + s4() + s4();
    };

    w.todoList = todoList;
}(window, jQuery));