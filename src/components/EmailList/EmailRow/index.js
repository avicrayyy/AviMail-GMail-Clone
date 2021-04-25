import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { db } from "../../../firebase";
import "./styles.css";

import {
  LabelImportant,
  LabelImportantOutlined,
  Star,
  StarBorderOutlined,
} from "@material-ui/icons";

import { selectMail } from "../../../features/mail/mailSlice";

const EmailRow = ({
  id,
  title,
  subject,
  description,
  time,
  starred,
  important,
}) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,
        starred,
        important,
      })
    );
    history.push("/mail");
  };

  const toggleStar = ({ id }) => {
    if (starred === true) {
      db.collection("emails").doc(id).update({
        starred: false,
      });
    } else {
      db.collection("emails").doc(id).update({
        starred: true,
      });
    }
  };

  const toggleImportant = ({ id }) => {
    if (important === true) {
      db.collection("emails").doc(id).update({
        important: false,
      });
    } else {
      db.collection("emails").doc(id).update({
        important: true,
      });
    }
  };

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton onClick={() => toggleStar({ id })}>
          {starred ? (
            <Star style={{ fill: "#e4c13a" }} />
          ) : (
            <StarBorderOutlined />
          )}
        </IconButton>
        <IconButton onClick={() => toggleImportant({ id })}>
          {important ? (
            <LabelImportantOutlined style={{ fill: "#e4c13a" }} />
          ) : (
            <LabelImportantOutlined />
          )}
        </IconButton>
      </div>
      <div onClick={() => openMail()} className="emailRow__clickable">
        <h4 className="emailRow__title">{title}</h4>
        <div className="emailRow__message">
          <h4>
            {subject}{" "}
            <span className="emailRow__description">- {description}</span>
          </h4>
        </div>
        <div className="emailRow__time">{time}</div>
      </div>
    </div>
  );
};

export default EmailRow;
