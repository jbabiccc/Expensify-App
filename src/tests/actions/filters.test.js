import {setStartDate,setEndDate,setSortByDate, setSortByAmount,setTextFilter} from '../../actions/filters';
import moment from 'moment';


test('Should generate set start date object ', ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'START_DATE',
        startDate:moment(0)
   
    })
});

test('Should generate set end date object ', ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'END_DATE',
        endDate:moment(0)
   
    })
});
test('should generate setText with data',()=>{
    const action = setTextFilter('Something in');
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:'Something in'
    });

});

test('should generate setText without data',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    });
});

test('Should generate sort by date',()=>{
    const action = setSortByDate('date');

    expect(action).toEqual({
        type:'SORT_BY_DATE',
        sortBy:'date'
    });
});

test('Should test generate by amount',()=>{
    const action = setSortByAmount('amount');

    expect(action).toEqual({
        type:'SORT_BY_AMOUNT',
        sortBy:'amount'
    })
});