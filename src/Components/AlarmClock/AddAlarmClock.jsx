import { Button } from "@mui/material";
import Input from "@mui/joy/Input";

import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import Calendar from "./Calendar";

const AddAlarmClock = ({
  handleSavePress,
  handleCancelPress,
  handleButtonPress,
  buttonVal,
  currentTime,
  inputValue,
  setInputValue,
  showCalendar,
  setShowCalendar,
}) => {
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
    <div
      style={{
        dispaly: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <Clock timer={currentTime} />
      </div>
      <div
        style={{
          backgroundColor: "#484848",
          borderRadius: "30px 30px 30px",
          marginTop: "40px",
          width: "50%",
          margin: "0 auto",
        }}
      >
        {showCalendar ? (
          <Calendar
            showCalendar={showCalendar}
            setShowCalendar={setShowCalendar}
            weekday={weekday}
          />
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "250px",
              }}
            >
              <p style={{ color: "white" }}>
                Сегодня -{" "}
                {new Intl.DateTimeFormat("ru-RU", options).format(currentTime)}
              </p>
              <Button onClick={() => setShowCalendar(true)}>
                <BsFillCalendarWeekFill
                  style={{ color: "white", marginLeft: "25px" }}
                />
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {weekday.map((week, i) => (
                <Button
                  key={i}
                  onClick={handleButtonPress}
                  style={{
                    color: week.day === "Вс" ? "red" : "white",
                    borderRadius: "100px 100px 100px",
                  }}
                >
                  {week.day}
                </Button>
              ))}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                variant="plain"
                size="sm"
                color="neutral"
                placeholder="Имя сигнала"
                style={{
                  background: "none",
                  marginLeft: "15px",
                  width: "93%"
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Button
                onClick={handleCancelPress}
                variant="text"
                size="small"
                style={{ color: "white" }}
              >
                Отмена
              </Button>
              <Button
                onClick={handleSavePress}
                variant="text"
                size="small"
                style={{ color: "white" }}
              >
                Сохранить
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddAlarmClock;
