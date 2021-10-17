import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreatePinForm from '.';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function CreatePinModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-pin-form'
            onClick={() => setShowModal(true)}
            >
                <AddCircleOutlineIcon />
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreatePinForm />
            </Modal>
          )}
        </>
    )
}

export default CreatePinModal
