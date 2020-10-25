export default class InstaService {
    constructor() {
        this._apiBase = "http://localhost:3000";
    }

    getResource = async (url) => {   // Class field
        const response = await fetch(`${this._apiBase}${url}`);  

        if(!response.ok) {
            throw new Error(`Couldn't fetch ${url}; Result received: ${response.status}`);
        }

        return await response.json();
    }

    getAllPosts = async () => {
        return await this.getResource("/posts");
    }

    getAllPhotos = async () => {
        const response = await this.getResource("/posts");
        return response.map(this._transformPosts);
    }

    // Example of transforming an object in case for a large amount of data props.
    _transformPosts = (post) => {
        return {
            src: post.src,
            alt: post.alt
        }
    }
}

