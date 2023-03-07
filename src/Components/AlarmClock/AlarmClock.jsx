import { Button } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useAlarmClock from "../../Hooks/useAlarmClock";
import AddAlarmClock from "./AddAlarmClock";

const AlarmClock = () => {
  const {
    plusValue,
    handlePLusPress,
    handleSavePress,
    handleCancelPress,
    handleButtonPress,
    buttonVal,
    currentTime,
    inputValue,
    setInputValue,
    showCalendar,
    setShowCalendar,
  } = useAlarmClock();

  return (
    <div>
      {plusValue ? (
        <AddAlarmClock
          showCalendar={showCalendar}
          setShowCalendar={setShowCalendar}
          inputValue={inputValue}
          setInputValue={setInputValue}
          currentTime={currentTime}
          handleSavePress={handleSavePress}
          handleCancelPress={handleCancelPress}
          handleButtonPress={handleButtonPress}
          buttonVal={buttonVal}
        />
      ) : (
        <div
          style={{
            dispaly: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ fontSize: "32px", color: "white", marginTop: "150px" }}>
            Будильник
          </p>
          <div>
            <button
              onClick={handlePLusPress}
              style={{
                backgroundColor: "black",
                outline: "none",
                border: "none",
              }}
            >
              <AiOutlinePlus
                style={{
                  color: "white",
                  fontSize: "32px",
                  marginLeft: "400px",
                  marginTop: "80px",
                }}
              />
            </button>
          </div>
          <div style={{ marginTop: "180px" }}>
            <p style={{ color: "white", color: "#484848" }}>Нет будильников</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmClock;
