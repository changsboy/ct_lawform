import React, {useEffect} from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children, closeOnBackgroundClick }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const handleBackgroundClick = (event) => {
        if (closeOnBackgroundClick && event.target === event.currentTarget) {
            onClose();
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;