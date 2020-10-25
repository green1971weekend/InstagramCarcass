import React from 'react';
import User from './User';
import InstaService from '../services/instaService';
import '../index.css';

const Users = () => {

    return (
        <div className="right">
            <User src="https://www.washingtonpost.com/resizer/1RhnmRzobv_b5lzu2YIz381sV8s=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4ZLH33AYAAI6TOHGKZYZBQX5BA.jpg" 
                    alt="Egg"
                    name="Cool Egg" />
            <div className="users__block">
                <User src="https://www.washingtonpost.com/resizer/1RhnmRzobv_b5lzu2YIz381sV8s=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4ZLH33AYAAI6TOHGKZYZBQX5BA.jpg" alt="aaa" name="cool_egg" min />
                <User src="https://www.loyatic.eu/wp-content/uploads/2017/11/iStock_000020004182Medium1.jpg" alt="ttt" name="abracham_mvp" min />
                <User src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-how-to-make-a-smoothie-horizontal-1542310071.png?crop=0.803xw:0.923xh;0.116xw,0.00510xh&resize=480:*" alt="bbb" name="petrychenko_ivan" min />
                <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="ccc" name="jessy_john" min />
            </div>
        </div>
    )
}

export default Users;
