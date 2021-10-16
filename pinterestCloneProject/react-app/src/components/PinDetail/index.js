import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import { pinDetail } from '../../store/pins';
import { thunkGetAllComments, thunkDeleteComment, thunkAddComments, thunkEditCommentDetails } from '../../store/comments';
import EditUserPinModal from '../EditPinForm';
import EditPinModal from '../PinBoardEditForm';
import { getAllBoards, addPinToBoard } from '../../store/boards';




const PinDetail = () => {

    const dispatch = useDispatch()
    const history = useHistory();
    const pins = useSelector(state => state.pins)
    const comments = useSelector(state => state.comments)
    const sessionUser = useSelector(state => state.session.user)
    const boardsObj = useSelector(state => state?.boards)
    const boardsArray = Object.values(boardsObj);
    const [commentContent, setCommentContent] = useState('')
    const [commentId, setCommentId] = useState(0)
    const { pinId } = useParams()

    useEffect(() => {
        dispatch(getAllBoards())
    }, [dispatch]);

    const allPinBoard = boardsArray.filter(board => (sessionUser?.id === board?.user_id && board?.title == "All Pins"))
    const allPinBoardId = allPinBoard[0]
    // console.log("====================> allPinBoard @@@@@@", allPinBoard)


    const handleAddPinToBoard = async(e) => {
        e.preventDefault();
        const payload = {
            boardId:allPinBoardId?.id,
            pinId
        };
        console.log('======@@@@@@@@=====allPinBoardId>', allPinBoardId?.id)
        console.log('======@@@@@@@@=====pinId>', pinId)
        dispatch(addPinToBoard(payload))
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(thunkDeleteComment(e.target.value))
    }

    const postComment = async(e) => {
    e.preventDefault()

    let newComment = {
        'user_id': sessionUser?.id,
        'pin_id': pinId ,
        'content': commentContent,
        'notified': 'false'
    };


    let createdComment =await dispatch(thunkAddComments(newComment))

};

    const updateContent = (e) =>
        {setCommentContent(e.target.value)
        // setCommentId(parseInt(e.target.name))
        //update pin comment list
        let comment = pinComments.filter(item => item.id.toString() === e.target.name);
        comment[0].content = e.target.value
    };

    const updateComment = async (e) => {
        e.preventDefault();
        let updatedContent = {
        id: e.target.value,
        content: commentContent,
        };
        // console.log("%%%%%",updatedContent)
        // console.log("------",pinId)
        dispatch(thunkEditCommentDetails(updatedContent))
        // dispatch(thunkGetAllComments());
    }

    useEffect(() => {
        dispatch(pinDetail(pinId))
        // dispatch(thunkGetAllComments())
    }, [dispatch, pinId])

    useEffect(() => {
        dispatch(thunkGetAllComments())
    }, [dispatch])


    const commentsSection = Object.values(comments)
    const pinComments = commentsSection.filter(comment => comment.pin_id === pins?.pin?.id)
    // console.log("PIN",pinComments)

    return (
        <>
            <div className="image-container">
                <img className="pin-detail-image" src={pins?.pin?.media_url} alt={pins?.pin?.description} />
                <div className="edit-pin-button-container">
                    {sessionUser?.id === pins?.pin?.user_id ?
                        <EditUserPinModal pin={pins?.pin} />:
                        <EditPinModal pin={pins.pin} />
                    }

                </div>
                <div className="add-pin-to-container-container">
                    {sessionUser?.id !== pins?.pin?.user_id ?
                    <button className="save-button" onClick={handleAddPinToBoard}>
                        Save
                    </button> : false
                    }
                </div>
            </div>
            <div className="title-container">
                <h3>{pins?.pin?.title}</h3>
            </div>
            <div className="description-container">
                <p>{pins?.pin?.description}</p>
             </div>
            <form >
            <div>
            <label>Comment</label>
            <textArea
                style={{ 'minHeight': '100px' }}
                placeholder="Add a comment"
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)} />
              <button onClick={postComment} className="submit-comment-button" type="submit" style={{ 'marginTop': '20px', 'height': '40px' }}>Done</button>
              <div className="app">
                {pinComments.map(comment => {
                    return(
                <div key={comment.id} className='single-comment'>
                <div>{comment.user.username}</div>
                <div>{comment.content}</div>
                <input name={comment.id}
                    type="text"
                    placeholder="type now"
                    value={comment.content}
                    onChange={updateContent}
                    required/>
                <button value={comment.id} className='delete-Button' onClick={handleDelete}>Delete</button> <button value={comment.id} onClick={updateComment} >Edit</button>
                </div>
                )})}

              </div>
            </div>
            </form>
        </>
    )
}
 // .map(comment => (
    //     {comment.user_id === sessionUser.id? && (
    //     <div key={comment.id} className='single-comment'>
    //       <div>{comment.user.username}</div>
    //       <div>{comment.id}</div>
    //       <button className='delete-Button' onClick={() => handleDelete(comment.id)}>Delete Me</button>
    //       <div>{comment.content}</div>
    //     </div>
    //     )}))


export default PinDetail
