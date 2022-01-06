import React from "react";
import PropTypes from "prop-types";
import s from "./Notification.module.css";

const Notification = ({message}) => (
    <h2 className={s.notification}>{message}</h2>
)

Notification.prototype = {
    message:PropTypes.string,
}

export default Notification;