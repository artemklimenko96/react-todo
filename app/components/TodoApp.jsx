var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoApp = React.createClass({
    getInitialState: function (){
        return {
            todos:[
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id:2,
                    text: 'Clean the room'
                }, {
                    id:3,
                    text: 'Learn react'
                }, {
                    id:4,
                    text: 'Learn finnish'
                }

            ]
        };
    },
    handleAddTodo: function (text) {
        alert('new todo: ' + text);
    },
    render: function (){
        var {todos} = this.state;
        return (
            <div>
                <TodoList todos = {todos}/>
                <AddTodo onTodo = {handleAddTodo}/>
            </div>
        );
    }
});

module.exports = TodoApp;