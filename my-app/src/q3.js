import React, { useState } from 'react';
import Modal from './Modal'; // 모달 컴포넌트 임포트

const Q3 = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <div>
            <h1>문제 3#</h1>
            <button onClick={openModal}>모달 열기</button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>모달 제목</h2>
                <p>여기에 모달 내용이 들어갑니다. 스크롤이 가능합니다.</p>
            </Modal>
        </div>
    );
};

export default Q3;