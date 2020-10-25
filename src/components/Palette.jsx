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

    renderPhotos = (photos) => {
        return photos.map((photo) => {
            const {src, alt} = photo;

            return (
                <img src={src} alt={alt}></img>
            )
        });
    }

    render() {
        const {error, photos} = this.state;

        if(error) {
            return <Error/>;
        }

        const renderedPhotos = this.renderPhotos(photos);

        return(
            <div className="palette">
                {renderedPhotos}
            </div>
        );
    }
 }

export default Palette;