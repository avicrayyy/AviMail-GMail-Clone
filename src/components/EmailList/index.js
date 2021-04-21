import React from "react";
import "./styles.css";

// Icons
import { Checkbox, IconButton } from "@material-ui/core";
import {
  Settings,
  ArrowDropDown,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  MoreVert,
  Redo,
  Inbox,
  People,
  LocalOffer,
} from "@material-ui/icons";

// Sub-component
import Section from "../Section";
import EmailRow from "./EmailRow";

const EmailList = () => {
  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Socials" color="#1a73eb" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__rows">
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test email"
          time="10:00 PM"
        />
        <EmailRow
          title="Twitch"
          subject="Hey fellow streamer!!!"
          description="This is a test email"
          time="10:00 PM"
        />
      </div>
    </div>
  );
};

export default EmailList;
