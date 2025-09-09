import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = ({ language, isDarkMode }) => {
  const texts = {
    en: {
      title: "Contact Us",
      intro: "Feel free to contact me by submitting the form below. I will get back to you as soon as possible.",
      nameLabel: "Name:",
      namePlaceholder: "Enter your Name",
      emailLabel: "Email:",
      emailPlaceholder: "Enter your Email",
      messageLabel: "Message:",
      messagePlaceholder: "Enter your Message",
      submit: "Submit",
      thankYou: "Thanks for your message! Your email client will open shortly.",
    },
    es: {
      title: "Contáctanos",
      intro: "No dudes en contactarme enviando el formulario a continuación. Me pondré en contacto contigo lo antes posible.",
      nameLabel: "Nombre:",
      namePlaceholder: "Ingresa tu Nombre",
      emailLabel: "Correo electrónico:",
      emailPlaceholder: "Ingresa tu Correo electrónico",
      messageLabel: "Mensaje:",
      messagePlaceholder: "Ingresa tu Mensaje",
      submit: "Enviar",
      thankYou: "¡Gracias por tu mensaje! Tu cliente de correo se abrirá en breve.",
    },
  };

  const t = texts[language];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "Portfolio Contact Form";
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;

    window.location.href = `mailto:acosta.angel1988@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className={`contact ${isDarkMode ? "dark" : ""}`}>
      <h1 id="contactUs">{t.title}</h1>
      <p>{t.intro}</p>
      {submitted && <p className="thankYouMessage">{t.thankYou}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">{t.nameLabel}</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder={t.namePlaceholder}
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">{t.emailLabel}</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder={t.emailPlaceholder}
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">{t.messageLabel}</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder={t.messagePlaceholder}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <input type="submit" value={t.submit} />
      </form>
    </section>
  );
};

export default ContactForm;