import { useRef, useState } from "react";

export default function useTimer() {
  const [timerCount, setTimerCount] = useState(0);

  const [booleanValue, setBooleanValue] = useState(true);
  const [boolean, setBoolean] = useState(true);

  const [bool, setBool] = useState(true);
  const [boolVal, setBoolVal] = useState(true);

  const [timerValue, setTimerValue] = useState([]);
  const [timerCountVal, setTimerCountVal] = useState(1);

  const [lapTimeBool, setLapTimeBool] = useState(false);
  const [val, setVal] = useState(false);

  const saveTimerCountRef = useRef(null);
  const saveLapTimeRef = useRef(null);

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
    clearTimeout(saveLapTimeRef.current);

    setBoolean(false);
    setBoolVal(false);
  };

  const handleReset = () => {
    setTimerCount(0)
    setLapTimeBool(false);
    setBooleanValue(true);
    setBoolVal(true);
    setBool(true);
    setTimerValue([]);
    setVal(false);
    setTimerCountVal(1);
  };


  const handleInterval = () => {
    setTimerCountVal((timerCountVal) => timerCountVal + 1);
    setLapTimeBool(true);

    setTimerValue([
      ...timerValue,
      {
        lapTime: timer(),
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
    timerCountVal,
    val,
    lapTimeBool,
  };
}
