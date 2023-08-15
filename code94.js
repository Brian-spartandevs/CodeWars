/* What time is it?
Given a time in AM/PM format as a string, convert it to 24-hour military time time as a string.

Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock

Try not to use built-in Date/Time libraries.

Examples
"07:05:45PM"  -->  "19:05:45"
"12:00:01AM"  -->  "00:00:01"
"11:46:47PM"  -->  "23:46:47" */

const getMilitaryTime = (time) => {
  let hours = parseInt(time.substring(0, 2));
  let minutes = time.substring(3, 5);
  let seconds = time.substring(6, 8);
  let period = time.substring(8);

  if (period === "AM" && hours === 12) {
    hours = 0;
  } else if (period === "PM" && hours !== 12) {
    hours += 12;
  }

  return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds}`;
};

console.log(getMilitaryTime("07:05:45PM"));
console.log(getMilitaryTime("12:00:01AM"));
console.log(getMilitaryTime("11:46:47PM"));
