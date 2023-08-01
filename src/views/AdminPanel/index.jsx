import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
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

const AdminPanel = () => {
  const numberOptions = Array.from({ length: 100 }, (_, index) => index);

  const generateTimeOptions = () => {
    const timeOptions = [];
    const gap = 15; // Gap in minutes

    for (let hours = 0; hours < 24; hours++) {
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

    return `${String(month).padStart(2)}/${String(day).padStart(
      2,
      "0"
    )}/${year}`;
  };

  const [selectedResult1, setSelectedResult1] = useState("");
  const [selectedResult2, setSelectedResult2] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleResult1Change = (event) => {
    setSelectedResult1(event.target.value);
  };

  const handleResult2Change = (event) => {
    setSelectedResult2(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const formatTime = (time) => {
    const date = new Date(`2000-01-01T${time}`);
    const formattedTime = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    console.log("formattedTime", formattedTime);
    return formattedTime;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedResult1 !== "" &&
      selectedResult2 !== "" &&
      selectedDate !== "" &&
      selectedTime !== ""
    ) {
      const timestamp = new Date().toISOString();

      // Format the selected date
      const formattedDate = formatDate(selectedDate);

      // Format the selected time
      const formattedTime = formatTime(selectedTime);

      console.log("formattedTime", formattedTime);
      console.log("selectedTime", selectedTime);

      // Push the selected numbers, timestamp, and time to the respective Firebase database references
      push(ref(db, "updatedLotteryNumbers"), {
        number1: selectedResult1,
        number2: selectedResult2,
        date: formattedDate,
        selectedTime,
        time: formattedTime, // Use the formatted time without seconds
      });

      // push(ref(db, "allRandomNumbers2"), {
      //   number: selectedResult2,
      //   time: formattedTime, // Use the formatted time without seconds
      //   date: formattedDate,
      //   selectedTime,
      // });

      // Reset the selected values to empty strings
      setSelectedResult1("");
      setSelectedResult2("");
      setSelectedDate("");
      setSelectedTime("");
    }
  };

  const navigate = useNavigate();

  const handleCallResultsClick = () => {
    navigate("/Lottery");
  };

  return (
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
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </AdminBottomLeft>
              <AdminBottomLeft>
                <DateLabel>Select Time</DateLabel>
                <TimeSelect value={selectedTime} onChange={handleTimeChange}>
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
                  value={selectedResult1}
                  onChange={handleResult1Change}
                >
                  <TimeOption disabled value="">
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
                  value={selectedResult2}
                  onChange={handleResult2Change}
                >
                  <TimeOption disabled value="">
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
  );
};

export default AdminPanel;
