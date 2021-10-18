import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { deleteOneBoard, editBoardDetails } from '../../store/boards';



export const EditBoard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session.user);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const {boardId}= useParams()

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            id: boardId,
            user_id: currentUser.id,
            title,
            description,
            private: null
        };

        let editedBoard = await dispatch(editBoardDetails(payload))
        if (editedBoard) {
          history.push(`/boards/${editedBoard?.id}`);
        }
      };

      const deleteBoard = e => {
        e.preventDefault();
        dispatch(deleteOneBoard(boardId));
        history.push(`/profile/${currentUser?.id}`)
    }

      return (
          <>
            <section className="addboard-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                          type="text"
                          placeholder="Change your Board title"
                          required
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                        />

                        <div className="user-name-container">
                            <p>{currentUser?.username}</p>
                        </div>
                        <div className="description-container">
                            <input
                              type="text"
                              placeholder="Change what your Board is about"
                              required
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                              />
                        </div>
                    </div>
                    <div className="button-container">
                        <button type="submit">Save Edit</button>
                        <button className="board-delete-btn" onClick={deleteBoard}>Delete Board</button>
                    </div>
                </form>
            </section>


          </>
      )


}
