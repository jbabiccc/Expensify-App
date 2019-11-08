import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values',()=>{
    const state =filtersReducer(undefined,{type:'@@INIT'});

    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('should set sort by to amount', ()=>{
    const state = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set sort by date', ()=>{
    const currentState={
        text:'',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    };
    const action ={type:'SORT_BY_DATE'}
    const state =filtersReducer(currentState,action);
    expect(state.sortBy).toBe('date');
});


test('Should set text filter',()=>{
    const text = 'This is my value';
    const action = {
        type:'SET_TEXT_FILTER',
        text    
    };
    const state = filtersReducer(undefined,action);
    expect(state).toEqual({
        text,
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    });
});

test('Should set startDate filter',()=>{
    const startDate = moment(0);

    const action={
        type:'START_DATE',
        startDate
    }
    const state = filtersReducer(undefined,action);
    expect(state.startDate).toEqual(startDate);
});

test('Should set endDate filter',()=>{
    const endDate = moment(0);

    const action={
        type:'END_DATE',
        endDate
    }
    const state = filtersReducer(undefined,action);
    expect(state.endDate).toEqual(endDate);
});
