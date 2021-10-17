import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import Following from './index'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function FollowingModal( {currentProfileId} ) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const profileUser = useSelector(state => {
        return state.session?.profileOfUser
    })

    return (
        <>
            <div>
                <Link
                className='edit-pin-form'
                onClick={() => setShowModal(true)}
                >
                    {profileUser?.followers.length} Following
                </Link>
            </div>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <Following currentProfileId={currentProfileId}/>
                </Modal>
            )}
        </>
    )
}

export default FollowingModal;
