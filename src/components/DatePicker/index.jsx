// import React, { useState, useEffect } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { ref, get } from "firebase/database";
// import { db } from "../../utils/firebase";

// const LotteryApp = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [lotteryData, setLotteryData] = useState([]);

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//     fetchDataForDate(date);
//   };

//   const fetchDataForDate = (date) => {
//     if (!date) {
//       setLotteryData([]);
//       return;
//     }

//     const formattedDate = formatDate(date);
//     const lotteryDataRef = ref(db, `lotteryData/${formattedDate}`);

//     get(lotteryDataRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const dataArray = Object.values(snapshot.val());
//           if (dataArray.length === 0) {
//             alert("No data found for the selected date.");
//           }
//           setLotteryData(dataArray);
//         } else {
//           setLotteryData([]);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data from the database:", error);
//       });
//   };

//   const formatDate = (date) => {
//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const day = String(date.getDate()).padStart(2, "0");
//     return `${year}-${month}-${day}`;
//   };

//   const handleTableRowClick = (item) => {
//     console.log("Table row clicked!", item);
//     // Replace this placeholder function with your own logic to handle row clicks
//     // For example, you can open a modal or navigate to a detailed view for the selected data.
//   };

//   useEffect(() => {
//     // Check if the app is connected to the Firebase database
//     try {
//       const connectedRef = firebase.database().ref(".info/connected");
//       connectedRef
//         .on("value", (snapshot) => {
//           const isConnected = snapshot.val();
//           if (isConnected) {
//             console.log("Connected to the Firebase database.");
//           } else {
//             console.log("Not connected to the Firebase database.");
//           }
//         })
//         .catch((error) => {
//           console.error("Error checking database connection:", error);
//         });
//     } catch (error) {
//       console.error("Error checking database connection:", error);
//     }

//     // Fetch the last generated numbers from the database and other existing code
//     // ...
//   }, []);

//   return (
//     <div>
//       <h1>Lottery Data Viewer</h1>
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleDateChange}
//         dateFormat="yyyy-MM-dd"
//       />
//       <table>
//         <thead>
//           <tr>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Result 1</th>
//             <th>Result 2</th>
//           </tr>
//         </thead>
//         <tbody>
//           {lotteryData.map((item, index) => (
//             <tr
//               key={index}
//               onClick={
//                 lotteryData.length > 0 ? () => handleTableRowClick(item) : null
//               }
//               style={{ cursor: lotteryData.length > 0 ? "pointer" : "default" }}
//             >
//               <td>{item.date}</td>
//               <td>{item.time}</td>
//               <td>{item.result1}</td>
//               <td>{item.result2}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LotteryApp;
