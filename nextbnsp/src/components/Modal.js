import { useEffect } from 'react';

function ImageModal({ isOpen, onClose, children }) {
    
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
        document.addEventListener('keydown', handleEscape);
        } else {
        document.removeEventListener('keydown', handleEscape);
        }
        return () => {
        document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100 bg-opacity-100">
            <div className="bg-white rounded-lg p-4">
                <button onClick={onClose} className="absolute top-2 right-2">
                    Close
                </button>
                {children}
            </div>
        </div>
    );
}

export default ImageModal;