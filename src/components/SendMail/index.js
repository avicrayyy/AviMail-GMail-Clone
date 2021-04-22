import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

import "./styles.css";

// Icons
import { Close } from "@material-ui/icons";
import { closeSendMessage } from "../../features/mail/mailSlice";

const SendMail = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const dispatch = useDispatch();
  return (
    <>
      <div className="sendMail">
        <div className="sendMail__header">
          <span>New Message</span>
          <Close
            onClick={() => dispatch(closeSendMessage())}
            className="sendMail__headerClose"
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="To"
            {...register("to", { required: true })}
          />
          <input
            type="text"
            placeholder="Subject"
            {...register("subject", { required: true })}
          />
          <input
            type="text"
            placeholder="Message..."
            className="sendMail__message"
            {...register("message", { required: true })}
          />
          <div className="sendMail__options">
            <Button
              className="sendMail__button"
              variant="contained"
              color="primary"
              type="submit"
            >
              Send
            </Button>
            <div className="errors">
              {errors.to && (
                <span className="sendMail__errorMessage">To is required. </span>
              )}
              {errors.subject && (
                <span className="sendMail__errorMessage">
                  Subject is required.{" "}
                </span>
              )}
              {errors.message && (
                <span className="sendMail__errorMessage">
                  Message is required.{" "}
                </span>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SendMail;
