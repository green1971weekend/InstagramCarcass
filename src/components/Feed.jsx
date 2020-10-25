import React from 'react';
import logo from '../logo.svg';
import Posts from './Posts';
import Users from './Users';


const Feed = () => {

    return (
        <div className="container feed">
            <Posts />
            <Users />
        </div>
    );
}


export default Feed;