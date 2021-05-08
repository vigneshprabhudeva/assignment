import axios from 'axios';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom';
const AsiUserProfile = () => {
   
    const [details, setDetails] = useState({});
    const decoded = jwt_decode(localStorage.getItem('usetoken2'));
    console.log(decoded.user)


  

    const logout = () => {
        localStorage.removeItem('usetoken2');
        
    }
    return(
        <div>
            <p> user id : {decoded.user.id}</p>
            <p> user email: {decoded.user.email}</p>
            <button onClick={logout}>logout</button>
        </div>
    )
}
export default AsiUserProfile;