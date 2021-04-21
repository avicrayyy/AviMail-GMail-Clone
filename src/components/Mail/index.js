import React from "react";
import { Avatar, IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import "./styles.css";

// Icons
import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@material-ui/icons";

const Mail = () => {
  const history = useHistory();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton onClick={() => history.push("/")}>
            <ArrowBack />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail__toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__thread">
        <div className="mail__threadTitle">
          <LabelImportant style={{ fill: "#757575" }} />
          <h3>Hello Zawarudo</h3>
        </div>
        <div className="mail__threadRecipient">
          <Avatar />
          <div className="mail__threadRecipientDetails">
            <h3>Sent By</h3>
            <div className="mail__threadRecipientDetailsSentOn">
              April 21, 2021 10:00 PM
            </div>
          </div>
        </div>
        <div className="mail__threadBody">this is where mail should be</div>
      </div>
    </div>
  );
};

export default Mail;
