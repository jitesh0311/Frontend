import styled from "styled-components";

export const TableSect = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TableWrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;

export const ResultTable = styled.table`
  width: 100%;
  max-width: 900px;

  @media (max-width: 990px) {
    max-width: 840px;
  }

  @media (max-width: 900px) {
    max-width: 750px;
  }

  @media (max-width: 830px) {
    max-width: 710px;
  }

  @media (max-width: 787px) {
    max-width: 650px;
  }

  @media (max-width: 729px) {
    max-width: 600px;
  }

  @media (max-width: 680px) {
    max-width: 550px;
  }

  @media (max-width: 623px) {
    max-width: 500px;
  }

  @media (max-width: 567px) {
    max-width: 450px;
  }

  @media (max-width: 521px) {
    max-width: 400px;
  }

  @media (max-width: 468px) {
    max-width: 350px;
  }

  @media (max-width: 420px) {
    max-width: 300px;
  }

  @media (max-width: 360px) {
    max-width: 250px;
  }
`;

export const TableHeading = styled.thead``;

export const TableRow = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const ColumnNames = styled.th`
  width: 100%;
  max-width: 250px;
  border: 2px solid #fffefee6;
  color: #fffefee6;

  @media (max-width: 623px) {
    font-size: 13px;
  }

  @media (max-width: 521px) {
    font-size: 11px;
  }

  @media (max-width: 468px) {
    font-size: 10px;
  }

  @media (max-width: 420px) {
    font-size: 8px;
  }

  @media (max-width: 360px) {
    font-size: 7px;
  }
`;

export const TableBody = styled.tbody``;
export const TableData = styled.td`
  text-align: center;
  width: 100%;
  max-width: 250px;
  border: 1px solid #fffefee6;
  color: #fffefee6;

  @media (max-width: 623px) {
    font-size: 13px;
  }

  @media (max-width: 521px) {
    font-size: 11px;
  }

  @media (max-width: 468px) {
    font-size: 10px;
  }
`;

export const PastDataWrapper = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 40px;

  @media (max-width: 521px) {
    margin-top: 30px;
    flex-direction: column;
    gap: 30px;
  }

  @media (max-width: 468px) {
    margin-top: 20px;
  }
`;

export const PastDataButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  border: none;
  color: white;
  background-color: #795bf5;
  cursor: pointer;

  &:hover {
    background-color: #8f75f8;
  }

  @media (max-width: 787px) {
    font-size: 14px;
  }

  @media (max-width: 623px) {
    font-size: 12px;
  }

  @media (max-width: 521px) {
    font-size: 13px;
  }

  @media (max-width: 420px) {
    font-size: 11px;
  }
`;
