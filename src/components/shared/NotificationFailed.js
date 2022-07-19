import React from "react";

export default function NotificationFailed({ message }) {
  return (
    <div className="alert alert-danger" role="alert">
      <strong>{message}</strong>
    </div>
  );
}
