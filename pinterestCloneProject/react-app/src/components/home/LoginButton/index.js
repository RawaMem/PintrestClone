import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './login_form';

function LoginModal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
        <div>
            <button
            className='edit-pin-form'
            onClick={() => setShowModal(true)}
            >
                Login
            </button>
        </div>
         {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <LoginForm />
            </Modal>
          )}
        </>
    )
}

export default LoginModal