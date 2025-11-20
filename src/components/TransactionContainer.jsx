import { useState, useMemo } from "react";

import TransactionTable from "./TransactionTable";
import TransactionPagination from "./TransactionPagination";

import { DEFAULT_PAGE_SIZE } from "../constants";
import useFetch from "../hooks/useFetch";

function TransactionContainer() {
  const { transactions, loading, error } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * DEFAULT_PAGE_SIZE;
    return transactions.slice(start, start + DEFAULT_PAGE_SIZE);
  }, [transactions, currentPage]);

  const totalPages = useMemo(() => {
    return Math.ceil(transactions.length / DEFAULT_PAGE_SIZE);
  }, [transactions]);

  return (
    <div className="transaction-container">
      {(!loading && !error) && (
        <>
          <h2 className="title">All Transactions List</h2>
          <TransactionTable allTransactions={currentData} />
          {totalPages > 1 && <TransactionPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />}
        </>
      )}
    </div>
  )
}

export default TransactionContainer;
