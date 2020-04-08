import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { PageContext } from '../../PageContext';
import Company from './Company/Company';

const About = () => {
  const context = useContext(PageContext);
  console.log(context);
  
  return(
    <div>
      <h1>About</h1>
      <Link to='/'>Goto Home Page</Link>
      <p>Context is: {context.lastLogin}</p>

      <Company name='Google'></Company>
    </div>
    
  )
}

export const add = (a, b) =>{
  return a +b;
}

export default About;
