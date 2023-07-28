import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../../utils/firebase";
import {
  Admin,
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
    const startTime = 9 * 60; // 9 am in minutes (9 hours * 60 minutes)
    const endTime = 21 * 60; // 9 pm in minutes (21 hours * 60 minutes)
    const gap = 15; // Gap in minutes
    const timeOptions = [];

    for (let time = startTime; time <= endTime; time += gap) {
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${String(hours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")}`;
      timeOptions.push(formattedTime);
    }

    return timeOptions;
  };
  const timeOptions = generateTimeOptions();

  const formatDate = (date) => {
    const formattedDate = new Date(date);
    const day = formattedDate.getDate();
    const month = formattedDate.getMonth() + 1;
    const year = formattedDate.getFullYear();

    return `${String(month).padStart(2, )}/${String(day).padStart(
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

  const handleSubmit = () => {
    if (
      selectedResult1 !== "" &&
      selectedResult2 !== "" &&
      selectedDate !== "" &&
      selectedTime !== ""
    ) {
      const timestamp = new Date().toISOString();
      const time = new Date().toLocaleTimeString();

      // Format the selected date
      const formattedDate = formatDate(selectedDate);

      // Push the selected numbers and timestamp to the respective Firebase database references
      push(ref(db, "allRandomNumbers1"), {
        number: selectedResult1,
        timestamp,
        time,
        date: formattedDate, // Use the formatted date here
      });

      push(ref(db, "allRandomNumbers2"), {
        number: selectedResult2,
        timestamp,
        time,
        date: formattedDate, // Use the formatted date here
      });

      // Reset the selected values to empty strings
      setSelectedResult1("");
      setSelectedResult2("");
      setSelectedDate("");
      setSelectedTime("");
    }
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
