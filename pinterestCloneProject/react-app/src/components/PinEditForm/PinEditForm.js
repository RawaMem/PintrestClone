import { useState, useEffect, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBoards, createBoard } from "../../store/boards"
import { pinDetail, deletePin } from "../../store/pins"
import "./PinEditForm.css";


function PinEditForm({ pin }) {

    const dispatch = useDispatch();
    const history = useHistory();
    const currentUser = useSelector( state => state.session?.user);
    const boardsObj = useSelector(state => state?.boards)
    const pinObj = useSelector(state => state?.pins)
    const boardsArray = Object.values(boardsObj);
    const [title, setTitle] = useState("")
    const { pinId } = useParams()


    useEffect(() => {
        dispatch(getAllBoards())
        dispatch(pinDetail(pinId))
    }, [dispatch]);

    const deletePin = e => {
        e.preventDefault();
        dispatch(deletePin(e.target.value));
        history.push("/profile")
    }


    // create new board, unfinished
    // const createNewBoardSubmit = e => {
    //     e.preventDefault();

    // }

    //handle EditPinForm submit

    return (
        <>
            <div className="edit-pinform-container">
                <form className="edit-pinform">
                    <div className="container1">
                        <h1 className="edit-pinform-title">
                            Edit this Pin
                        </h1>
                    </div>
                    <div className="form-body-container">
                        <label>
                            Board
                            <select
                                value={title}
                                onChange={e => setTitle(e.target.value)}
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
                        <label>
                            Section
                            <select
                            value="section"
                            >
                                <option selected value="1">No section</option>
                            </select>
                        </label>
                        <label>
                            Note to self
                            <textarea value="notes" />
                        </label>
                    </div>
                    <div className="pin-image-container">
                        <img className="pin-image" src={pinObj?.pin?.media_url} alt={pinObj?.pin?.description} />
                    </div>
                    <div className="delete-button-container">
                        <button value={ pin.id } className="delete-button" onClick={deletePin}>
                            Delete
                        </button>
                    </div>
                    <div className="cancel-button-container">
                        <button
                         onClick={() =>{
                            let modal = document.getElementById('modal-background')
                            modal.click()
                          }}
                         className="cancel-edit-button">
                            Cancel
                        </button>
                    </div>
                    <div className="save-button-container">
                        <button className="save-edit-button">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default PinEditForm;
