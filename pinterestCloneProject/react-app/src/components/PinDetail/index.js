
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useParams,useHistory } from 'react-router-dom';
import { pinDetail } from '../../store/pins';
import { thunkGetAllComments, thunkDeleteComment, thunkAddComments, thunkEditCommentDetails } from '../../store/comments';
import EditUserPinModal from '../EditPinForm';
import EditPinModal from '../PinBoardEditForm';
import { getAllBoards, addPinToBoard } from '../../store/boards';
import "./PinDetail.css"
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';


const PinDetail = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const pins = useSelector((state) => state.pins);
  const comments = useSelector((state) => state.comments);
  const sessionUser = useSelector((state) => state.session.user);
  const boardsObj = useSelector((state) => state?.boards);
  const boardsArray = Object.values(boardsObj);
  const [commentContent, setCommentContent] = useState("");
  const [commentId, setCommentId] = useState(0);
  const { pinId } = useParams();

  useEffect(() => {
    dispatch(getAllBoards());
  }, [dispatch]);

  const user = useSelector((state) => {
    return state.session?.user;
  });

  const allPinBoard = boardsArray.filter(
    (board) => sessionUser?.id === board?.user_id && board?.title == "All Pins"
  );
  const allPinBoardId = allPinBoard[0];
  // console.log("====================> allPinBoard @@@@@@", allPinBoard)

  const handleAddPinToBoard = async (e) => {
    e.preventDefault();
    const payload = {
      boardId: allPinBoardId?.id,
      pinId,
    };
    dispatch(addPinToBoard(payload));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(thunkDeleteComment(e.target.value));
  };

  const postComment = async (e) => {
    e.preventDefault();

    let newComment = {
      user_id: sessionUser?.id,
      pin_id: pinId,
      content: commentContent,
      notified: "false",
    };

    let createdComment = await dispatch(thunkAddComments(newComment));
  };

  const updateContent = (e) => {
    setCommentContent(e.target.value);
    // setCommentId(parseInt(e.target.name))
    //update pin comment list
    let comment = pinComments.filter(
      (item) => item.id.toString() === e.target.name
    );
    // comment[0].content = e.target.value;
  };

  const updateComment = async (e) => {
    console.log("this runs");
    e.preventDefault();
    let updatedContent = {
      id: e.target.value,
      // 'pin_id': pinId,
      content: commentContent,
    };

    console.log("this is running", updatedContent);
    // console.log("------",pinId)
    dispatch(thunkEditCommentDetails(updatedContent));
    // dispatch(thunkGetAllComments());
  };

  useEffect(() => {
    dispatch(pinDetail(pinId));
    // dispatch(thunkGetAllComments())
  }, [dispatch, pinId]);

  useEffect(() => {
    dispatch(thunkGetAllComments());
  }, [dispatch]);

  const commentsSection = Object.values(comments);
  const pinComments = commentsSection.filter(
    (comment) => comment.pin_id === pins?.pin?.id
  );
  // console.log("PIN",pinComments)

  // const [showMenuComment, setShowMenuComments] = useState(false);
  // const openMenuComment = () => {
  //   if (showMenuComment) return;
  //   setShowMenuComments(true);
  // };
  // useEffect(() => {
  //   if (!showMenuComment) return;
  //   const closeMenuComment = () => {
  //     setShowMenuComments(false);
  //   };
  //   document.addEventListener("click", closeMenuComment);
  //   return () => document.removeEventListener("click", closeMenuComment);
  // }, [showMenuComment]);

  return (
    <>
      <div className="pin_background">
        <div className="pin_wrapper">
          <div className="pin_modal">
            <div className="image-container">
              <div className="pin_pic">
                <img
                  className="pin-detail-image"
                  src={pins?.pin?.media_url}
                  alt={pins?.pin?.description}
                />
              </div>
            </div>
            <div id="pin_right_side">
              <div className="edit-pin-button-container">
                {sessionUser?.id === pins?.pin?.user_id ? (
                  <EditUserPinModal pin={pins?.pin} />
                ) : (
                  <EditPinModal pin={pins.pin} />
                )}
                <div className="add-pin-to-container-container">
                  {sessionUser?.id !== pins?.pin?.user_id ? (
                    <button
                      className="save-button"
                      onClick={handleAddPinToBoard}
                    >
                      Save
                    </button>
                  ) : (
                    false
                  )}
                </div>
              </div>
              <div className="title_container">
                <h3>{pins?.pin?.title}</h3>
              </div>
              <div className="description_container">
                <p>{pins?.pin?.description}</p>
              </div>
              <form>
                <div>
                    <div className="pin_comment_phrase">
                        Share feedback, ask a question or give a high five
                    </div>
                  <textArea
                    className="pin_comment"
                    style={{ minHeight: "50px" }}
                    placeholder="Add a comment"
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                  />
                  <button
                    onClick={postComment}
                    className="submit_comment_button"
                    type="submit"
                    style={{ marginTop: "10px", height: "30px" }}
                  >
                    Add comment
                  </button>
                  <div className="app">
                    {pinComments.map((comment) => {
                      return (
                        <div key={comment.id} className="single-comment">
                        <div className="comment">
                          <div className="comment_username">{comment.user.username}</div>
                          <div>{comment.content}</div>
                          </div>
                          {user?.id === comment?.user_id && (
                              <>
                              {/* <div className="follower-list-container">
                                <button className="followers" onClick={openMenuComment}>Edit</button>
                                {showMenuComment && (
                                <> */}
                                    {/* <div className="pin_comment_phrase">
                                    Share feedback, ask a question or give a high five
                                    </div> */}
                                    <div className="pin_comment_avatar">
                                        <img className="pin-avatar" src='https://spng.pngfind.com/pngs/s/538-5384052_harry-potter-harry-potter-cartoon-characters-hd-png.png' alt="user" />
                                    <div className="popup-follower-row">
                                    <input className="comment_input"
                                        name={comment.id}
                                        type="text"
                                        placeholder="edit your comment"
                                        // value={comment.content}
                                        onChange={updateContent}
                                        required
                                    />
                                    </div>
                                    </div>
                                    <button
                                        value={comment.id}
                                        className="delete-Button"
                                        onClick={handleDelete}
                                        >
                                        Delete
                                    </button>{" "}
                                    <button className="edit-button"
                                        value={comment.id}
                                        onClick={updateComment}
                                        >
                                        Edit
                                    </button>
                                  {/* </>
                                )}
                            </div> */}
                            </>
                          )}
                    </div>
                      );
                    })}
                  </div>
                </div>
                </form>
                </div>
          </div>
          </div>
          </div>
          </>
  );
};
// .map(comment => (
    //     {comment.user_id === sessionUser.id? && (
        //     <div key={comment.id} className='single-comment'>
        //       <div>{comment.user.username}</div>
//       <div>{comment.id}</div>
//       <button className='delete-Button' onClick={() => handleDelete(comment.id)}>Delete Me</button>
//       <div>{comment.content}</div>
//     </div>
//     )}))

export default PinDetail;
