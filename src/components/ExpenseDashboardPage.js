import React from 'react';
import ExpensList from './ExpensList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboardPage =() =>(
    <div>
        <ExpenseListFilters/>
        <ExpensList/>
    </div>
);

export default ExpenseDashboardPage;