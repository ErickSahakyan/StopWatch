import { Button } from "@mui/material";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useAlarmClock from "../../Hooks/useAlarmClock";
import AddAlarmClock from "./AddAlarmClock";

const AlarmClock = () => {
  return (
    <div>
      {plusValue ? (
        <AddAlarmClock />
      ) : (
        <div>
          <p>Будильник</p>
          <div>
            <button>
              <AiOutlinePlus />
            </button>
          </div>
          <div>
            <p>Нет будильников</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlarmClock;
