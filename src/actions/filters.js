
// set_text _filer
export const setTextFilter=(text ='') =>({
    type:'SET_TEXT_FILTER',
    text
});

// sort by amount
export const setSortByAmount = (sortBy='amount') =>({
    type:'SORT_BY_AMOUNT',
    sortBy
});
// sort by date
export const setSortByDate = (sortBy='date') =>({
    type:'SORT_BY_DATE',
    sortBy
});
// set start Date
export const setStartDate = (startDate)=>({
    type:'START_DATE',
    startDate
});
// set end date
export const setEndDate =(endDate) =>({
    type:'END_DATE',
    endDate
});