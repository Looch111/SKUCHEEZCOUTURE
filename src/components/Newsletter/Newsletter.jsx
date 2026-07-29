"use client";

import { useState } from "react";
import styles from "./Newsletter.module.css";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  }

  if (submitted) {
    return (
      <div className={styles.successMessage}>
        You are on the list. We will be in touch.
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputGroup}>
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.input}
          aria-label="Email address for newsletter"
        />
        <button type="submit" className={styles.submitBtn}>
          Join
        </button>
      </div>
    </form>
  );
}