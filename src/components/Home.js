import React, { useContext } from 'react';

import ViewUsers from "./ViewUsers";
import UserData from "./UserData";
import Todo from "./Todo";
import { MyTasks } from "./MyTasks";
import { Link } from 'react-router-dom';
import { PageContext } from '../PageContext';
import Profile from './Profile';

const Home = () => {
  const context = useContext(PageContext);
  console.log(context);

  return(
    <div>
      <h1>Home Page</h1>
      <Link to='/about'>Goto About Page</Link>
      <div className='row'>
        <div className='col-md-8'>
          <Profile></Profile>
        </div>
        <div className='col-md-8'>
          <UserData></UserData>
        </div>
        <div className='col-md-12'>
          <Todo></Todo>
        </div>
        <div className='col-md-12'>
          <ViewUsers></ViewUsers>
        </div>
        <div className='col-md-12'>
          <MyTasks></MyTasks>
        </div>
      </div>
      <hr />
      <h2>useContext() | Example </h2>
      <p>Context is: {context.lastLogin}</p>
    </div>
  )
}

export default Home;