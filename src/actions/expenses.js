import uuid from 'uuid';

//add expens:
export const addExpens = (
    { 
     description = '',
     note = '',
     amount=0, 
     createdAt=0
    } = {}
)   =>({

    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note,
        amount,
        createdAt

    }
});
//remove 
export const removeExpense = ({id}={}) =>({
    type:'REMOVE_EXPENSE',
    id
   
});
    
// edit 
export const editExpense = (id, updates) =>({
    type:'EDIT_EXPENSE',
    id,
    updates
});
