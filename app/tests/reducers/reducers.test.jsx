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
            text:'Walk with Aya'
        };
        var res = reducers.todoReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text); 
    });
    it('should toggle todos completed state', () => {
        var todos = [{
        id: '1212',
        text: 'Test text',
        completed: true,
        createdAt: 123,
        completedAt:246

    }];
        var action =  {
        type: 'TOGGLE_TODO',
        id:'1212'
        };
        var res = reducers.todoReducer(df(todos), df(action));
        expect(res.length).toEqual(1);
        expect(res[0].completed).toEqual(false); 
        expect(res[0].completedAt).toBe(undefined);
    });
});
});