import React, { useState } from "react";
import { useEffect } from "react";

function generateDateList(startDateString) {
  const startDate = new Date(startDateString);
  const dateList = [startDateString];

  for (let i = 1; i <= 6; i++) {
    const nextDate = new Date(startDate);
    nextDate.setDate(startDate.getDate() + i);
    dateList.push(nextDate.toISOString().split("T")[0]);
    
  }

  return dateList;
}

const CalendarTable = ({ data, startDate, addDataFunc }) => {
  const [dateList, setDateList] = useState();

  const options = {
    weekday: 'short', // Short weekday name (e.g., "Sun")
    day: 'numeric',    // Day of the month (e.g., "3")
    month: 'short',  // Numeric month (e.g., "9")
  };

  useEffect(() => {
    setDateList(generateDateList(startDate));
  }, [startDate]);

  return !dateList ? null : (
    <div>
      <table className="calendar">
        <thead>
          <tr>
            <td/>
            {dateList.map((date) => (
              <th key={date}>{new Intl.DateTimeFormat('en-US', options).format(new Date(date))}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
          <td>Fajr</td>
            {dateList.map((date) => (
              <td className={`prayer-count-${data[date] ? Object.keys(data[date]).length : 0}`} key={`${date}-fajr`} onClick={() => addDataFunc(date, "fajr")}>{data[date]?.["fajr"]}</td>
            ))}
          </tr>
          <tr>
          <td>Dhuhr</td>
            {dateList.map((date) => (
              <td className={`prayer-count-${data[date] ? Object.keys(data[date]).length : 0}`} key={`${date}-dhuhr`} onClick={() => addDataFunc(date, "dhuhr")}>{data[date]?.["dhuhr"]}</td>
            ))}
          </tr>
          <tr>
          <td>Asr</td>
            {dateList.map((date) => (
              <td className={`prayer-count-${data[date] ? Object.keys(data[date]).length : 0}`} key={`${date}-asr`} onClick={() => addDataFunc(date, "asr")}>{data[date]?.["asr"]}</td>
            ))}
          </tr>
          <tr>
          <td>Maghrib</td>
            {dateList.map((date) => (
              <td className={`prayer-count-${data[date] ? Object.keys(data[date]).length : 0}`} key={`${date}-maghrib`} onClick={() => addDataFunc(date, "maghrib")}>{data[date]?.["maghrib"]}</td>
            ))}
          </tr>
          <tr>
          <td>Isha</td>
            {dateList.map((date) => (
              <td className={`prayer-count-${data[date] ? Object.keys(data[date]).length : 0}`} key={`${date}-isha`} onClick={() => addDataFunc(date, "isha")}>{data[date]?.["isha"]}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
