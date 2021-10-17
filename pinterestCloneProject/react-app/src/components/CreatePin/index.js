import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addPin } from '../../store/pins';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import PinterestIcon from '@material-ui/icons/Pinterest'
import './createPinForm.css';


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
                <div className="modal_form_logo">
                    <div className="logo-name-container">
                        <div className="icon-container">
                            <PinterestIcon style={{ fontSize: 40 }}/>
                        </div>
                        <div className="create-pin-container">
                            <h3 className="title">Create a Pin</h3>
                        </div>
                    </div>
                    <div className="user-name-container">
                        <div className="name-initial-container">
                            <p className="name-initial">{currentUser?.username[0]}</p>
                        </div>
                        <div className="name">
                            <p>{currentUser?.username}</p>
                        </div>
                    </div>
                </div>
                <form className="pin-form-container" onSubmit={handleSubmit}>
                    <div className="image-outer">
                        <div className="image-container">
                            <input
                            type="text"
                            placeholder="Drag and drop or click to upload"
                            value={imageUrl}
                            required
                            onChange={e => setImageUrl(e.target.value)} />
                            <FileUploadRoundedIcon />
                        </div>
                    </div>

                    <div className="input-container">
                        <input
                        type="text"
                        placeholder="Add your title"
                        required
                        value={title}
                        onChange={e => setTitle(e.target.value) }
                        / >
                        <div className="description-container">
                            <input
                            type="text"
                            placeholder="Tell everyone what your Pin is about"
                            required
                            value={description}
                            onChange={e => setDescription(e.target.value) }
                            / >
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

export default CreatePinForm;
