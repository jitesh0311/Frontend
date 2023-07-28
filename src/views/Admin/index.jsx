import React, { useState } from "react";
import { db } from "../../utils/firebase";

const Admin = () => {
  const [randomNumber, setRandomNumber] = useState("");
  const [displayTime, setDisplayTime] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Convert displayTime to the format that Firebase accepts (e.g., UNIX timestamp or ISO string)
    // You can use libraries like moment.js for this conversion.

    // Update the random number in Firebase at the specified displayTime
    db.ref("randomNumber").set({
      number: parseInt(randomNumber, 10),
      displayTime: displayTime,
    });

    // Reset the form fields after submission
    setRandomNumber("");
    setDisplayTime("");
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Random Number:
          <input
            type="number"
            value={randomNumber}
            onChange={(e) => setRandomNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Display Time:
          <input
            type="datetime-local" // Use the appropriate type for the date/time picker
            value={displayTime}
            onChange={(e) => setDisplayTime(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Number</button>
      </form>
    </div>
  );
};

export default Admin;
