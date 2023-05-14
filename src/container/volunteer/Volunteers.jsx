import React, { useEffect } from 'react';
import './volunteer.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import defaulProfile from '../../assets/user-profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/actions/UserAction';
import LoadingBox from '../../components/LoadingBox';
import MessageBox from '../../components/MessageBox';
import { Link } from 'react-router-dom';


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Volunteers() {
  
  const { users, usersLoading, usersError }  = useSelector(state => state.usersData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  return (
    <div className='section__margin'>
        {usersLoading && (<LoadingBox>Loading volunteers ...</LoadingBox>)}
        {usersError && (<MessageBox variant="danger">Something went wrong loading volunteers list, sorry for incovinance.</MessageBox>)}
        <Carousel responsive={responsive}>
          {users !== null ? (
            users.data.map((user) => (
              <div key={user.id} className='immi__carousel-item'>
                <Link to={`/volunteer/${user.id}`}><h2>{user.name}</h2></Link>
                <h3>{user.support_type}</h3>
                <img src={user.image || defaulProfile} alt="user porofile" />
              </div>
            ))
          ) : (
            <div className='immi__carousel-item'>
                <h3>No Volunteer currently available!</h3>
            </div>
          )
        }
        </Carousel>
    </div>
  )
}

export default Volunteers