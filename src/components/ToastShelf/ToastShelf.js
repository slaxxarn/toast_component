import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, dismissToast } = React.useContext(ToastContext);

  if (toasts.filter((t) => t.visible).length === 0) return null;
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast, index) => {
        if (!toast.visible) return null
        return (
          <li key={index} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              dismissToast={() => dismissToast(index)}
            >
              {toast.message}
            </Toast>
          </li>
        )
      })}
    </ol>
  );
}

export default React.memo(ToastShelf);
