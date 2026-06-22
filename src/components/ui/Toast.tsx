// components/Toast.tsx
import { toast, ToastOptions } from "react-toastify";

const baseStyle: ToastOptions = {
  position: "top-right",
  autoClose: 3000,
  style: {
    background: "#eaac35",
    color: "#1a1a1a",
    fontWeight: "500",
    borderRadius: "8px",
  },
  className: 'custom-toast'
};

export const Toast = {
  success: (message: string) =>
    toast.success(`📧 ${message} 😊`, {
      ...baseStyle,
      icon: false,
      //   icon: <span>🚀</span>
    }),

  error: (message: string) =>
    toast.error(`❌ ${message}`, {
      ...baseStyle,
      icon: false,
      //   icon: <span>⚠️</span>
    }),
};
