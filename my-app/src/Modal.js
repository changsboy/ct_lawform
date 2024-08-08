import React, {useEffect} from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
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
        if (event.target === event.currentTarget) {
            onClose();
        }
    };
    
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <button className="close-button" onClick={onClose}>X</button>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;