import React, { useState, useEffect } from 'react'
import '../../styles/Table/styles.css'


const Table = () => {
    const [randomData, setRandomData] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentTime = now.toLocaleTimeString(); // Include seconds in the time
      const newRandomNumber = Math.floor(Math.random() * 100);
      const newData = {
        date: now.toLocaleDateString(),
        time: currentTime,
        number: newRandomNumber,
      };
      setRandomData((prevData) => [...prevData, newData]);

      if (now.getHours() === 18 && now.getMinutes() >= 25) {
        clearInterval(interval);
      }
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts or when the time reaches 18:25
  }, []);

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const time = getCurrentTime();
      setCurrentTime(time);
    }, 1000); // Update every 1 second

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);

  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  return (
    <div className="table-container">
      <div className="time-container">
        <div className="top-bar">
          <div className="date-time">
            <p>
              {new Date().toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
              })}{" "}
              | {currentTime}
            </p>
          </div>
        </div>
      </div>
      <h2>Result</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {randomData.map((data, index) => (
            <tr key={index}>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default Table