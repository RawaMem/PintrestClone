import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { pinDetail } from '../../store/pins';
import { thunkGetAllComments, thunkDeleteComment, thunkAddComments } from '../../store/comments';


const PinDetail = () => {

    const dispatch = useDispatch()
    const  pins = useSelector(state => state.pins)
    const comments = useSelector(state => state.comments)
    const [commentContent, setCommentContent] = useState('')
    const { pinId } = useParams()

    // const handleDelete = (id) => {
    //     dispatch(thunkDeleteComment(id))
    //   }

    const postComment = async(e) => {
    e.preventDefault()
    let comment = {
        'user_name': '',
        'body': commentContent,
    };
    const newComment = await dispatch(thunkAddComments(comment))
    }

    useEffect(() => {
        dispatch(pinDetail(pinId))
        // dispatch(thunkGetAllComments())
    }, [dispatch])

    // useEffect(() => {
    //     dispatch(thunkGetAllComments())
    // }, [dispatch])
    // console.log("------------",pins?.pin?.comment.user.username)
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
            {/* </div> */}
            {/* <div className= "pin-comment">
                <p>{pins.pin.comment.map(comment=>(
                    <div key={comment.id} className="single-comment">
                    <div>{comment.user.userName}</div>
                    <div>{comment.content}</div> */}
                    {/* <button className='delete-Button' onClick={() => handleDelete(comment.id)}>Delete Me</button> */}

                    {/* </div> */}
                {/* ))}</p> */}
            // </div>
        </>
    )
}


export default PinDetail
