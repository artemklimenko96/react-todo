var React = require('react');

var AddTodo = React.createClass({
  onSubmit: function (e){
    e.preventDefault();
    var strTodo = this.refs.todoText.value;
    if (strTodo.length > 0) {
      this.refs.todoText.value = '';
      this.props.onTodo(strTodo);
    }
  },
  render: function (){
    return (
      <div>
        <form ref = "form" onSubmit={this.onSubmit}>
          <input type = "text" ref = "todoText" placeholder = "Enter your todo"/>
          <button className = "button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});
module.exports = AddTodo;