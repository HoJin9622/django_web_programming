import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addLead } from "../actions/leads";

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const lead = {
      name,
      email,
      message,
    };

    dispatch(addLead(lead));
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <h2>Add Lead</h2>

      <form onSubmit={onSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <label>Emaill</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <label>Message</label>
        <input
          type="text"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.currentTarget.value)}
        />
        <button type="submit" onClick={onSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
