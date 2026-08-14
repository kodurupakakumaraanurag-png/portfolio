import React from 'react';
import { Sparkles, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  if (!message) return null;

  return (
    <div className="toast-banner glass-card">
      <Sparkles size={18} className="text-cyan animate-pulse" />
      <span className="toast-message">{message}</span>
      <button onClick={onClose} className="toast-close-btn">
        <X size={14} />
      </button>
    </div>
  );
};
