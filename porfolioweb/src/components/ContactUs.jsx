import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

const ContactUs = () => {
  const form = useRef(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Send message to YOU
      await emailjs.sendForm(
        "service_avr426h",        // Your Service ID
        "template_a502dtu",       // Template that sends to YOU
        form.current,
        "oDESeVguQPUxZNLHi"        // Your Public Key
      );

      // 2️⃣ Prepare auto-reply data
      const formData = new FormData(form.current);

      const autoReplyParams = {
        user_name: formData.get("user_name"),
        user_email: formData.get("user_email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      };

      // 3️⃣ Send auto-reply to USER
      await emailjs.send(
        "service_avr426h",
        "template_wfyn0si",   // Your Auto-Reply Template ID
        autoReplyParams,
        "oDESeVguQPUxZNLHi"
      );

      alert("Message sent successfully! Auto-reply sent.");
      form.current.reset();

    } catch (error) {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-form-container">

      <form ref={form} onSubmit={sendEmail} className="contact-form">

        <label>Name:</label>
        <input
          type="text"
          name="user_name"
          required
          placeholder="Your Name"
        />

        <label>Email:</label>
        <input
          type="email"
          name="user_email"
          required
          placeholder="Your Email"
        />

        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          required
          placeholder="Your Subject"
        />

        <label>Message:</label>
        <textarea
          name="message"
          required
          placeholder="Write your message here..."
        />

        <button type="submit">Send Message</button>

      </form>
    </div>
  );
};

export default ContactUs;

