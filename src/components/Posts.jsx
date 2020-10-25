import React from 'react';
import InstaService from '../services/instaService';
import User from './User';

class Posts extends React.Component {

    InstaService = new InstaService();

    state = {       // Class field release us from using constructor for state launch.
        posts: [],
        error: false
    }
    componentDidMount() {
        this.updatePosts();
    }

    updatePosts() {
        this.InstaService.getAllPosts()
        .then(this.onPostsLoaded)
        .catch(this.onError);
    }

    onPostsLoaded = (posts) => {
        console.log(posts);
        this.setState({
            posts,      // short object notation instead of {posts: posts}
            error: false
        });
    }

    renderPosts = (posts) => {
        return posts.map(post => {
            const {name, altname, photo, src, alt, descr, id} = post;   // Destructuring

            return (
                <div key={id} className="post">
                    <User src={photo} alt={altname} name={name} min/>
                    <img src={src} alt={alt}/>
                    <div className="post__name">{name}</div>
                    <div className="post__description">{descr}</div>
                </div>
            );
        })
    }

    onError = (error) => {
        console.log(error);
        this.setState({
            error: true
        });
    }

    render() {
        const {posts, error} = this.state;

        const renderedPosts = this.renderPosts(posts);
        return (
            <div className="left">{renderedPosts}</div>
        );
    }
}


export default Posts;