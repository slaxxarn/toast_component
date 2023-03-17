import { useEffect } from 'react';

function useEscapeKey(toasts, dismissToasts) {
  useEffect(() => {
    function handleEscapeKey(event) {
      if (event.key === 'Escape' && toasts.length > 0) {
        dismissToasts();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [toasts, dismissToasts]);
}

export default useEscapeKey;