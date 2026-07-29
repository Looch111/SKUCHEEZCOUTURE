"use client";

import { useState } from "react";
import { X, CheckCircle, Sparkles, MapPin, Calendar, Clock } from "lucide-react";
import styles from "./BespokeModal.module.css";

export default function BespokeModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "Warri Atelier",
    occasion: "Groom / Wedding Ceremonial",
    date: "",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `Greetings SKUCHEEZ COUTURE, I would like to inquire about commissioning a signature garment from the atelier.%0A%0A*Client Name:* ${encodeURIComponent(formData.name || 'Esteemed Client')}%0A*Email:* ${encodeURIComponent(formData.email)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Preferred Atelier:* ${encodeURIComponent(formData.location)}%0A*Occasion:* ${encodeURIComponent(formData.occasion)}%0A*Target Event Date:* ${encodeURIComponent(formData.date || 'To be determined')}%0A*Notes/Preferences:* ${encodeURIComponent(formData.notes || 'None specified')}`;
    window.open(`https://wa.me/2347013144975?text=${msg}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {submitted ? (
          <div className={styles.successState}>
            <div className={styles.successIconWrap}>
              <Sparkles className={styles.goldSparkleIcon} size={36} />
            </div>
            <h3 className={styles.successTitle}>Consultation Requested</h3>
            <p className={styles.successDesc}>
              Thank you, <strong className={styles.goldText}>{formData.name || "Esteemed Client"}</strong>. 
              Our Master Concierge will reach out within 24 hours to schedule your private fitting session at the <strong className={styles.goldText}>{formData.location}</strong>.
            </p>
            <div className={styles.summaryCard}>
              <div className={styles.summaryRow}>
                <span>Occasion:</span> <strong>{formData.occasion}</strong>
              </div>
              <div className={styles.summaryRow}>
                <span>Location:</span> <strong>{formData.location}</strong>
              </div>
            </div>
            <button className={styles.confirmBtn} onClick={handleReset}>
              Return to Atelier
            </button>
          </div>
        ) : (
          <>
            <div className={styles.modalHeader}>
              <span className={styles.modalTag}>PRIVATE COMMISSION</span>
              <h2 className={styles.modalTitle}>Commission Bespoke Couture</h2>
              <p className={styles.modalSubtitle}>
                Schedule your exclusive consultation with our master artisans in Warri, Lagos, or London.
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Chief Olamide Adeleke"
                    className={styles.input}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@domain.com"
                    className={styles.input}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="phone" className={styles.label}>Phone / WhatsApp *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+234 701 314 4975"
                    className={styles.input}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="location" className={styles.label}>Preferred Atelier</label>
                  <select
                    id="location"
                    className={styles.select}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  >
                    <option value="Warri Atelier">Warri Atelier (Delta State)</option>
                    <option value="Lagos Atelier">Lagos Atelier (Victoria Island)</option>
                    <option value="London Suite">London Suite (Mayfair)</option>
                    <option value="Virtual Concierge">Virtual Concierge (Worldwide)</option>
                  </select>
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.inputGroup}>
                  <label htmlFor="occasion" className={styles.label}>Commission Occasion</label>
                  <select
                    id="occasion"
                    className={styles.select}
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  >
                    <option value="Groom / Wedding Ceremonial">Groom / Wedding Ceremonial</option>
                    <option value="Chieftaincy / Royal Title">Chieftaincy / Royal Title</option>
                    <option value="Gala / Black-Tie Owambe">Gala / Black-Tie Owambe</option>
                    <option value="Private Heritage Collection">Private Heritage Collection</option>
                  </select>
                </div>
                <div className={styles.inputGroup}>
                  <label htmlFor="date" className={styles.label}>Target Event Date</label>
                  <input
                    id="date"
                    type="date"
                    className={styles.input}
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="notes" className={styles.label}>Special Requirements or Fabric Preferences</label>
                <textarea
                  id="notes"
                  rows={2}
                  placeholder="Style requirements, embroidery motifs, or delivery timeline..."
                  className={styles.textarea}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <span>Request Private Fitting</span>
                <Sparkles size={16} />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
