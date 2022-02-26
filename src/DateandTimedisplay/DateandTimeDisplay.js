import "./DateandTimedisplay.css";

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
const today = new Date();
const dateno = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();
const date = dateno + " " + month + " " + year;
console.log(date);
const hours = today.getHours();
var minutes = today.getMinutes();
minutes = minutes <= 0 ? "0" + minutes : minutes;
const timeFormat = hours >= 12 ? "PM" : "AM";
const time = (hours % 12) + ":" + minutes + " " + timeFormat;
console.log(time);

export function DateandTimeDisplay() {
  return (
    <p className="dateandtime">
      {date},{time}
    </p>
  );
}
