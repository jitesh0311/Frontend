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

const Table = ({ tableData, actualTime }) => {
  // Update prop name to 'actualTime'
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

  // Function to format time to display only hours and minutes
  const formatTime = (time) => {
    const [hour, minute] = time.split(":");
    const parsedHour = parseInt(hour, 10);
    const ampm = parsedHour >= 12 ? "AM" : "PM";
    const formattedHour = parsedHour % 12 || 12; // Convert 0 to 12
    return `${formattedHour}:${minute} ${ampm}`;
  };

  return (
    <TableSect>
      <TableWrapper>
        <ResultTable>
          <TableHeading>
            <TableRow>
              <ColumnNames>Date</ColumnNames>
              <ColumnNames>Time</ColumnNames>
              <ColumnNames>Bhutan Gold</ColumnNames>
              <ColumnNames>Bhutan Deluxe</ColumnNames>
            </TableRow>
          </TableHeading>

          <TableBody>
            {/* Display the data from allRandomNumbers1 and allRandomNumbers2 */}
            {allRandomNumbers1.map((data1, index) => (
              <TableRow key={`resultRow_${index}`}>
                <TableData>{String(data1.date)}</TableData>
                <TableData>
                  {data1.selectedTime !== undefined
                    ? formatTime(data1.selectedTime)
                    : formatTime(data1.time)}
                </TableData>
                <TableData>{data1.number}</TableData>
                {allRandomNumbers2[index] ? (
                  <TableData>{allRandomNumbers2[index].number}</TableData>
                ) : (
                  <TableData>-</TableData>
                )}
              </TableRow>
            ))}
            {/* Display the current time if it's not manually selected */}
          </TableBody>
        </ResultTable>
      </TableWrapper>
    </TableSect>
  );
};

export default Table;
