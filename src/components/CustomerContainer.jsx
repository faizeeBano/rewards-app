import React, { useMemo, useReducer, useCallback } from 'react';

import { aggregateRewards } from '../utils/rewards';
import useFetch from '../hooks/useFetch';
import { uiReducer, initialUIState } from '../utils/filter';

import CustomerTable from './CustomerTable';
import FilterPanel from './FilterPanel';

export default function CustomerContainer() {
  const { transactions, loading, error } = useFetch();
  const [state, dispatch] = useReducer(uiReducer, initialUIState);

  const aggregated = useMemo(() => {
    return aggregateRewards(transactions || []);
  }, [transactions]);

  const customersArray = useMemo(() => {
    return Object.values(aggregated.customers || {}).sort((a, b) => b.total - a.total);
  }, [aggregated]);

  const handleFilterChange = useCallback((filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  }, []);

  const months = useMemo(() => {
    return Array.from(
      new Set(
        (transactions || []).map(tx =>
          new Date(tx?.date || '').toISOString().slice(0, 7)
        )
      )
    ).sort();
  }, [transactions]);

  // filtered customers (apply search & month filter)
  const visibleCustomers = useMemo(() => {
    const { month, search } = state.filter;
    return customersArray.filter(c => {
      if (search) {
        if (!c.customerName || !c.customerName.toLowerCase().includes(search)) return false;
      }
      if (month && month !== 'ALL') {
        return (c.monthly[month] && c.monthly[month] > 0) || (c.total > 0 && c.monthly[month] === undefined && false);
      }
      return true;
    });
  }, [customersArray, state.filter]);

  return (
    <div className='customer-container'>
      {(!loading && !error) && (
        <>
          <h2 className="title">All Customers List</h2>
          <FilterPanel onFilterChange={handleFilterChange} months={months} />
          {visibleCustomers.length === 0 ? 
            <div className='text'>No customers match the filter.</div>
           : <CustomerTable customers={visibleCustomers} />
          }
        </>
      )}
    </div>
  )
}
