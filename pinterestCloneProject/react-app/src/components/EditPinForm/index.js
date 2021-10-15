import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditPinForm from './EditPinForm';

function EditUserPinModal({ pin }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-pin-form'
            onClick={() => setShowModal(true)}
            >
                Edit Pin
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditPinForm pin={pin}/>
            </Modal>
          )}
        </>
    )
}

export default EditUserPinModal
