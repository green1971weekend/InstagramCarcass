import React from 'react';
import '../index.css';
import User from './User'

class Post extends React.Component {
    render() {
        return (
            <div className="post">
                <User src="" alt="" name="" min/>
                <img src={this.props.src} alt={this.props.alt}/>
                <div className="post__name">

                </div>
                <div className="post__description">

                </div>
            </div>
        );
    }
}


export default Post;