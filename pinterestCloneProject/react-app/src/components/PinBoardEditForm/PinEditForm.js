import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBoards, createBoard, addPinToBoard, removeOnePinFromBoard } from "../../store/boards"
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
    const [boardId, setBoardId] = useState();
    const [newBoard, setNewBoard] = useState("");
    const [description, setDescription] = useState("");


    const handleAddNewBoard = async(e) => {
        e.preventDefault();

        const payload = {
            user_id: currentUser.id,
            title: newBoard,
            description,
            private: null
        };


        let createdBoard = await dispatch(createBoard(payload))
    };


    useEffect(() => {
        dispatch(getAllBoards())
        dispatch(pinDetail(pinId))
    }, [dispatch]);


    const handleDelete = e => {
        // e.preventDefault();
        dispatch(deletePin(e.target.value));
        history.push("/profile")
    }


    const handleAddPinToBoard = async(e) => {
        e.preventDefault();
        const payload = {
            boardId,
            pinId: pin.id
        };
        let modal = document.getElementById('modal-background')
        modal.click()
        dispatch(addPinToBoard(payload))
    };


    const handleRemovePinFromBoard = async(e) => {
        e.preventDefault();
        const payload = {
            boardId,
            pinId: pin.id
        };
        dispatch(removeOnePinFromBoard(payload))
    };

    return (
        <>
            <div className="edit-pinform-container">
                <form className="edit-pinform">
                    <div className="container1">
                        <h1 className="edit-pinform-title">
                            Edit this Pin
                        </h1>
                    </div>
                    <div className="main-container">

                        <div className="container">
                            <div className="form-contents-container">
                                <label className="form-contents">
                                    Board
                                    <select
                                        value={title}
                                        onChange={e => {
                                            setTitle(e.target.value)
                                            setBoardId(e.target.value)
                                        }}
                                    >
                                        {boardsArray?.map(board => {
                                            return (
                                                +board?.user_id === +currentUser?.id? (
                                                    <>
                                                        <option value={board.id} onChange={e => setBoardId(board.id)}>{board.title}</option>
                                                    </>
                                                ) : false
                                            )
                                        })}
                                    </select>
                                </label>

                                <h5>Create new Board</h5>
                                    <div className="new-board-form">
                                        <input
                                        type="text"
                                        placeholder="Add your new Board title"
                                        value={newBoard}
                                        onChange={e => setNewBoard(e.target.value)}
                                        />
                                        <textarea
                                        type="text"
                                        placeholder="Tell everyone what your Board is about"
                                        value={description}
                                        onChange={e => setDescription(e.target.value)}
                                        />
                                    </div>
                                    <div className="create-new-board-button">
                                        <button onClick={handleAddNewBoard}>Create new Board</button>
                                    </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="pin-image-container">
                                <img className="pin-image" src={pin?.media_url} alt={pin?.description} />
                            </div>
                        </div>
                    </div>
                    <div className="delete-button-container">
                        <button value={ pin.id } className="delete-button" onClick={handleDelete}>
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
                        <button className="save-edit-button" onClick={handleAddPinToBoard}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    )

}

export default PinEditForm;
