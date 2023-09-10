import { useEffect, useState } from "react";
import { getAllPrayers, postPrayer } from "../../api";
import CalendarTable from "./Calendar";

const formatPrayers = (prayers) => {
  const formattedPrayers = {}
  for (const prayer of prayers) {
    const date = prayer.date.split('T')[0]
    formattedPrayers[date] = {...formattedPrayers[date], [prayer.prayer]: "Yes"}
  }
  return formattedPrayers
}

function CalendarView() {
  const [data, setData] = useState({})

  useEffect( () => {
    fetchPrayers()
  }, [])

  const fetchPrayers = () => {
    getAllPrayers().then((prayers) => {
      console.log(prayers.data.prayers)
      setData(formatPrayers(prayers.data.prayers))
    })
  }

  const [startDate, setStartDate] = useState("2023-09-10")

  const addData = (date, prayer) => {
    postPrayer(prayer, date, "Marina")
    fetchPrayers()
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
