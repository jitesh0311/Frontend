import React, { useEffect, useState } from "react";
import {
  ColumnNames,
  FrameWrapper,
  ResultTable,
  TableBody,
  TableData,
  TableHeading,
  TableRow,
  TableSect,
  TableWrapper,
  Frame,
  Number,
  NumberWrapper,
  Top,
  Bottom,
  FrameNames,
  PastDataWrapper,
  PastDataButton,
} from "../../styles/Test";

import FrameImg from "../../assets/frame.png";
import { useNavigate } from "react-router-dom";

const Test = () => {
 const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handlePastData = () => {
    navigate("/PastData");
  };

  useEffect(() => {
    fetch("http://localhost:8081/futuredata")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>; // Render a loading indicator or message while fetching data
  }

  let arrData = data[data.length - 1];

   var currentDate = new Date();

   var hours = currentDate.getHours();
   var minutes = currentDate.getMinutes();
   var ampm = hours >= 12 ? "PM" : "AM";
   var formattedHours = hours % 12 === 0 ? 12 : hours % 12;

   var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

   var currentTime = `${formattedHours}:${formattedMinutes} ${ampm}`;
 
   var year = currentDate.getFullYear();
   var month = currentDate.getMonth() + 1; // Months are zero-based, so we add 1
   var day = currentDate.getDate(); // Remove this after testing

   var formatemonth = month < 10 ? "0" + month : month;
   var formateday = day < 10 ? "0" + day : day;

   var formattedDate = `${year}-${formatemonth}-${formateday} `;

   const initialCounter = 0

   

   let indexCounter = initialCounter;

  if (arrData !== null) {
    for (let i = 0; i < arrData.length; i++) {
      if (
        new Date(formattedDate + arrData[i].Time) <=
        new Date(formattedDate + currentTime)
      ) {
        indexCounter = indexCounter + 1;
        continue;
      } else {
        break;
      }
    }
  }

 
  if (indexCounter - 1 < 0 || indexCounter - 1 >= arrData.length) {
    return <div style={{ color: "white" }}>Lottery will start at 9 AM</div>;
  }

  const BhutanGoldImg = arrData[indexCounter - 1].BhutanGold;
  const BhutanDeluxeImg = arrData[indexCounter - 1].BhutanDeluxe;



   const Img1 = Math.floor(BhutanGoldImg / 10);
   const Img2 = Math.floor(BhutanGoldImg % 10);

   const Img3 = Math.floor(BhutanDeluxeImg / 10);
   const Img4 = Math.floor(BhutanDeluxeImg % 10);


  return (
    <TableSect>
      <TableWrapper>
        <Top>
          <FrameWrapper>
            <FrameNames>
              Bhutan <span style={{ color: "#FFD700" }}>Gold</span>
            </FrameNames>
            <Frame src={FrameImg} />
            {Img1 >= 0 && Img2 >= 0 && (
              <>
                <NumberWrapper>
                  <Number src={require(`../../assets/${Img1}.png`)} />
                  <Number src={require(`../../assets/${Img2}.png`)} />
                </NumberWrapper>
              </>
            )}
          </FrameWrapper>
          <FrameWrapper>
            <FrameNames>
              Bhutan
              <span style={{ color: "#C0C0C0 " }}> Deluxe</span>
            </FrameNames>
            <Frame src={FrameImg} />
            {Img3 >= 0 && Img4 >= 0 && (
              <>
                <NumberWrapper>
                  <Number src={require(`../../assets/${Img3}.png`)} />
                  <Number src={require(`../../assets/${Img4}.png`)} />
                </NumberWrapper>
              </>
            )}
          </FrameWrapper>
        </Top>
        <Bottom>
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
              {data[indexCounter - 1]?.map((d, i) => (
                <TableRow key={i}>
                  <TableData>{d.Date}</TableData>
                  <TableData>{d.Time}</TableData>
                  <TableData>{d.BhutanGold}</TableData>
                  <TableData>{d.BhutanDeluxe}</TableData>
                </TableRow>
              ))}
            </TableBody>
          </ResultTable>
        </Bottom>
        <PastDataWrapper>
          <PastDataButton onClick={handlePastData}>
            View Recent Data
          </PastDataButton>
        </PastDataWrapper>
      </TableWrapper>
    </TableSect>
  );
};

export default Test;


