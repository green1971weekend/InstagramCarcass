import React from 'react';
import InstaService from '../services/instaService';
import Error from './Error';


class Palette extends React.Component {
    InstaService = new InstaService();
    state = {
        error: false,
        photos: []
    };

    componentDidMount() {
        this.updatePhotos();
    }

    updatePhotos() {
        this.InstaService.getAllPhotos()
        .then(this.onPhotosLoaded)
        .catch(this.onError);
    }

    onError = () => {
        this.setState({
            error: true
        });
    }

    onPhotosLoaded = (photos) => {
        this.setState({
            error: false,
            photos
        });
    }
 }

export default Palette;