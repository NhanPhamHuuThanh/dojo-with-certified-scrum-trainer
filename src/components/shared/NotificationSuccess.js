import React from "react";

export default function NotificationSuccess({ message }) {
  return (
    <div className="alert alert-success" role="alert">
      <strong>{message}</strong>
    </div>
  );
}
