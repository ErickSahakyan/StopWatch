import { Button, ButtonBase } from "@mui/material";
import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Calendar = ({ weekday, showCalendar, setShowCalendar }) => {
  const [dateValue, setDateValue] = useState(new Date());

  const dayMonth = useRef(new Date());
  let options = {
    month: "long",
    year: "numeric",
  };

  const handleNextMonth = () => {
    if (typeof dateValue !== "number") {
      setDateValue(dateValue.setMonth(dateValue.getMonth() + 1));
    } else {
      const dateInMs = dateValue;
      const date = new Date(dateInMs);
      setDateValue(date.setMonth(date.getMonth() + 1));
    }
  };

  const handlePrevMonth = () => {
    if (typeof dateValue !== "number") {
      setDateValue(dateValue.setMonth(dateValue.getMonth() - 1));
    } else {
      const dateInMs = dateValue;
      const date = new Date(dateInMs);
      setDateValue(date.setMonth(date.getMonth() - 1));
    }
  };

  function dayInMonth() {
    const date = new Date(dateValue);
    const dayMonthArr = [];

    const prevDayMonth =
      32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();

    for (let i = 1; i <= prevDayMonth; i++) {
      dayMonthArr.push(i);
    }

    return dayMonthArr;
  }

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={handlePrevMonth}>
          <IoIosArrowBack
            style={{
              color: "white",
            }}
          />
        </Button>
        {new Intl.DateTimeFormat("ru-RU", options).format(dateValue)}
        <Button onClick={handleNextMonth}>
          <IoIosArrowForward
            style={{
              color: "white",
            }}
          />
        </Button>
      </div>
      {/* <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto auto auto auto auto",
          gap: "5px",
        }}
      >
        {weekday.map((week, i) => (
          <span
            style={{
              color: week.day === "Вс" ? "red" : "#BCBEC0",
              // border: buttonVal ? "1px solid black" : "",
              borderRadius: "100px 100px 100px",
              fontSize: "14px",
            }}
            key={i}
          >
            {week.day.toUpperCase()}
          </span>
        ))}
      </div> */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: "auto auto auto auto auto auto",
          gridTemplateColumns: "auto auto auto auto auto auto auto",
        }}
      >
        {dayInMonth().map((day, i) => (
          <Button
            
            style={{
              color: "white",
              backgroundColor: "transparent",
              outline: 0,
              border: 0,
              margin: 0,
            }}
          >
            {day}
          </Button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          onClick={() => setShowCalendar(false)}
          style={{ color: "white" }}
        >
          Отмена
        </Button>
        <span style={{ color: "#BCBEC0", marginTop: "10px" }}>|</span>
        <Button style={{ color: "white" }}>Готово</Button>
      </div>
    </div>
  );
};

export default Calendar;
