import { useState } from "react";
import CalendarTable from "./Calendar";

function CalendarView() {
  const [data, setData] = useState({
    "2023-09-10": {"fajr": "Yes"}, "2023-09-11": {"dhuhr": "Yes", "isha": "Yes"} 
  })
  const [startDate, setStartDate] = useState("2023-09-10")

  const addData = (date, prayer) => {
    const intermediateData = {...data}
    if (date in data) {
      intermediateData[date][prayer] = "Yes"
    }
    else {
      intermediateData[date] = {[prayer]: "Yes"}
    }
    setData(intermediateData)
  }

  const goForward = () => {  
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() + 1);
    setStartDate(nextDate.toISOString().split("T")[0]);

}
const goBackward = () => {  
    const nextDate = new Date(startDate);
    nextDate.setDate(nextDate.getDate() - 1);
    setStartDate(nextDate.toISOString().split("T")[0]);

}

  return (
    <div className="calendar-view">
        <div>
    <button onClick={goBackward}>{"<"}</button></div>
      <CalendarTable
        startDate={startDate}
        data={data}
        addDataFunc={addData}
      /><div>
      <button onClick={goForward}>{">"}</button></div>
    </div>

  );
}

export default CalendarView;
