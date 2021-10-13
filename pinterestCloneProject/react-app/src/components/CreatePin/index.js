import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addPin } from '../../store/pins';


const CreatePinForm = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session.user);
    const [title, setTitle] = useState("")
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("")

    const reset = () => {
        setImageUrl("")
        setTitle("")
        setDescription("")
    }

    const handleSubmit = async(e) => {
        e.preventDefault();

        let createdPin = {
            user_id:currentUser?.id,
            title,
            media_url:imageUrl,
            description
        };

        const newPin = await dispatch(addPin(createdPin));

        if(newPin) {
            return history.push(`/pins/${newPin.id}`);
        }
        reset()
    };

    return (
        <>
            <section className="addpin-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="button-container">
                        <button type="submit">Save</button>
                    </div>
                    <div className="image-container">
                        <input
                        type="text"
                        placeholder="Drag and drop or click to upload"
                        value={imageUrl}
                        required
                        onChange={e => setImageUrl(e.target.value)} />
                    </div>
                    <div className="input-container">
                        <input
                          type="text"
                          placeholder="Add your title"
                          required
                          value={title}
                          onChange={e => setTitle(e.target.value) }
                        / >

                        <div className="user-name-container">
                            <p>{currentUser?.username}</p>
                        </div>
                        <div className="description-container">
                            <input
                              type="text"
                              placeholder="Tell everyone what your Pin is about"
                              required
                              value={description}
                              onChange={e => setDescription(e.target.value) }
                              / >
                        </div>
                    </div>
                </form>
            </section>
        </>
    )

}

export default CreatePinForm;
