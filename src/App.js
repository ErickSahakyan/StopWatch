import "./App.css";
import useTimer from "./Hooks/Timer";

function App() {
  const {
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
  } = useTimer();

  return (
    <div className="App">
      <div className="timer">{timer()}</div>
      {/* <div className="lapTime">{lapTimeBool ? lapTime() : ""}</div> */}

      <div className="timer__value">
        {val ? (
          <div className="timer__velue-box">
            <p>Circle</p>
            <p>Lap time</p>
            <p>Total time</p>
          </div>
        ) : (
          ""
        )}
        {timerValue
          ?.map((val, i) => (
            <div key={i} className="timer__info">
              <p> {val.circle < 10 ? "0" + val.circle : val.circle}</p>
              <p>{val.lapTime}</p>
              <p style={{ color: "white" }}>{val.totalTime}</p>
            </div>
          ))
          .reverse()}
      </div>

      <div>
        {booleanValue ? (
          <button className="start" onClick={handleStart}>
            Start
          </button>
        ) : (
          <>
            {boolean ? (
              <button className="stop" onClick={handleStop}>
                Stop
              </button>
            ) : (
              <button className="continue" onClick={handleContinue}>
                Continue
              </button>
            )}
          </>
        )}
        {boolVal ? (
          <button
            className="interval"
            disabled={bool ? true : false}
            onClick={handleInterval}
          >
            Interval
          </button>
        ) : (
          <button className="reset" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
