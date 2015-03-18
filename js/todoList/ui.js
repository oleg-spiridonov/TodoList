(function ($) {
    var todolist = window.todoList || {};

    todoList.UI = function (todoListNode) {
        this.controller = controller || null;
        this.tasks = [];

        this.$todoListNode = $('.todolist') || $(todoListNode);
        this.$input = $('.input', this.$todoListNode );
        this.$submit = $('.submit', this.$todoListNode );
        this.$remove = $('.remove', this.$todoListNode );

        this.addListeners();
        return this;
    };

    todoList.UI.prototype.getAllTasks = function () {
        this.tasks = this.controller.getAllTasks();
    };

    todolist.UI.prototype.setTasks = function (tasks) {
        this.tasks = tasks;
    };

    todoList.UI.prototype.addListeners = function () {
        this.$submit.on('click', this.onSubmit);
        this.$remove.on('click', this.onRemove);
    };

    todoList.UI.prototype.onSubmit = function (e) {
        this.controller.addTask();

    };

    todoList.UI.prototype.onRemove = function (e) {
        this.controller.addTask();
    };

}(jQuery));