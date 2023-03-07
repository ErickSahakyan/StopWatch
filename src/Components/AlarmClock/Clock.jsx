import { useEffect, useState } from "react";

export default function Clock({ timer }) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const date = new Date();
    setHours(date.getHours() || 12);
    setMinutes(date.getMinutes());
  }, [timer]);

  return (
    <div style={{ marginTop: "100px" }}>
      <div>
        <span style={{ fontSize: "20px", color: "white" }}>CURRENT TIME</span>
      </div>
      <div style={{ marginTop: "25px" }}>
        <span
          style={{
            color: "white",
            fontSize: "38px",
          }}
        >
          {hours < 10 ? "0" + hours : hours}:
        </span>

        <span style={{ color: "white", fontSize: "38px" }}>
          {minutes < 10 ? "0" + minutes : minutes}
        </span>
      </div>
    </div>
  );
}
