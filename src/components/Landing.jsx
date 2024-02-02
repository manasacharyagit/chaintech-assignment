

import React from 'react'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
<>
<p class="h1 m-4">Login with your credentials to see your details</p>
<div>
    <Link to='/login'>
    <button type="button" class="btn btn-primary">Login</button>    </Link>
    <p className='m-4'>ChainTech Network assignment by Mantra Manas Acharya</p>
</div>
</> 
)
}

export default Landing