import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PinEditForm from './PinEditForm';
import CreateIcon from '@mui/icons-material/Create';

function EditPinModal({ pin }) {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-pin-form'
            onClick={() => setShowModal(true)}
            >
              <CreateIcon style={{ color: "#111111"}} fontSize="small" />
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <PinEditForm pin={pin}/>
            </Modal>
          )}
        </>
    )

}

export default EditPinModal
