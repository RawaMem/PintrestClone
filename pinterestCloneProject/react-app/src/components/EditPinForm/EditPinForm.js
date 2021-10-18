import inputBaseClasses from "@mui/core/InputUnstyled/inputUnstyledClasses";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBoards } from "../../store/boards"
import { deletePin, editPin } from "../../store/pins"
import "./editPinForm.css";
import PinterestIcon from '@material-ui/icons/Pinterest'


function EditPinForm({pin}) {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session?.user);
    const boardsObj = useSelector(state => state?.boards)
    const boardsArray = Object.values(boardsObj);

    const [title, setTitle] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [description, setDescription] = useState("");
    const [media_url, setMedia_url] = useState("")

    useEffect(() => {
        if(pin) {
            setTitle(pin?.title);
            setDescription(pin?.description);
            setMedia_url(pin?.media_url);
        }
    }, [pin])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            id: pin?.id,
            user_id: currentUser?.id,
            title,
            media_url,
            description
        };

        let editedPin = dispatch(editPin(payload))

        return history.push(`/profile/${currentUser?.id}`);

    }

    const handleDelete = e => {
        // e.preventDefault();
        dispatch(deletePin(e.target.value));
        history.push(`/profile/${currentUser?.id}`)
    }

    return (
        <>
            <div className="edit-user-pin-container">
                <form className="edit-user-pin-form" onSubmit={handleSubmit}>
                    <section className="title-section">
                        <div className="title-container">
                            <p><PinterestIcon style={{ fontSize: 40 }}/></p>
                            <h1 className="title">Edit this Pin</h1>
                        </div>
                    </section>

                    <section className="content-section">
                        <div className="left-part-container">
                            {/* <div className="form-content">
                                <label className="users-board">
                                    Board
                                    <select
                                        value={boardTitle}
                                        onChange={e => setBoardTitle(e.target.value)}
                                    >
                                        {boardsArray?.map(board => {
                                            return (
                                                +board?.user_id === +currentUser?.id? (
                                                    <>
                                                        <option value={board.id}>{board.title}</option>
                                                    </>
                                                ) : false
                                            )
                                        })}
                                    </select>
                                </label>
                            </div> */}

                            <div className="form-content">
                                <label className="pin-title">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="form-content">
                                <label className="pin-description">
                                    Description
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={description}
                                    className="textarea"
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="form-content">
                                <label className="pin-img_url">
                                    Website
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={media_url}
                                    className="textarea"
                                    onChange={e => setMedia_url(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="right-side">
                            <div className="pin-image-container">
                                <img className="pin-image" src={pin?.media_url} alt={pin?.description} />
                            </div>
                        </div>

                    </section>

                    <section className="button-section">
                        <div className="button-container">
                            <div className="delete-button-container">
                                <button value={ pin?.id } className="button-grey" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>

                            <div className="cancel-save-button-container">
                                <button
                                    onClick={() =>{
                                        let modal = document.getElementById('modal-background')
                                        modal.click()
                                    }}
                                    className="button-grey">
                                        Cancel
                                </button>
                                <button className="save-button" type="submit">
                                    Save
                                </button>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </>
    )

}

export default EditPinForm;
