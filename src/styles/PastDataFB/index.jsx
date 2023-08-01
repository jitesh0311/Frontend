import styled from "styled-components";

export const PastDataSect = styled.div`
  width: 100%;
  max-width: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;

export const PastDataWrap = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 800px;
  gap: 50px;
`;
export const DateWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 15px;
`;

export const DateLabel = styled.label`
  color: #fffefee6;
`;

export const DateInput = styled.input``;
export const TableWrap = styled.div`
  width: 100%;
  max-width: 800px;
  min-height: 400px;
  overflow-y: auto;
`;

export const ResultTable = styled.table`
  width: 100%;
  max-width: 900px;
  min-height: 400px;
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
`;

export const TableBody = styled.tbody``;
export const TableData = styled.td`
  text-align: center;
  width: 100%;
  max-width: 250px;
  border: 1px solid #fffefee6;
  color: #fffefee6;
`;
