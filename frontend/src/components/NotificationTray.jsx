import React from "react";

const NotificationTray = ({
  notificationContent,
  handleDeleteNotification,
}) => {
  return (
    <div>
      <div>{notificationContent}</div>
      <div onClick={() => handleDeleteNotification(notificationContent)}>D</div>
    </div>
  );
};

export default NotificationTray;
