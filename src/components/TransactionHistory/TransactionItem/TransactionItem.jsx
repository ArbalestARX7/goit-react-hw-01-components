import { Transaction, TransactionData } from "./TransactionItem.styled";
import PropTypes from "prop-types";

export const TransactionItem = ({type, amount, currency }) => {
    return <Transaction>
                <TransactionData>{ type }</TransactionData>
                <TransactionData>{ amount }</TransactionData>
                <TransactionData>{ currency }</TransactionData>
            </Transaction>
}


TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}