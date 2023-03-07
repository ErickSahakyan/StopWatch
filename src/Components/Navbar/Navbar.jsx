import React from "react";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
      }}
    >
      <a style={{ color: "white", textDecoration: "none" }} href="/AlarmClock">
        Alarm Clock
      </a>
      <a style={{ color: "white", textDecoration: "none" }} href="/StopWatch">
        Stop Watch
      </a>
    </div>
  );
};

export default Navbar;
