var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', ()=> {
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('should exist', () =>{
        expect(TodoAPI).toExist();
    });

    describe('filterTodos', ()=>{
        var todos = [{
            id:1,
            text: 'Smells like teen spirit',
            completed: 'true'},
        {   
            id:2,
            text: 'something in this way',
            completed: false
        }, {
            id:3,
            text: 'Heart-shaped box',
            completed: true
        }];
        it('should return all items if  showcompleted is true', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
        it('should return all not completed items if showcompleted is false', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, false, '');
            expect(filteredTodos.length).toBe(1);
        });
        it('should sort by completed status', () => {
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos[0].completed).toBe(false);
        });

         it('should filter todos by search text', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, 'smells');
            expect(filteredTodos.length).toBe(1);
        });
         it('should return all todos if search text is empty', ()=>{
            var filteredTodos = TodoAPI.filterTodos(todos, true, '');
            expect(filteredTodos.length).toBe(3);
        });
});
});