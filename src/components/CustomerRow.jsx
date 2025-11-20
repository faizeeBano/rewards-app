import PropTypes from "prop-types";

export default function CustomerRow({ customer = {} }) {
  return (
    <tr>
      <td>{customer?.customerId}</td>
      <td>{customer?.customerName}</td>
      <td>{customer?.total}</td>
      <td>
        <button className="view-btn">View</button>
      </td>
    </tr>
  );
}

CustomerRow.propTypes = {
  customer: PropTypes.shape({
    customerId: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
  }).isRequired,
};
