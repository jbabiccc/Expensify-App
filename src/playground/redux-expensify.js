import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//add expens:
const addExpens = (
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
const removeExpense = ({id}={}) =>({
    type:'REMOVE_EXPENSE',
    id
   
});
    
// edit 
const editExpense = (id, upadates) =>({
    type:'EDIT_EXPENSE',
    id,
    upadates
});

// set_text _filer
const setTextFilter=(text ='') =>({
    type:'SET_TEXT_FILTER',
    text
});

// sort by amount
const setSortByAmount = (sortBy='amount') =>({
    type:'SORT_BY_AMOUNT',
    sortBy
});
// sort by date
const setSortByDate = (sortBy='date') =>({
    type:'SORT_BY_AMOUNT',
    sortBy
});
// set start Date
const setStartDate = (startDate)=>({
    type:'START_DATE',
    startDate
});
// set end date
const setEndDate =(endDate) =>({
    type:'END_DATE',
    endDate
});
//Expenses Reducer 
const expensesReducerDefaultState=[];

const expensesReducer =(state = expensesReducerDefaultState, action) =>{
    switch(action.type){
        case 'ADD_EXPENSE':
            return [
              ...state,
              action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>{return id !== action.id;});
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id === action.id){
                    return {
                        ...expense,
                        ...action.upadates
                    }
                }else{
                    return expense;
                }
            });
       
        default:
            return state;
    }
};

//Filter Reducer
const filterReducerDefaultState={
    text: '',
    sortBy:'date', //date or amount
    startDate:undefined,
    endDate:undefined
};

const filterReducer =(state = filterReducerDefaultState, action) =>{
    switch(action.type){

    case 'SET_TEXT_FILTER':
        return{
            ...state,
            text:action.text
        };
    case 'SORT_BY_AMOUNT':
                return{
                ...state,
                sortBy:action.sortBy
                
    };      
    case 'SORT_BY_DATE':
                return{
                ...state,
                sortBy:action.sortBy
                
    }; 
    case 'START_DATE':
                return{
                ...state,
                startDate:action.startDate
    };
    case 'END_DATE':
            return{
                ...state,
                endDate:action.endDate
    };  
        default:
            return state;
    }
};


//GET VISIBLE EXPENSES 
const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate}) => {
    return expenses.filter((expense)=>{
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate ;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) =>{
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        }
        else if(sortBy ==='amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
};

//Store Creation
const store =createStore(
    combineReducers({
        expenses:expensesReducer,
        filters: filterReducer
    })
); 
store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
    console.log(visibleExpenses);
});

const expensOne =store.dispatch(addExpens({description:'Rent',amount:100, createdAt: -21000}));
const expensTwo =store.dispatch(addExpens({description:'Coffee',amount:300, createdAt: -1000 }));

// store.dispatch(removeExpense({id:expensOne.expense.id}));
// store.dispatch(editExpense(expensTwo.expense.id,{amount:500}));


//store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

store.dispatch(setSortByAmount()); //amount
// store.dispatch(setSortByDate()); //date

//store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
//store.dispatch(setEndDate(1250));



const demoState ={
    expenses: [{
        id:'dada',
        description:'January rent',
        note: 'This is final payment for that address',
        amout: 54500,
        createdAt: 0
    }],
    filters:{
        text:'rent',
        sortBy:'amount', //date or amount
        startDate:undefined,
        endDate:undefined
    }
};




