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
import { ref, onValue, orderByChild, equalTo } from "firebase/database";
import { db } from "../../utils/firebase";

const PastData = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [pastData, setPastData] = useState([]);

  useEffect(() => {
    if (selectedDate) {
      fetchPastData(selectedDate);
    } else {
      setPastData([]);
    }
  }, [selectedDate]);

  const fetchPastData = (date) => {
    try {
      const formattedDate = convertDateFormat(date); // Convert selected date format to Firebase date format

      const allRandomNumbers1Ref = ref(db, "allRandomNumbers1");
      const query1 = orderByChild(allRandomNumbers1Ref, "date").equalTo(
        formattedDate
      );

      const allRandomNumbers2Ref = ref(db, "allRandomNumbers2");
      const query2 = orderByChild(allRandomNumbers2Ref, "date").equalTo(
        formattedDate
      );

      const allDataPromises = [query1, query2].map(
        (query) =>
          new Promise((resolve, reject) => {
            onValue(
              query,
              (snapshot) => {
                if (snapshot.exists()) {
                  const data = snapshot.val();
                  const dataArray = Object.keys(data).map((key) => data[key]);
                  resolve(dataArray);
                } else {
                  resolve([]);
                }
              },
              reject
            );
          })
      );

      Promise.all(allDataPromises)
        .then(([data1, data2]) => {
          const combinedData = [...data1, ...data2];
          setPastData(combinedData);
        })
        .catch((error) => {
          console.error("Error fetching data from the database:", error);
        });
    } catch (error) {
      console.error("Error fetching data from the database:", error);
    }
  };

  const convertDateFormat = (date) => {
    const [year, month, day] = date.split("-");
    const formattedMonth = parseInt(month, 10);
    const formattedDay = parseInt(day, 10);
    return `${formattedMonth}/${formattedDay}/${year}`;
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <PastDataSect>
      <PastDataWrap>
        <DateWrap>
          <DateLabel>Select a Date</DateLabel>
          <DateInput
            type="date"
            value={selectedDate}
            onChange={(e) => handleDateChange(e.target.value)}
            min="2021-07-20"
            // max="2023-07-27"
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
              {pastData.length > 0 ? (
                pastData.map((data, index) => (
                  <TableRow key={`resultRow_${index}`}>
                    <TableData>{data.date}</TableData>
                    <TableData>{data.time}</TableData>
                    <TableData>{data.number1}</TableData>
                    <TableData>{data.number2}</TableData>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableData colSpan="4">
                    No data available for the selected date.
                  </TableData>
                </TableRow>
              )}
            </TableBody>
          </ResultTable>
        </TableWrap>
      </PastDataWrap>
    </PastDataSect>
  );
};

export default PastData;
