import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import './posts.css';
import '../../App.css';
import { getCategories } from '../../features/actions/CategoryAction';
import { Link, useNavigate } from 'react-router-dom';
import { createPost } from '../../features/actions/PostAction';

function CreatePost() {

    const {categories, categoryLoaded, categoryLoading, categoyError} = useSelector(state => state.categoriesData);
    const { userInfo } = useSelector(state => state.auth);
    const {newPost, postLoading, postError, postCreated} = useSelector(state => state.postsData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const title = useRef('');
    const body = useRef('');
    const [category, setCategory] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(category === 0) {
            alert("Please select a category!");
        } else {
             const payload = {
            title: title.current.value,
            post_body: body.current.value,
            category_id: parseInt(category),
            user_id: userInfo.user.id
             }
             dispatch(createPost(payload));
             //console.log(payload)
        }
       
    }

    const refreshPage = (e) => {
        e.preventDefault();
        window.location.reload(false);
    }
    
    useEffect(() => {
        if(!userInfo) {
            navigate('/login');
        }
        dispatch(getCategories());
        
    }, [dispatch, userInfo, navigate]);
    return (
        <div className="immi__container section__margin">
            {categoryLoading && (<LoadingBox>Loading categories...</LoadingBox>)}
            {categoyError && (<MessageBox variant="danger">{categoyError}</MessageBox>)}
            {postLoading && (<LoadingBox>creating post...</LoadingBox>)}
            {postError && (<MessageBox variant="danger">{postError}</MessageBox>)}
            {postCreated ? (
                <div className='immi__form-group'>
                <p>Your Post {newPost.title} has been created succeccfully!</p>
                <p><Link to="/posts">Go To Posts</Link>{'  '}</p>
                <p><Link to="/posts/create" onClick={refreshPage}>Create New Post</Link></p>
                </div>
            ) :(
                <form className='immi__form' onSubmit={handleSubmit}>
                <div className='immi__form-heading'>
                    <h1 className="gradient__text">Add New Post</h1>
                </div>
                {
                    categoryLoaded && (
                    <div className='immi__form-group'>
                            
                            <select name="category" onChange={(e) => setCategory(e.target.value)} value={category}
                                >
                                <option value={0}>Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                ))}
                            </select>
                    </div>
                    )
                }
                <div className='immi__form-group'>
                    <label htmlFor="title">Post Title:</label>
                    <input type="text" ref={title} name="title" placeholder='Enter post title' />
                </div>
                <div className='immi__form-group'>
                    <label htmlFor="bost_body">Post:</label>
                    <textarea rows={6} ref={body} name="post_body" placeholder="Enter your post content here" />
                </div>
                
                <div className='immi__form-group'>
                    <br />
                    <button type='submit'>{postLoading ? ("Adding ..."): "Add Post"}</button>
                </div>
            </form>
            )
        }
        </div>
    )
}

export default CreatePost