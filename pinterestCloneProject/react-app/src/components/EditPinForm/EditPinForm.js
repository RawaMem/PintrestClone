import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getAllBoards } from "../../store/boards"
import { deletePin } from "../../store/pins"
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

}
