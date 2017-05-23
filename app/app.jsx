var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import Login from 'Login';
import TodoApp from 'TodoApp';

// import './../playground/firebase/index';

store.dispatch(actions.startAddTodos());
//Load foundation
$('document').foundation();
//Loading App.css
require('style!css!sass!applicationStyles')


ReactDOM.render(
<Provider store = {store}>
<Router history = {hashHistory}>
 <Route path='/'>
      <IndexRoute component={Login}/>
      <Route path='todos' component={TodoApp}/>
    </Route>
</Router>
</Provider>,
document.getElementById('app')
);
