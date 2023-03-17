import React from "react";
import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback((message, variant = "notice") => {
    setToasts([...toasts, { message, variant, visible: true }]);
  }, [toasts, setToasts]);

  const dismissToast = React.useCallback((index) => {
    const newToasts = [...toasts];
    newToasts[index].visible = false;
    setToasts(newToasts);
  }, [toasts, setToasts]);

  const dismissAllToasts = React.useCallback(() => {
    const newToasts = [...toasts];
    newToasts.forEach((t) => (t.visible = false));
    setToasts(newToasts);
  }, [toasts, setToasts]);

  useEscapeKey(toasts, dismissAllToasts)

  return (
    <ToastContext.Provider value={{ toasts, createToast, dismissToast, dismissAllToasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
