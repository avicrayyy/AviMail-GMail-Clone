import React from "react";
import { Checkbox, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./styles.css";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";

const EmailRow = ({ id, title, subject, description, time }) => {
  const history = useHistory();

  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <div
        onClick={() => history.push("/mail")}
        className="emailRow__clickable"
      >
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
