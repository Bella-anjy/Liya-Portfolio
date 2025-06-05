import styles from "./contact.module.css";
import { Input } from "../../components";
import {
  FaRegEnvelope,
  FaPhoneAlt,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";
import Toast from "../../components/toast/Toast"; // Correct default import

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setToast({ message: "Please fill out all fields.", type: "error" });
      return;
    }

    if (!/^[\w-.]+@(gmail|yahoo)\.com$/.test(email)) {
      setToast({
        message: "Please use a valid Gmail or Yahoo email address.",
        type: "error",
      });
      return;
    }

    setToast({
      message: "Message sent! I’ll get back to you shortly.",
      type: "success",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className={styles.contactContainer} id="contact">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className={styles.contactHead}>
        <h2 className={styles.contactTitle}>Get In Touch</h2>
        <p>Have a question or want to work together? Send me a message!</p>
      </div>

      <section className={styles.contactContent}>
        <section className={styles.leftContactContent}>
          <h2 className={styles.leftTitle}>Contact Information</h2>
          <div className={styles.contactContain}>
            <FaRegEnvelope className={styles.icon} />
            <div className={styles.content}>
              <h2>Email</h2>
              <p>aliyaholubiyo2008@gmail.com</p>
            </div>
          </div>
          <div className={styles.contactContain}>
            <FaPhoneAlt className={styles.icon} />
            <div className={styles.content}>
              <h2>Phone</h2>
              <p>+234 8126386524</p>
            </div>
          </div>
          <div className={styles.contactContain}>
            <FaLocationDot className={styles.icon} />
            <div className={styles.content}>
              <h2>Location</h2>
              <p>Lagos state, Nigeria</p>
            </div>
          </div>
        </section>

        <section className={styles.rightContactContent}>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputWrapper1}>
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className={styles.input}
                label="First Name:"
              />

              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className={styles.input}
                label="Your Email:"
              />

              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={styles.inpute}
                label="Subject:"
              />

              <Input
                type="text"
                name="message"
                // placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className={styles.message}
                label="Message:"
              />
            </div>
            <button type="submit" className={styles.contactBtn}>
              Send Message
            </button>
          </form>
        </section>
      </section>

      <section className={styles.secondContactContent}>
        <section className={styles.firstContact}>
          <div className={styles.contactHeader}>
            <h2>Aliyah Olubiyo</h2>
            <h4>Full Stack Developer</h4>
          </div>
        </section>
        <section className={styles.secondContact}>
          <div className={styles.iconSocial}>
            <a
              className={styles.iconO}
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/aaliyyyyyyah01"
            >
              <FaXTwitter />
            </a>
            <a
              className={styles.iconO}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/labake-olubiyo/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className={styles.iconO}
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/harleeyah.0/"
            >
              <FaInstagram />
            </a>
            <a
              className={styles.iconO}
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Bella-anjy"
            >
              <FaGithub />
            </a>
            <a href="#home">
              <FaArrowUp className={styles.arrowUp} />
            </a>
          </div>
        </section>
      </section>

      <hr className={styles.contactLine} />
    </section>
  );
};

export default Contact;
