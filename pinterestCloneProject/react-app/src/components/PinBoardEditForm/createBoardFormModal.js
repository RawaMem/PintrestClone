import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { CreateBoardForm } from './createBoardForm';


function CreateBoardFormModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='create-board-form'
            onClick={() => setShowModal(true)}
            >
                Create New Board
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateBoardForm />
            </Modal>
          )}
        </>
    )
}

export default CreateBoardFormModal
