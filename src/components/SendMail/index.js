import React from "react";
import firebase from "firebase";
import { db } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@material-ui/core";

import "./styles.css";

// Icons
import { Close } from "@material-ui/icons";

// Reducers
import { closeSendMessage } from "../../features/mail/mailSlice";

const SendMail = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (formData, user) => {
    console.log(formData);

    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMessage());
  };
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
            type="email"
            placeholder="To"
            required="required"
            {...register("to", { required: true })}
          />
          <input
            type="text"
            placeholder="Subject"
            required="required"
            {...register("subject", { required: true })}
          />
          <input
            type="text"
            placeholder="Message..."
            className="sendMail__message"
            required="required"
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
