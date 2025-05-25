// src/utils/api.js

import axios from "axios";

export const sendScheduledEmail = async (emailData, triggerData) => {
  try {
    const payload = {
      to: emailData.email,
      subject: "Your Subject Here",
      body: emailData.message,
      sendAt: triggerData.time,
    };

    const res = await axios.post("http://https://kairo-zuto.onrender.com/api/send-email", payload);
    return res.data;
  } catch (err) {
    throw err;
  }
};
