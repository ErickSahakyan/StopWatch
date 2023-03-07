import { useCallback, useState } from "react";

const useAlarmClock = () => {
  const [plusValue, setPlusValue] = useState(false);
  const [buttonVal, setButtonVal] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [showCalendar, setShowCalendar] = useState(false);
  const [alarmData, setAlarmData] = useState([])

  useCallback(() => {
    setCurrentTime(new Date());
  }, [currentTime]);

  const handleButtonPress = () => {
    setButtonVal(true);
  };
  const handleSavePress = () => {
    setAlarmData([
      ...alarmData,
      
    ])
    setPlusValue(false);
  };
  const handleCancelPress = () => {
    setPlusValue(false);
  };
  const handlePLusPress = () => {
    setPlusValue(true);
  };

  return {
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
  };
};

export default useAlarmClock;
