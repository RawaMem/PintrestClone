import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pinDetail } from '../../store/pins';
import { thunkGetAllComments, thunkDeleteComment, thunkAddComments } from '../../store/comments';


const PinDetail = () => {

    const dispatch = useDispatch()
    const  pins = useSelector(state => state.pins)
    const comments = useSelector(state => state.comments)
    const sessionUser = useSelector(state => state.session.user)
    const [commentContent, setCommentContent] = useState('')
    const { pinId } = useParams()

    const reset = () => {
        setCommentContent("")
    }

    const handleDelete = (id) => {
        dispatch(thunkDeleteComment(id))
      }

    const postComment = async(e) => {
    e.preventDefault()
    let newComment = {
        'user_id': sessionUser?.id,
        'pin_id': pinId ,
        'content': commentContent,
        'notified': 'false'
    };
    let newComment = await dispatch(thunkAddComments(newComment))

    if(newComment) {
        reset()
    }
    };

    useEffect(() => {
        dispatch(pinDetail(pinId))
        // dispatch(thunkGetAllComments())
    }, [dispatch])

    useEffect(() => {
        dispatch(thunkGetAllComments())
    }, [dispatch])
    //// const commentsSection = allComments.filter(item => item.pin_id == pins?.pin.id)

    // const commentsSection = pins && pins.pin && allComments?allComments.filter(item => item.pin_id == pins?.pin.id):allComments

    const commentsSection = Object.values(comments)
    const pinComments = commentsSection.filter(comment => comment.pin_id === pins?.pin?.id)
    // .map(comment => (
    //     {comment.user_id === sessionUser.id? && (
    //     <div key={comment.id} className='single-comment'>
    //       <div>{comment.user.username}</div>
    //       <div>{comment.id}</div>
    //       <button className='delete-Button' onClick={() => handleDelete(comment.id)}>Delete Me</button>
    //       <div>{comment.content}</div>
    //     </div>
    //     )}))

    return (
        <>
            <h1>PinDetail</h1>
            <div className="image-container">
                <img className="pin-detail-image" src={pins?.pin?.media_url} alt={pins?.pin?.description} />
            </div>
            <div className="title-container">
                <h3>{pins?.pin?.title}</h3>
            </div>
            <div className="description-container">
                <p>{pins?.pin?.description}</p>
            // </div>
            <form onSubmit={postComment}>
            <div>
            <label>Comment</label>
            <textArea 
                style={{ 'minHeight': '100px' }} value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)} />
              <button className="submit-form" style={{ 'marginTop': '20px', 'height': '40px' }}>Add Comment</button>
              <div className="App">
                {pinComments.map(comment => {
                    return(
                <div key={comment.id} className='single-comment'>
                <div>{comment.user.username}</div>
                <div>{comment.id}</div>
                <button className='delete-Button' onClick={() => handleDelete(comment.id)}>Delete Me</button>
                <div>{comment.content}</div>
                </div>
                )})}
              </div>
            </div>
            </form>

        </>
    )
}


export default PinDetail
