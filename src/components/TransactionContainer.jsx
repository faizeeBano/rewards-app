import { useState, useMemo } from "react";

import TransactionTable from "./TransactionTable";
import Loading from "./common/Loading";

import { DEFAULT_PAGE_SIZE } from "../constants";
import useFetch from "../hooks/useFetch";
import TransactionPagination from "./TransactionPagination";

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

  { loading && <Loading /> }
  { error && <p>{error}</p> }

  return (
    <div className="transaction-container">
      {(!loading && !error) && (
        <>
          <h2 className="title">All Transactions List</h2>
          <TransactionTable allTransactions={currentData} />
          <TransactionPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        </>
      )}
    </div>
  )
}

export default TransactionContainer;
