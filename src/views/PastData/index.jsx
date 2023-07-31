import React, { useState, useEffect } from "react";
import {
  DateInput,
  DateLabel,
  DateWrap,
  PastDataSect,
  PastDataWrap,
  TableData,
  TableRow,
  ResultTable,
  ColumnNames,
  TableHeading,
  TableBody,
  TableWrap,
} from "../../styles/PastData";
import Papa from "papaparse";

const PastData = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [csvData, setCsvData] = useState([]);

  // Function to handle date selection
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  // Fetch CSV data from the file
  useEffect(() => {
    fetch("/random.csv") // Replace 'data.csv' with the actual name of your CSV file
      .then((response) => response.text())
      .then((data) => {
        const parsedData = Papa.parse(data, { header: true }).data;
        setCsvData(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  }, []);

  // Filter the data based on the selected date
  useEffect(() => {
    const filteredData = csvData.filter((item) => item.Date === selectedDate);
    setFilteredData(filteredData);
  }, [selectedDate, csvData]);

  return (
    <PastDataSect>
      <PastDataWrap>
        <DateWrap>
          <DateLabel>Select a Date</DateLabel>
          <DateInput
            type="date"
            min="2021-07-20"
            max="2023-07-27"
            onChange={handleDateChange}
            value={selectedDate}
          />
        </DateWrap>
        <TableWrap>
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
              {filteredData.map((item, index) => (
                <TableRow key={index}>
                  <TableData>{item.Date}</TableData>
                  <TableData>{item.Time}</TableData>
                  <TableData>{item.Result1}</TableData>
                  <TableData>{item.Result2}</TableData>
                </TableRow>
              ))}
            </TableBody>
          </ResultTable>
        </TableWrap>
      </PastDataWrap>
    </PastDataSect>
  );
};

export default PastData;
