import React, { useState } from "react";
import {
  ColumnNames,
  PastDataButton,
  PastDataWrapper,
  ResultTable,
  TableBody,
  TableData,
  TableHeading,
  TableRow,
  TableSect,
  TableWrapper,
} from "../../styles/Table";
// import Lottery from '../../views/Lottery/index'

import { useNavigate } from "react-router-dom";

const Table = ({ tableData, actualTime }) => {
  // State to track whether to show the table or not
  const [showTable, setShowTable] = useState(true);
  const [showPastData, setPastData] = useState(false);
  // State to track the selected date for past day data
  const [selectedDate, setSelectedDate] = useState("");
  // State to store the filtered data based on the selected date
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  const handleCallResultsClick = () => {
    navigate("/PastData");
  };

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
  const { allRandomNumbers1, allRandomNumbers2, updatedLotteryNumbers } =
    tableData;

  const currentDate = new Date();

  const filterData1 = allRandomNumbers1.filter(
    (data) => new Date(data.date).toDateString() === currentDate.toDateString()
  );

  // Step 3: Filter the data based on the current date for allRandomNumbers2
  const filterData2 = allRandomNumbers2.filter(
    (data) => new Date(data.date).toDateString() === currentDate.toDateString()
  );

  const checkAdminSelect = (updatedLotteryNumbers, date, time) => {
    // Implement your logic to check and return selected data
    // For example:
    return updatedLotteryNumbers.filter(
      (item) => item.date === date && item.selectedTime === time
    );
  };

  function checkAdminSelected(arr, time) {
    let selectedArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].selectedTime === time) {
        selectedArr.push(arr[i]);
        break;
      } else {
        continue;
      }
    }
    return selectedArr;
  }

  // Function to handle date selection for past day data
  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setSelectedDate(selectedDate);
    console.log("Selected Date:", selectedDate);

    // Convert the selected date to the format 'm/dd/yyyy'
    const dateParts = selectedDate.split("-");
    const month = parseInt(dateParts[1], 10);
    const day = parseInt(dateParts[2], 10);
    const year = dateParts[0];
    const formattedSelectedDate = `${month}/${day}/${year}`;

    console.log(formattedSelectedDate);

    // Filter the data based on the selected date
    const filteredData = allRandomNumbers1.filter(
      (data1) => String(data1.date) === formattedSelectedDate
    );
    setFilteredData(filteredData);
  };

  // Function to handle the "Past Day Data" button click
  const handlePastDayDataClick = () => {
    setShowTable(false);
    setPastData(true);
  };

  // Function to handle the "Show Table" button click and reset the selected date
  const handleShowTableClick = () => {
    setShowTable(true);
    setPastData(false);
    setSelectedDate("");
    setFilteredData([]);
  };

  return (
    <TableSect>
      <TableWrapper>
        {/* {console.log(updatedLotteryNumbers)} */}
        <ResultTable>
          {showTable && (
            <TableHeading>
             
              <TableRow>
                <ColumnNames>Date</ColumnNames>
                <ColumnNames>Time</ColumnNames>
                <ColumnNames>Bhutan Gold</ColumnNames>
                <ColumnNames>Bhutan Deluxe</ColumnNames>
              </TableRow>
            </TableHeading>
          )}
          {showTable && (
            <TableBody>
              {/* Display the data from allRandomNumbers1 */}
              {filterData1.map((data1, index) => (
                <TableRow key={`resultRow_${index}`}>
                  <TableData>{String(data1.date)}</TableData>
                  <TableData>{data1.time}</TableData>
                  <TableData>
                    {checkAdminSelect(
                      updatedLotteryNumbers,
                      data1.date,
                      data1.time
                    ).length === 0
                      ? data1.number
                      : checkAdminSelect(
                          updatedLotteryNumbers,
                          data1.date,
                          data1.time
                        )[0]?.number1}
                  </TableData>
                  {/* Display the data from allRandomNumbers2 */}
                  {filterData2[index] ? (
                    <TableData>
                      {checkAdminSelect(
                        updatedLotteryNumbers,
                        data1.date,
                        data1.time
                      ).length === 0
                        ? filterData2[index]?.number
                        : checkAdminSelect(
                            updatedLotteryNumbers,
                            data1.date,
                            data1.time
                          )[0]?.number2}
                    </TableData>
                  ) : (
                    <TableData>-</TableData>
                  )}
                </TableRow>
              ))}
              {/* Display the current time if it's not manually selected */}
            </TableBody>
          )}

          {showPastData && (
            <TableHeading>
              <TableRow>
                <ColumnNames>Date</ColumnNames>
                <ColumnNames>Time</ColumnNames>
                <ColumnNames>Bhutan Gold</ColumnNames>
                <ColumnNames>Bhutan Deluxe</ColumnNames>
              </TableRow>
            </TableHeading>
          )}
          {showPastData && (
            <TableBody>
              {/* Display the data from allRandomNumbers1 and allRandomNumbers2 */}
              {filteredData.map((data1, index) => (
                <TableRow key={`resultRow_${index}`}>
                  <TableData>{String(data1.date)}</TableData>
                  <TableData>{data1.time}</TableData>
                  <TableData>
                    {checkAdminSelected(
                      updatedLotteryNumbers,
                      data1.date,
                      data1.time
                    ).length === 0
                      ? data1.number
                      : checkAdminSelected(
                          updatedLotteryNumbers,
                          data1.date,
                          data1.time
                        )[0]?.number1}
                  </TableData>
                  {allRandomNumbers2[index] ? (
                    <TableData>
                      {checkAdminSelected(
                        updatedLotteryNumbers,
                        data1.date,
                        data1.time
                      ).length === 0
                        ? allRandomNumbers2[index]?.number
                        : checkAdminSelected(
                            updatedLotteryNumbers,
                            data1.date,
                            data1.time
                          )[0]?.number2}
                    </TableData>
                  ) : (
                    <TableData>-</TableData>
                  )}
                </TableRow>
              ))}
              {/* Display the current time if it's not manually selected */}
            </TableBody>
          )}
          <PastDataWrapper>
            <PastDataButton onClick={handleCallResultsClick}>
              Annual Data
            </PastDataButton>
            {/* Use the handlePastDayDataClick function to hide the table */}
            {showTable ? (
              <PastDataButton onClick={handlePastDayDataClick}>
                Recent Data
              </PastDataButton>
            ) : (
              <>
                {/* Show the input for date selection */}
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
                {/* Show the "Show Table" button */}
                <PastDataButton onClick={handleShowTableClick}>
                  Show Table
                </PastDataButton>
              </>
            )}
          </PastDataWrapper>
        </ResultTable>
      </TableWrapper>
      {/* <Lottery PushAdminData = {updatedLotteryNumbers} /> */}
    </TableSect>
  );
};

export default Table;
