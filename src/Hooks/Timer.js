import moment from "moment";
import { useRef, useState } from "react";

export default function useTimer() {
  const [timerCount, setTimerCount] = useState(0);
  const lapTimeCountRef = useRef(0);

  const [booleanValue, setBooleanValue] = useState(true);
  const [diffMsVal, setDiffMsVal] = useState([]);

  const [boolean, setBoolean] = useState(true);
  const [bool, setBool] = useState(true);

  const [boolVal, setBoolVal] = useState(true);
  const [timerValue, setTimerValue] = useState([]);

  const [lapTimeValue, setLapTimeValue] = useState([timer()]);
  const [timerCountVal, setTimerCountVal] = useState(1);

  const [lapTimeBool, setLapTimeBool] = useState(false);
  const [val, setVal] = useState(false);

  const saveTimerCountRef = useRef(null);
  const saveLapTimeCountRef = useRef(null);

  const [maxElement, setMaxElement] = useState();
  const [minElement, setMinElement] = useState();

  const lapTime = () => {
    lapTimeCountRef.current += 5;

    return timerCount !== 3.6e6
      ? (saveLapTimeCountRef.current = setTimeout(() => {
          lapTime();
        }))
      : null;
  };

  const lapTimer = () => {
    let milliseconds = Math.floor((lapTimeCountRef.current % 1000) / 10);
    let seconds = Math.floor((lapTimeCountRef.current / 1000) % 60);
    let minutes = Math.floor((lapTimeCountRef.current / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const lapTimerFunc = async () => {
    let arr = [];
    let maxEl = 0;
    let minEl = 0;

    timerValue.map((val, index) => {
      let element = val.lapTime.lapTimeCount;

      const [min, sec, ms] = element.split(":").concat("0");

      const currentElement = (min * 60 + +sec) * 1000 + +ms;

      arr.push(currentElement);
    });

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[maxEl]) {
        maxEl = i;
        await setMaxElement(arr[i]);
      }
      if (arr[i] < arr[minEl]) {
        minEl = i;
        await setMinElement(arr[i]);
      }
    }
  };

  const maxLapTimer = () => {
    let milliseconds = Math.floor((maxElement % 1000) / 10);
    let seconds = Math.floor((maxElement / 1000) % 60);
    let minutes = Math.floor((maxElement / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${minutes}:${seconds}.${milliseconds}`;
  };

  const minLapTimer = () => {
    let milliseconds = Math.floor((minElement % 1000) / 10);
    let seconds = Math.floor((minElement / 1000) % 60);
    let minutes = Math.floor((minElement / (1000 * 60)) % 60);

    milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    minutes = minutes < 10 ? "0" + minutes : minutes;

    return `${minutes}:${seconds}.${milliseconds}`;
  };

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
    clearTimeout(saveLapTimeCountRef.current);

    setBoolean(false);
    setBoolVal(false);
  };

  const handleReset = () => {
    setDiffMsVal([]);
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

  const getLapTime = (timerCount) => {
    if (lapTimeValue.length === 1) {
      return moment(timerCount).format("mm:ss.SS");
    }

    let lastElement = String(lapTimeValue[lapTimeValue.length - 1]);

    const [min1, sec1, ms1] = lastElement.split(":").concat("0");

    const lastEl = (min1 * 60 + +sec1) * 1000 + +ms1;

    const diffMs = timerCount - lastEl;

    setDiffMsVal([...diffMsVal, diffMs]);

    if (isNaN(diffMs)) {
      return moment(timerCount).format("mm:ss.SS");
    } else {
      return moment(diffMs).format("mm:ss.SS");
    }
  };

  const handleInterval = async () => {
    if (lapTimeCountRef.current === 0) {
      lapTime();
    }
    setTimerCountVal((timerCountVal) => timerCountVal + 1);
    setLapTimeBool(true);

    setLapTimeValue([...lapTimeValue, timer()]);
    lapTimerFunc();
    lapTimeCountRef.current = 0;

    await setTimerValue([
      ...timerValue,
      {
        lapTime: {
          ...timerValue,
          id: Date.now(),
          lapTimeCount: getLapTime(timerCount),
        },
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
    maxLapTimer,
    minLapTimer,
    lapTimer,
  };
}
