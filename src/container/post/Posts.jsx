import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './posts.css';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getPosts } from '../../features/actions/PostAction';

function Posts() {

    const {posts, postError, postLoading} = useSelector(state => state.postsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);
    
  return (
    <div className="immi__section section__margin">
        <div>
          <div className="immi__section-heading">
            <h1 className="gradient__text">Most Recent Posts</h1>
          </div>
          <div className='immi__post-container'>
            {postLoading && <LoadingBox>Loading posts...</LoadingBox>}
            {(postError ) && <MessageBox variant="danger">{postError}</MessageBox>}

            { posts !== null ? (
                posts.data.map((post) => (
                <div key={post.title}>
                    <div><h2>{post.title}</h2></div>
                    <div className="immi__post-extra">
                      <h3><strong>Category:</strong> {post.category}</h3>
                      <h3><strong>Author: </strong>{post.name}</h3>
                    </div>
                    <div><p>{post.post_body}</p></div>
                </div>
            ))) : (
                <div>
                    <p>No Posts</p>
                </div>
            )
            }
              <br />
              <button><Link to="/posts/create">Add Post</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Posts