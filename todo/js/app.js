var app = new Vue({
    el: '#app',
    data: {
        appName: 'My Vue ToDo',
        todos: [],
        newTodoTitle: '',
    },
    methods: {
        addTodo: function(title) {
            const newTodo = {
                id: Date.now(),
                title: title,
                isDone: false
            }
            this.todos.push(newTodo);
            this.newTodoTitle = '';
            this.saveTodoToStorage();
        },
        deleteTodos: function() {
            const deletedTodos = this.todos.filter(
                function(todo) {
                    if (todo.isDone === false) return true;
                }
            );
            this.todos = deletedTodos;
            this.saveTodoToStorage();
        },
        saveTodoToStorage: function() {
            localStorage.setItem('todos', JSON.stringify(this.todos));
            console.log('saved!');
        },
        readTodoFromStorage: function() {
            this.todos = JSON.parse(localStorage.getItem('todos'));
            if (!this.todos) { this.todos = [] }
        }
    },
    mounted: function() {
        this.readTodoFromStorage();
    }
})