import React from "react";
import { Button } from "@material-ui/core";
import "./styles.css";

// Icons
import { Close } from "@material-ui/icons";

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">New Message</div> <Close />
      send mail here feggit
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Recipient" />
        <input type="text" placeholder="Message Body" />
        <div className="sendMail__options">
          <Button>Send</Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
