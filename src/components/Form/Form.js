import React, { useState, useContext } from "react";
import Button from '../Button';
import RadioInput from '../RadioInput';
import { ToastContext } from "../ToastProvider";
import styles from './Form.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function Form() {
  const [message, setMessage] = useState('');
  const [variant, setVariant] = useState('notice');
  const { createToast } = useContext(ToastContext);
  const submitForm = (e) => {
    e.preventDefault();
    if (message === '') return;
    createToast(message, variant);
    setMessage('')
    setVariant('notice')
  };
  return (
    <form onSubmit={submitForm}>
      <div className={styles.row}>
        <label
          htmlFor="message"
          className={styles.label}
          style={{ alignSelf: 'baseline' }}
        >
          Message
        </label>
        <div className={styles.inputWrapper}>
          <textarea id="message" className={styles.messageInput} value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>Variant</div>
        {VARIANT_OPTIONS.map((v, index) => (
          <div key={index} className={`${styles.inputWrapper} ${styles.radioWrapper}`} >
            <RadioInput value={v} setVariant={setVariant} />
          </div>
        ))}
      </div>

      <div className={styles.row}>
        <div className={styles.label} />
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          <Button type="submit">Pop Toast!</Button>
        </div>
      </div>
    </form>
  );
}

export default Form;
