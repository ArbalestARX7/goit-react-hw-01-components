import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TransactionHead,
} from './TransactionHistory.styled';
import { TransactionItem } from './TransactionItem/TransactionItem';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <thead>
        <tr>
          <TransactionHead>Type</TransactionHead>
          <TransactionHead>Amount</TransactionHead>
          <TransactionHead>Currency</TransactionHead>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <TransactionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          ></TransactionItem>
        ))}
      </tbody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
