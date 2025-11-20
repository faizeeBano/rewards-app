import PropTypes from "prop-types";
import { calculatePointsForAmount } from "../utils/rewards";

function TransactionRow({ transaction = {}}) {
  return (
    <tr key={transaction?.transactionId}>
      <td>{transaction?.transactionId}</td>
      <td>{new Date(transaction?.date)?.toLocaleDateString()}</td>
      <td>{transaction?.customerName}</td>
      <td>{isNaN(Number(transaction?.amount))? "Invalid Amount"
        : Number(transaction?.amount).toFixed(2)}
      </td>
      <td>{calculatePointsForAmount(transaction?.amount)}</td>
    </tr>
  )
}

TransactionRow.propTypes = {
  transaction: PropTypes.shape({
    transactionId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    date: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
  }).isRequired
};

export default TransactionRow;
