import React from "react";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const PrayerRow = ({ dates, data, name, addDataFunc, removeDataFunc }) => {
  const capitalizedName = capitalize(name);
  const handleClick = (date, prayer, prayerObject) => {
    if (prayerObject?.isSelected) removeDataFunc(prayerObject.prayerId);
    else addDataFunc(date, prayer);
  };

  return (
    <tr>
      <td>{capitalizedName}</td>
      {dates.map((date) => (
        <td
          className={`prayer-count-${
            data[date] ? Object.keys(data[date]).length : 0
          }`}
          key={`${date}-${name}`}
          onClick={() =>
            handleClick(date, capitalizedName, data[date]?.[capitalizedName])
          }
        >
          {data[date]?.[capitalizedName]?.isSelected}
        </td>
      ))}
    </tr>
  );
};

export default PrayerRow;
