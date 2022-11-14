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
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentTime = new Date();
  let localTime = currentTime.getTime();
  let localOffset = currentTime.getTimezoneOffset() * 60000;
  let localCityTime = new Date(
    localTime + localOffset + 1000 * props.timestamp
  );
  let dayOfWeek = days[localCityTime.getDay()];
  let hours = localCityTime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = localCityTime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let month = months[localCityTime.getMonth()];
  let dayOfMonth = localCityTime.getDate();

  return (
    <div className="FormattedDate">
      <div>
        {month} {dayOfMonth}
      </div>
      <div>
        {dayOfWeek} {hours}:{minutes}
      </div>
    </div>
  );
}
