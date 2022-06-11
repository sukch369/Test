const todayDiv = document.getElementById("today");
const timeDiv = document.getElementById("time");

function getTime() {
  let now = new Date();
  let year = now.getFullYear(); //년
  let month = now.getMonth() + 1; //월 1-12
  let day = now.getDate(); //일 1-31
  let dayNumber = now.getDay(); //요일 1-7
  const dayList = ["월", "화", "수", "목", "금", "토", "일"];
  let hour = now.getHours(); //시 0-23
  let minute = now.getMinutes(); //분 0-59
  let second = now.getSeconds(); //초 0-59
  let noon = "AM";

  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }

  if (hour == 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour - 12;
    noon = "PM";
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  todayDiv.textContent =
    year + "-" + month + "-" + day + " " + dayList[dayNumber - 1];
  timeDiv.textContent = noon + " " + hour + ":" + minute + ":" + second;
}
getTime();
setInterval(getTime, 1000);

/*
function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }

  return number;
}

*/
