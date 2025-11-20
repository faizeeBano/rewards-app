function TransactionPagination({ currentPage, totalPages, onPageChange }) {
  function handlePrev() {
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  function handleNext() {
    if (currentPage < totalPages) onPageChange(currentPage + 1)
  }

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
    </div>
  )
}

export default TransactionPagination;
