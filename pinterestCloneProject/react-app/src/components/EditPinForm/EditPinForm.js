import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBoards } from "../../store/boards"
import { deletePin, editPin } from "../../store/pins"
import "./editPinForm.css";


function EditPinForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session?.user);
    const boardsObj = useSelector(state => state?.boards)
    const pinObj = useSelector(state => state?.pins)
    const boardsArray = Object.values(boardsObj);
    const pinsArray = Object.values(pinObj);

    const [title, setTitle] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [description, setDescription] = useState("");
    const [media_url, setMedia_url] = useState("")
    const { pinId } = useParams()

    useEffect(() => {
        const pinForEdit = pinsArray.pinId;
        if(pinForEdit) {
            setTitle(pinForEdit.title);
            setDescription(pinForEdit.description);
            setMedia_url(pinForEdit.media_url);
        }
    }, [pinForEdit])

    const handleSubmit = async(e) => {
        e.preventDefault();

        const payload = {
            id: pinId,
            user_id: currentUser.id,
            title,
            media_url,
            description
        };

        let editedPin = await dispatch(editPin(payload))
        if (editedPin) {
            history.push(`/pins/${editedPin?.id}`)
        }
    }

    const handleDelete = e => {
        e.preventDefault();
        dispatch(deletePin(e.target.value));
        history.push(`/home`)
    }

    return (
        <>
            <div className="edit-user-pin-container">
                <form className="edit-user-pin-form" onSubmit={handleSubmit}>
                    <section className="title-section">
                        <div className="title">
                            <h1>Edit this Pin</h1>
                        </div>
                    </section>

                    <section className="content-section">
                        <div className="left-part">
                            <div className="form-content">
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
                            </div>

                            <div className="form-content">
                                <label className="pin-title">
                                    Title
                                    <input
                                        type="text"
                                        required
                                        value={title}
                                        onChange={e => setTitle(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className="form-content">
                                <label className="pin-description">
                                    Description
                                    <textarea
                                        type="text"
                                        required
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className="form-content">
                                <label className="pin-img_url">
                                    Website
                                    <textarea
                                        type="text"
                                        required
                                        value={media_url}
                                        onChange={e => setMedia_url(e.target.value)}
                                    />
                                </label>
                            </div>

                            <div className="right-side">
                                <div className="pin-image-container">
                                    <img className="pin-image" src={pin?.media_url} alt={pin?.description} />
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="button-section">
                        <div className="button-container">
                            <div className="delete-button-container">
                                <button value={ pin.id } className="delete-button" onClick={handleDelete}>
                                    Delete
                                </button>
                            </div>

                            <div className="cancel-save-button-container">
                                <button
                                    onClick={() =>{
                                        let modal = document.getElementById('modal-background')
                                        modal.click()
                                    }}
                                    className="cancel-edit-button">
                                        Cancel
                                </button>

                                <button className="save-edit-button" type="submit">
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