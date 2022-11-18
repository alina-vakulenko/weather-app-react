import React from "react";

export default function FormattedDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let timeOfUpdate = new Date(props.timestamp * 1000);
  let dayOfWeek = days[timeOfUpdate.getDay()];
  let hours = timeOfUpdate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = timeOfUpdate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[timeOfUpdate.getMonth()];
  let dayOfMonth = timeOfUpdate.getDate();

  return (
    <div className="FormattedDate">
      <i className="fa-regular fa-clock"></i> Updated on: {dayOfWeek}, {month}{" "}
      {dayOfMonth}, {hours}:{minutes}
    </div>
  );
}
