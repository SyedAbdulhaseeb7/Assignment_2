// components/Modal.js
import { useEffect } from "react";

const Modal = ({ onClose, children }) => {
  // Prevent scrolling when the modal is open
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Close modal on Escape key press
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="custom-overlay-bg">
    {/* Modal Content with Glassmorphism */}
    <div className="custom-modal-box">
      {/* Close Button (if needed) */}
    
      {/* Modal Inner Content */}
      <div className="custom-modal-inner">
        {children}
      </div>
    </div>
  </div>
  
  );
};

export default Modal;
