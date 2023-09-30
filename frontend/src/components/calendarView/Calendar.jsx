import React, { useState } from "react";
import { useEffect } from "react";
import PrayerRow from "./PrayerRow";

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

function formatDate(date) {
  const options = {
    weekday: "short", // Short weekday name (e.g., "Sun")
    day: "numeric", // Day of the month (e.g., "3")
    month: "short", // Numeric month (e.g., "9")
  };
  return new Intl.DateTimeFormat("en-US", options).format(
    new Date(date)
  )
}

const CalendarTable = ({ data, startDate, addDataFunc, removeDataFunc }) => {
  const [dateList, setDateList] = useState();

  useEffect(() => {
    setDateList(generateDateList(startDate));
  }, [startDate]);

  return !dateList ? null : (
    <div>
      <table className="calendar">
        <thead>
          <tr>
            <td />
            {dateList.map((date) => (
              <th key={date}>
                {formatDate(date)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <PrayerRow data={data} dates={dateList} addDataFunc={addDataFunc} removeDataFunc={removeDataFunc} name="fajr" />
          <PrayerRow data={data} dates={dateList} addDataFunc={addDataFunc} removeDataFunc={removeDataFunc} name="dhuhr" />
          <PrayerRow data={data} dates={dateList} addDataFunc={addDataFunc} removeDataFunc={removeDataFunc} name="asr" />
          <PrayerRow data={data} dates={dateList} addDataFunc={addDataFunc} removeDataFunc={removeDataFunc} name="maghrib" />
          <PrayerRow data={data} dates={dateList} addDataFunc={addDataFunc} removeDataFunc={removeDataFunc} name="isha" />
        </tbody>
      </table>
    </div>
  );
};

export default CalendarTable;
