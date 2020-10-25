import React from 'react';
import '../index.css';
import Post from './Post';

class Posts extends React.Component {

    render() {
        return (
            <div className="left">
                <Post src="" alt="inst" />
                <Post src="" alt="inst" />
            </div>
        );
    }
}


export default Posts;