import React, { useState } from "react";
import axios from "axios";
import '../style/styleContact.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {TextareaAutosize, TextField, Button} from '@material-ui/core'

const Contact = props => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contact-container">
      <header className="contact-header">Need to get in touch?</header>
      <h4></h4>
      <section className="contact-box">
        <h5>Name</h5>
        <TextField
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        <h5>Email</h5>
        <TextField
          onChange={e => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
        />
        <h5>Subject</h5>
        <TextField
          onChange={e => {
            setSubject(e.target.value);
          }}
          value={subject}
        />
        <h5>Message</h5>
          <TextareaAutosize className="input-text"
          rows="5"
          cols="38"
          onChange={e => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <br />
        <Button 
          variant="outlined"
          onClick={() => {
            axios.post(`/api/contact`, { name, subject, email, message });
            toast.success("Message sent", {
              position: toast.POSITION.BOTTOM_RIGHT
            });
            setEmail("");
            setName("");
            setSubject("");
            setMessage("");
          }}
        >
          Send
        </Button>
      </section>
      <ToastContainer autoClose={2000} />
    </div>
  );
};

export default Contact;