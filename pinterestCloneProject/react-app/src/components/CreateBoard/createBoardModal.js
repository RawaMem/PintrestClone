import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { CreateBoard } from './index';


function CreateBoardModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='create-board-form'
            onClick={() => setShowModal(true)}
            >
                Create Board
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateBoard />
            </Modal>
          )}
        </>
    )
}
