import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createBoard } from '../../store/boards';
import PinterestIcon from '@material-ui/icons/Pinterest'


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


        let createdBoard = await dispatch(createBoard(payload))
        if (createdBoard) {
          history.push(`/boards/${createdBoard?.id}`);
        }
    };

      return (
          <>
            <section className="addboard-form-container">
                    <section className="title-section">
                        <div className="title-container">
                            <p><PinterestIcon style={{ fontSize: 40 }}/></p>
                            <h1 className="title">Create a New Board</h1>
                        </div>
                    </section>
                <form onSubmit={handleSubmit}>
                    {/* <div className="owner-display">
                        <div className="user-name-container">
                            <p>{currentUser?.username}</p>
                        </div>
                    </div> */}
                    <div className="create-board-container">
                    <div className="input-container">
                        <input
                          type="text"
                          placeholder="Add your Board title"
                          required
                          value={title}
                          onChange={e => setTitle(e.target.value)}
                        />



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
                        <div className="button-container">
                            <button type="submit">Save</button>
                         </div>
                    </div>
                </form>
            </section>


          </>
      )


}

export default CreateBoard
