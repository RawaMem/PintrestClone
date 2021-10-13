import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PinEditForm from './PinEditForm';

function EditPinModal() {
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
              <PinEditForm />
            </Modal>
          )}
        </>
    )

}

export default EditPinModal
