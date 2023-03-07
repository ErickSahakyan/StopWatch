import { Button } from "@mui/material";
import Input from "@mui/joy/Input";

import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import Calendar from "./Calendar";

const AddAlarmClock = () => {
  const weekday = [
    { id: Date.now(), day: "Пн" },
    { id: Date.now(), day: "Вт" },
    { id: Date.now(), day: "Ср" },
    { id: Date.now(), day: "Чт" },
    { id: Date.now(), day: "Пт" },
    { id: Date.now(), day: "Сб" },
    { id: Date.now(), day: "Вс" },
  ];

  let options = { weekday: "long" };
  return (
    <div>
      <div>
        <Clock />
      </div>
      <div>
        {showCalendar ? (
          <Calendar />
        ) : (
          <div>
            <div>
              <p style={{ color: "white" }}>
                Сегодня -{" "}
                {new Intl.DateTimeFormat("ru-RU", options).format(currentTime)}
              </p>
              <Button>
                <BsFillCalendarWeekFill />
              </Button>
            </div>
            <div>
              {weekday.map((week, i) => (
                <Button>{week.day}</Button>
              ))}
            </div>
            <div>
              <Input />
            </div>
            <div>
              <Button>Отмена</Button>
              <Button>Сохранить</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAlarmClock;
