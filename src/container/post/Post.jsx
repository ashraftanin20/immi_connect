import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom';
import './posts.css';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getPost } from '../../features/actions/PostAction';
import { createComment, getComments } from '../../features/actions/CommentAction';

function Post() {

    const { post, postError, postLoading } = useSelector(state => state.postsData);
    const {comments, commentsLoading, commentsError, commentsLoaded,
           commentError, commentLoading, commentLoaded} = useSelector(state => state.commentData);
    const { userInfo } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const { id } = useParams();
    const commentRef = useRef();
    
    const handleSubmit = (e) => {
      e.preventDefault();
      const payload = {
        post_id: parseInt(id),
        comment_body: commentRef.current.value,
        user_id: userInfo.user.id,
      }
      let comment = dispatch(createComment(payload));
      if(comment !== null)  {
        commentRef.current.value = "";
        dispatch(getComments({post_id: id}));
      }
    }
    useEffect(() => {
        dispatch(getPost(id));
        dispatch(getComments({post_id: id}));
    }, [dispatch, id, commentLoaded]);
    
  return (
    <div className="immi__section section__margin">
        <div>
          <div className="immi__section-heading">
            <h1 className="gradient__text">Post Page</h1>
          </div>
          <div className='immi__post-container'>
            {postLoading && <LoadingBox>Loading post...</LoadingBox>}
            {(postError ) && <MessageBox variant="danger">{postError}</MessageBox>}

            { post !== null ? (
                <div>
                    <div><h2>{post.title}</h2></div>
                    <div className="immi__post-extra">
                      <h3><strong>Category:</strong> {post.category}</h3>
                      <h3><strong>Author: </strong>{post.user_name}</h3>
                    </div>
                    <div><p>{post.post_body}</p></div>
                </div>
            ) : (
                <div>
                    <p>No Post Data Available</p>
                </div>
            )}
          </div>
          <div className='immi__comment-container'>
              <h2 className='gradient__text'>Comments:</h2>
              {commentsLoading && (<LoadingBox><p>Loading...</p></LoadingBox>)}
              {commentsError && (<MessageBox variant="danger"><p>{commentError}</p></MessageBox>)}
              {commentsLoaded ? ( comments.map((comment, index) => (
                <div key={index} className='immi__comment-content'>
                  <h3>{comment.user_name}</h3>
                  <p>{comment.comment_body}</p>
                </div>
              ))
                
              ) : (<p>NO COMMENT!</p>)
              }
          </div>
          {userInfo !== null ? (
            <div>
            {commentLoaded ? (<p>Your comment added succeffully!</p>) :(  
              <form className='immi__form' onSubmit={handleSubmit}>
                  <div className='immi__form-heading'>
                      <h2 className="gradient__text">Add Comment</h2>
                      {commentLoading && (<LoadingBox><p>Loading...</p></LoadingBox>)}
                      {commentError && (<MessageBox variant="danger"><p>{commentError}</p></MessageBox>)}
                  </div>
                  <div className='immi__form-group'>
                      <textarea rows={6} ref={commentRef} name="comment_body" 
                      placeholder="Enter your comment here" />
                  </div>
                  
                  <div className='immi__form-group'>
                      <br />
                      <button type='submit'>{commentLoading ? ("Adding ..."): "Add Comment"}</button>
                  </div>
              </form>
            )
          }
            </div>
          ): (<p>Please <Link to={'/login'}>Login</Link> to add comment.</p>)}
          
        </div>
    </div>
  )
}

export default Post