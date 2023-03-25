export const formatDate = (timestamp) => {
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
  const timeOfUpdate = new Date(timestamp * 1000);
  const dayOfWeek = days[timeOfUpdate.getDay()];

  let hours = timeOfUpdate.getHours();
  let minutes = timeOfUpdate.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  const month = months[timeOfUpdate.getMonth()];
  const dayOfMonth = timeOfUpdate.getDate();

  return { month, dayOfMonth, dayOfWeek, hours, minutes };
};
