import { useState, useEffect, useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBoards, createBoard } from "../../store/boards"
import { pinDetail, deletePin } from "../../store/pins"
import "./PinEditForm.css";


function PinEditForm() {

    const dispatch = useDispatch();
    const history = useHistory();
    const boardsObj = useSelector(state => state.boards)
    const pinObj = useSelector(state => state.pins)
    const [title, setTitle] = useState("")
    const { pinId } = useParams()


    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch]);


    useEffect(() => {
        dispatch(pinDetail(pinId))
    }, [dispatch])


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
                        
                            </select>
                        </label>
                    </div>

                </form>
            </div>
        </>
    )
}
