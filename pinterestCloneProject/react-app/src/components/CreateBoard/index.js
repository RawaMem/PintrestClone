import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBoard } from '../../store/boards';


export const CreateBoard = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session.user);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            user_id: currentUser.id,
            title,
            description,
            private: null
        };
        console.log('=======>', payload)

        let createdBoard = await dispatch(createBoard(payload))
        if (createdBoard) {
            console.log('======>', createdBoard)
          history.push(`/boards/${createdBoard?.id}`);
        }
      };

      return (
          <>
            <section className="addboard-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="button-container">
                        <button type="submit">Save</button>
                    </div>
                    <div className="input-container">
                        <input
                          type="text"
                          placeholder="Add your Board title"
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
                              placeholder="Tell everyone what your Board is about"
                              required
                              value={description}
                              onChange={e => setDescription(e.target.value)}
                              />
                        </div>
                    </div>
                </form>
            </section>


          </>
      )


}
