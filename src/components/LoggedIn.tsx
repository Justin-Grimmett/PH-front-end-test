import {useLocation} from 'react-router-dom';

// Page to show after Login

const LoggedIn = () => {

    // This is to retrieve the data passed in (amongst other things) - eg the User Name
    const cLocation = useLocation();
    let userName:string = cLocation.state.values.userName;

    return (
        <div>
            <h4>You are now Logged In</h4>
            <br/><br/><br/>
            {/* Display username entered dynamically */}
            <div>UserName : <b>{userName}</b></div>
            <br/><br/><br/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque itaque perferendis libero accusamus reiciendis similique veniam ad placeat nobis rerum sequi, nam eum, ducimus nesciunt voluptas doloribus quasi. Dolores, harum!</p>
        </div>
    )
}

export default LoggedIn
