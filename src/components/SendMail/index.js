import React from "react";
import { Button } from "@material-ui/core";
import "./styles.css";

// Icons
import { Close } from "@material-ui/icons";

const SendMail = () => {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <span>New Message</span>
        <Close className="sendMail__headerClose" />
      </div>
      <form>
        <input type="text" placeholder="To" />
        <input type="text" placeholder="Subject" />
        <input type="text" placeholder="Message..." />
        <div className="sendMail__options">
          <Button
            className="sendMail__button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
