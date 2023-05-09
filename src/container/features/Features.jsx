import React, { useEffect } from 'react';
import './features.css';
import Feature from '../../components/feature/Feature';
import { useDispatch, useSelector } from 'react-redux';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { getArticles } from '../../features/actions/ArticleAction';
import { Link } from 'react-router-dom';

function Features() {

  const { articles, articleError, articleLoading } = useSelector(state => state.articles);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getArticles()); 
    }, [dispatch]);
  return (
    <div className="immi__features section__padding" id="features">
      <div className="immi__features-heading">
        <h1 className="gradient__text">Most Recent Topics and Articles</h1>
        <p><Link to='http://localhost:3000/posts'>See All Posts</Link></p>
        {articleLoading && (<LoadingBox>Loading Posts...</LoadingBox>)}
        {articleError && (<MessageBox variant="danger">Error Loading posts...</MessageBox>)}
      </div>
      <div className="immi__features-container">
        { articles !== null ? (
          articles.data.map((post, index) => (
            <Feature key={index}
              id={post.id}
              title={post.title}
              text={post.post_body} />
          ))) : (
            <p>No post available!</p>
          )
        }
      </div>
    </div>
  )
}

export default Features