import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PinEditForm from './PinEditForm';

function PinEditFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <button onClick={() => setShowModal(true)}>Edit Pin</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <PinEditForm />
          </Modal>
        )}
      </>
    );
}

export default PinEditFormModal
