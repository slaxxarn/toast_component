import React from 'react';

import Form from '../Form/Form';
import ToastProvider from '../ToastProvider/ToastProvider';
import ToastShelf from '../ToastShelf'

import styles from './ToastPlayground.module.css';


function ToastPlayground() {
  return (
    <ToastProvider>
      <div className={styles.wrapper}>
        <header>
          <img alt="Cute toast mascot" src="/toast.png" />
          <h1>Toast Playground</h1>
        </header>

        <ToastShelf />

        <div className={styles.controlsWrapper}>
          <Form />
        </div>
      </div>
    </ToastProvider>
  );
}

export default ToastPlayground;
