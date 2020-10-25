import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User src="https://www.washingtonpost.com/resizer/1RhnmRzobv_b5lzu2YIz381sV8s=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4ZLH33AYAAI6TOHGKZYZBQX5BA.jpg" 
                    alt="James" 
                    name="James"/>
            <Palette/>
        </div>
    );
}


export default Profile;