import styled from "@emotion/styled";

export const Transaction = styled.tr`
  &:not(:last-child) {
  border-right: 1px #ddd solid;
}

  &:hover {
  background-color: #f5f5f5;
}`;

export const TransactionData = styled.td`
  font-size: 14px;
  color: #333;
  padding: 12px 15px;
  border-bottom: 1px solid #ddd;
  text-align: center;`;