(function () {
    var app = window.app || {};

    app.model = new todoList.Model();
    app.service = new todoList.Service(app.model);
    app.eventBus = new todoList.EventBus();
    app.ui = new todoList.UI();
    app.controller = new todoList.Controller(app.eventBus, app.ui);


}());