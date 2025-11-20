import { calculatePointsForAmount } from "../utils/rewards";

function TransactionRow({ transaction = {}}) {
  return (
    <tr key={transaction?.transactionId}>
      <td>{transaction?.transactionId}</td>
      <td>{new Date(transaction?.date).toLocaleDateString()}</td>
      <td>{transaction?.customerName}</td>
      <td>{transaction?.amount.toFixed(2)}</td>
      <td>{calculatePointsForAmount(transaction?.amount)}</td>
    </tr>
  )
}

export default TransactionRow;
