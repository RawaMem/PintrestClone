import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditBoard from './index';
import CreateIcon from '@mui/icons-material/Create';

function EditBoardModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-pin-form'
            onClick={() => setShowModal(true)}
            >
                <CreateIcon style={{ color: "#111111"}}/>
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditBoard />
            </Modal>
          )}
        </>
    )
}

export default EditBoardModal
