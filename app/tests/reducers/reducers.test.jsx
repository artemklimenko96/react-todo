var expect = require('expect');
var moment = require('moment');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', ()=>{
        it('should set searchText', () => {
           var action = {
            type:'SET_SEARCH_TEXT',
            searchText: 'Katze'
           }; 
           var res = reducers.searchTextReducer(df(''), df(action));
           expect(res).toEqual(action.searchText);
        });
    });
 describe('showCompletedReducer', ()=>{
        it('should toggle state', () => {
           var action = {
            type:'TOGGLE_SHOW_COMPLETED',
           }; 
           var res = reducers.showCompletedReducer(df(false), df(action));
           expect(res).toEqual(true); 
        });
});
describe('todosReducer', () => {
    it('should add new todo', () =>{
        var action = {
            type:'ADD_TODO',
            todo:{
                id: 'abs123',
                text:'Listen 2 music',
                completed: false,
                completedAt:1234
            }
        };
        var res = reducers.todosReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(action.todo); 
    });
    it('should update todos completed state', () => {
        var todos = [{
        id: '1212',
        text: 'Test text',
        completed: true,
        createdAt: 123,
        completedAt:246

    }];
        var updates = {
            completed:false,
            completedAt: null
        };
        var action =  {
        type: 'UPDATE_TODO',
        id: todos[0].id,
        updates
        };
        var res = reducers.todosReducer(df(todos), df(action));
        expect(res[0].completed).toEqual(updates.completed); 
        expect(res[0].completedAt).toBe(updates.completedAt);
        expect(res[0].text).toEqual(todos[0].text);
    });
    it('should add exisiting todos', ()=>{
         var todos = [{
            id:'111',
            text: "anything",
            completed: false,
            completedAt: undefined,
            createdAt: 110
        }];
        var action = {
            type: 'ADD_TODOS',
            todos
        };
        var res = reducers.todosReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0]).toEqual(todos[0]);
    });
});
describe('authReducer', () => {
    it('should store uid on login', () =>{
        const action = {
        type: 'LOGIN',
        uid: '1258wdf'
    };
        const res = reducers.authReducer(undefined, df(action));
        expect(res).toEqual({
            uid: action.uid
        }); 
    });
    it('should wipe data on logout', () =>{
        const authData = {
            uid: '123abs'
        };
        const action = {
            type: 'LOGOUT'
        };

        const res = reducers.authReducer(df(authData), df(action));
        expect(res).toEqual({});
    });
});
});