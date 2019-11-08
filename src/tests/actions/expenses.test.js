import {addExpens,editExpense,removeExpense} from '../../actions/expenses';

test('should delete the action object', ()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    });
});

test('We should edit the file', ()=>{
    const action = editExpense('123abc', {note:'yes'});
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'yes'
        }
    });    
});

test('Should setup add expense action object',()=>{
    const expenseData = {
        description:'Coffee bill',
        note:'FairBar',
        amount:109500, 
        createdAt:1000
           
    };
    const action = addExpens(expenseData);
    
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
           ...expenseData,
           id:expect.any(String)           
    }});
});

test('Should set up with default values', ()=>{
   
    const action = addExpens();
    
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            id:expect.any(String),
            description:'',
            note:'',
            amount:0, 
            createdAt:0        
    }}
    );

});