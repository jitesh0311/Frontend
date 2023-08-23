import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  AdminBottom,
  AdminBottomLeft,
  AdminForm,
  AdminFormWrapper,
  AdminHeading,
  AdminHeadingWrapper,
  AdminSection,
  AdminWrap,
  DateLabel,
  DateInput,
  SubmitButton,
  SubmitButtonWrap,
  TimeOption,
  TimeSelect,
} from "../../styles/AdminPanel";
import {
  ColumnNames,
  ResultTable,
  TableBody,
  TableData,
  TableHeading,
  TableRow,
  TableSect,
  TableWrapper,
  Top,
  Bottom,
} from "../../styles/Test";
const AdminPanel = () => {
  const [data, setData] = useState([]);
   const [formData, setFormData] = useState({
     Date: "",
     Time: "",
     BhutanGold: 0,
     BhutanDeluxe: 0,
   });

 useEffect(() => {
   fetch("http://localhost:8081/showAdmin")
     .then((res) => res.json())
     .then((data) => {
       setData(data);
     })
     .catch((error) => {
       console.error("Error fetching data:", error);
     });
 }, []);

    // const arrOuter = data[0];
    const firstDataItem = data.length > 0 ? data : {};

    // const arrInner = arrOuter[arrOuter.length - 1]

  
 
  // Generate an array of time options from 9:00 AM to 9:00 PM with a gap of 15 minutes
  const numberOptions = Array.from({ length: 100 }, (_, index) => index);

  const generateTimeOptions = () => {
    const timeOptions = [];
    const gap = 15; // Gap in minutes

    for (let hours = 9; hours <= 21; hours++) {
      for (let minutes = 0; minutes < 60; minutes += gap) {
        const ampm = hours >= 12 ? "PM" : "AM";
        const formattedHours = hours % 12 || 12; // Convert 0 to 12
        const formattedMinutes = String(minutes).padStart(2, "0");
        const formattedTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
        timeOptions.push(formattedTime);
      }
    }

    return timeOptions;
  };

  const timeOptions = generateTimeOptions();

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1;
    const year = formattedDate.getFullYear();

    const formattedDay = day < 10 ? "0" + day : day;
    const formattedMonth = month < 10 ? "0" + month : month;

    return `${String(formattedDay)}/${String(formattedMonth)}/${year}`;
  };

  const formatTime = (time) => {
    const date = new Date(`2000-01-01T${time}`);
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
    return formattedTime;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitedDate = formatDate(formData.Date);
    const submitedTime = formData.Time;
    const Number1 = parseInt(formData.BhutanGold);
    const Number2 = parseInt(formData.BhutanDeluxe);

    const requestData = {
      Date: submitedDate,
      Time: submitedTime,
      BhutanGold: Number1,
      BhutanDeluxe: Number2,
    };

    try {
     // Added console log

      const response = await axios.post(
        "http://localhost:8081/update",
        JSON.stringify(requestData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);

      if (response.status === 200) {
        console.log("Data updated successfully");
      } else {
        console.log("Data not updated");
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  return (
    <TableSect>
      <TableWrapper>
        {firstDataItem.length > 0 && (
        <Top>
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
              {firstDataItem.map((d, i) => (
                <TableRow key={i}>
                  <TableData>{d.Date}</TableData>
                  <TableData>{d.Time}</TableData>
                  <TableData>{d.BhutanGold}</TableData>
                  <TableData>{d.BhutanDeluxe}</TableData>  
                </TableRow>
              ))}
            </TableBody>
          </ResultTable>
        </Top>
        )}
        <Bottom>
          <AdminSection>
            <AdminWrap>
              <AdminForm>
                <AdminFormWrapper>
                  <AdminHeadingWrapper>
                    <AdminHeading>Admin</AdminHeading>
                  </AdminHeadingWrapper>
                  <AdminBottom>
                    <AdminBottomLeft>
                      <DateLabel>Select a Date</DateLabel>
                      <DateInput
                        type="date"
                        name="Date"
                        value={formData.Date}
                        onChange={handleInputChange}
                      />
                    </AdminBottomLeft>
                    <AdminBottomLeft>
                      <DateLabel>Select Time</DateLabel>
                      <TimeSelect
                        name="Time"
                        value={formData.Time}
                        onChange={handleInputChange}
                      >
                        <TimeOption disabled value="">
                          Select
                        </TimeOption>
                        {timeOptions.map((time) => (
                          <TimeOption key={time} value={time}>
                            {time}
                          </TimeOption>
                        ))}
                      </TimeSelect>
                    </AdminBottomLeft>
                    <AdminBottomLeft>
                      <DateLabel>Result 1</DateLabel>
                      <TimeSelect
                        name="BhutanGold"
                        onChange={handleInputChange}
                      >
                        <TimeOption disabled value={formData.BhutanGold}>
                          Select
                        </TimeOption>
                        {numberOptions.map((number) => (
                          <TimeOption key={number} value={number}>
                            {number}
                          </TimeOption>
                        ))}
                      </TimeSelect>
                    </AdminBottomLeft>
                    <AdminBottomLeft>
                      <DateLabel>Result 2</DateLabel>
                      <TimeSelect
                        name="BhutanDeluxe"
                        onChange={handleInputChange}
                      >
                        <TimeOption disabled value={formData.BhutanDeluxe}>
                          Select
                        </TimeOption>
                        {numberOptions.map((number) => (
                          <TimeOption key={number} value={number}>
                            {number}
                          </TimeOption>
                        ))}
                      </TimeSelect>
                    </AdminBottomLeft>
                    <SubmitButtonWrap>
                      <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
                    </SubmitButtonWrap>
                  </AdminBottom>
                </AdminFormWrapper>
              </AdminForm>
            </AdminWrap>
          </AdminSection>
        </Bottom>
      </TableWrapper>
    </TableSect>
  );
};

export default AdminPanel;
