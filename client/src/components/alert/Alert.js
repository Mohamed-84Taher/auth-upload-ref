import React from "react";
import { useSelector } from "react-redux";

function Alert() {
  const alerts = useSelector(state => state.alertReducer);
  return (
    <>
      {alerts.map(alert => (
        <div
          className={`alert alert-${alert.alertType}`}
          role='alert'
          key={alert.id}
          style={{ width: "80%", margin: "50px auto" }}
        >
          {alert.msg}
        </div>
      ))}
    </>
  );
}

export default Alert;
