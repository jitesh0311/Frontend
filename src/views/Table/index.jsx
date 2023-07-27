import React from "react";
import {
  ColumnNames,
  ResultTable,
  TableBody,
  TableData,
  TableHeading,
  TableRow,
  TableSect,
  TableWrapper,
} from "../../styles/Table";

const Table = ({ tableData }) => {
  // Ensure tableData is defined and has properties allRandomNumbers1 and allRandomNumbers2
  if (
    !tableData ||
    !tableData.allRandomNumbers1 ||
    !tableData.allRandomNumbers2
  ) {
    return null; // Return null or any appropriate UI if data is not available yet
  }

  // Extract the data from the prop
  const { allRandomNumbers1, allRandomNumbers2 } = tableData;

  return (
    <TableSect>
      <TableWrapper>
        <ResultTable>
          <TableHeading>
            <TableRow>
              <ColumnNames>Date</ColumnNames>
              <ColumnNames>Time</ColumnNames>
              <ColumnNames>Result1</ColumnNames>
              <ColumnNames>Result2</ColumnNames>
            </TableRow>
          </TableHeading>

          <TableBody>
            {/* Display the data from allRandomNumbers1 and allRandomNumbers2 */}
            {allRandomNumbers1.map((data1, index) => (
              <TableRow key={`resultRow_${index}`}>
                <TableData>{String(data1.date)}</TableData>
                <TableData>{String(data1.time)}</TableData>
                <TableData>{data1.number}</TableData>
                {allRandomNumbers2[index] ? (
                  <TableData>{allRandomNumbers2[index].number}</TableData>
                ) : (
                  <TableData>-</TableData>
                )}
              </TableRow>
            ))}
          </TableBody>
        </ResultTable>
      </TableWrapper>
    </TableSect>
  );
};

export default Table;
