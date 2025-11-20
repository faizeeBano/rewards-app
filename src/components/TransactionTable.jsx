import TransactionRow from "./TransactionRow";

function TransactionTable({ allTransactions = [] }) {
  return (
    <table className="tx-table">
      <thead>
        <tr style={{background: "lightsteelblue"}}>
          <th>Transaction ID</th>
          <th>Date</th>
          <th>Customer Name</th>
          <th>Amount</th>
          <th>Points</th>
        </tr>
      </thead>

      <tbody>
        {allTransactions?.map((transaction) => (
          <TransactionRow transaction={transaction} key={transaction?.transactionId} />
        ))}
      </tbody>
    </table>
  )
}

export default TransactionTable;
