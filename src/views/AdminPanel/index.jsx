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

  const [selectedResult1, setSelectedResult1] = useState(null);
  const [selectedResult2, setSelectedResult2] = useState(null);

  const handleResult1Change = (event) => {
    setSelectedResult1(event.target.value);
  };

  const handleResult2Change = (event) => {
    setSelectedResult2(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedResult1 !== null && selectedResult2 !== null) {
      const timestamp = new Date().toISOString();
      const time = new Date().toLocaleTimeString();
      const date = new Date().toLocaleDateString();

      // Push the selected numbers and timestamp to the respective Firebase database references
      push(ref(db, "allRandomNumbers1"), {
        number: selectedResult1,
        timestamp,
        time,
        date,
      });

      push(ref(db, "allRandomNumbers2"), {
        number: selectedResult2,
        timestamp,
        time,
        date,
      });

      // Reset the selected values to null
      setSelectedResult1(null);
      setSelectedResult2(null);
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
                <DateLabel>Result 1</DateLabel>
                <TimeSelect
                  value={selectedResult1}
                  onChange={handleResult1Change}
                >
                  <TimeOption disabled selected>
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
                  <TimeOption disabled selected>
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
