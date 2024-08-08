import React, { useState } from 'react';
import Modal from './Modal'; // 모달 컴포넌트 임포트

const Q3 = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [closeOnBackgroundClick, setCloseOnBackgroundClick] = useState(true); 

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h1>문제 3#</h1>
            <p>설정에 따라 배경 클릭시 닫기 혹은 안닫기</p>
            <p>키보드 esc 클릭시 닫기</p>
            <p>닫기성공 버튼 추가</p>
            <p>애니메이션 생략</p>
            <p>scroll 관리</p>
            
            <label>
                <input 
                    type="checkbox" 
                    checked={closeOnBackgroundClick} 
                    onChange={() => setCloseOnBackgroundClick(!closeOnBackgroundClick)}
                />
                배경 클릭 시 팝업 닫기
            </label>
            <p></p>
            <button onClick={openModal}>팝업 열기</button>
            <h2>소스코드</h2>
            <pre><code className="language-javascript">
{`
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
`}
            </code></pre>
            
            <Modal isOpen={isModalOpen} onClose={closeModal} closeOnBackgroundClick={closeOnBackgroundClick}>
                <h2>모달 제목</h2>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <p>여기에 팝업 내용이 들어갑니다. 스크롤이 가능합니다.</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                    <button onClick={closeModal}>Close</button>
                    <button onClick={() => {}}>Save Changes</button>
                </div>
            </Modal>
            
        </div>
        
    );
};

export default Q3;