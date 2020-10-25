import React from 'react';
import User from './User';
import '../index.css';

const Users = () => {
    return (
        <div className="right">
            <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="" name="" />
            <div className="users__block">
                <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="aaa" name="aaa" min />
                <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="ttt" name="ttt" min />
                <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="bbb" name="bbb" min />
                <User src="https://ksassets.timeincuk.net/wp/uploads/sites/46/2017/03/Priti-Patel-re-sized.jpg" alt="ccc" name="ccc" min />
            </div>
        </div>
    )
}

export default Users;
