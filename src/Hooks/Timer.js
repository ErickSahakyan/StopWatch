import moment from "moment";
import { useCallback, useEffect, useRef, useState } from "react";

export default function useTimer() {
  const [timerCount, setTimerCount] = useState(0);

  const [booleanValue, setBooleanValue] = useState(true);
  const [boolean, setBoolean] = useState(true);

  const [bool, setBool] = useState(true);
  const [boolVal, setBoolVal] = useState(true);

  const [timerValue, setTimerValue] = useState([]);
  const [lapTimeValue, setLapTimeValue] = useState([timer()]);
  const [timerCountVal, setTimerCountVal] = useState(1);

  const [lapTimeBool, setLapTimeBool] = useState(false);
  const [val, setVal] = useState(false);

  const saveTimerCountRef = useRef(null);

  function timer() {
    let milliseconds = Math.floor((timerCount % 1000) / 10);
    let seconds = Math.floor((timerCount / 1000) % 60);
    let minutes = Math.floor((timerCount / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${minutes}:${seconds}.${milliseconds}`;
  }

  const handleStart = () => {
    setTimerCount((timerCount) => timerCount + 5);
    setBooleanValue(false);
    setBoolean(true);
    setBool(false);

    return timerCount !== 3.6e6
      ? (saveTimerCountRef.current = setTimeout(() => {
          handleStart();
        }))
      : null;
  };

  const handleStop = () => {
    clearTimeout(saveTimerCountRef.current);

    setBoolean(false);
    setBoolVal(false);
  };

  const handleReset = () => {
    setLapTimeValue([]);
    setTimerCount(0);
    setLapTimeBool(false);
    setBooleanValue(true);
    setBoolVal(true);
    setBool(true);
    setTimerValue([]);
    setVal(false);
    setTimerCountVal(1);
  };

  const getLapTime = (timerCount, lapTimeValue) => {
    if (lapTimeValue.length === 1) {
      return moment(timerCount).format("mm:ss.SS");
    }
    let lastElement = String(lapTimeValue[lapTimeValue.length - 1]);
    let prevElement = String(lapTimeValue[lapTimeValue.length - 2]);
    console.log(lastElement, prevElement);
    const [min1, sec1, ms1] = lastElement.split(":").concat("0");

    const lastEl = (min1 * 60 + +sec1) * 1000 + +ms1;

    const diffMs = timerCount - lastEl;

    if (isNaN(diffMs)) {
      return moment(timerCount).format("mm:ss.SS");
    } else {
      return moment(diffMs).format("mm:ss.SS");
    }
  };

  const handleInterval = async () => {
    setTimerCountVal((timerCountVal) => timerCountVal + 1);
    setLapTimeBool(true);

    setLapTimeValue([...lapTimeValue, timer()]);

    await setTimerValue([
      ...timerValue,
      {
        lapTime: getLapTime(timerCount, lapTimeValue),
        circle: timerCountVal,
        totalTime: timer(),
      },
    ]);
    setVal(true);
  };

  const handleContinue = () => {
    handleStart();
    setBoolVal(true);
  };

  return {
    timer,
    booleanValue,
    handleStart,
    handleStop,
    handleReset,
    handleInterval,
    boolean,
    bool,
    boolVal,
    handleContinue,
    timerValue,
    val,
    lapTimeBool,
  };
}
