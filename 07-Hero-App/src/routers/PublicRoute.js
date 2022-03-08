import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';



export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);

    
    return user.logged
        ? <Navigate to="/marvel" />
        : children
}

// import React from 'react';
// import PropTypes from 'prop-types';

// import { Route} from 'react-router-dom';
// import { MarvelScreen } from '../components/marvel/MarvelScreen';


// export const PublicRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {

//     return (
//         <Route { ...rest }
//             component={ (props) => (
//                 ( !isAuthenticated )
//                     ? ( <Component { ...props } /> )
//                     : ( <Route path="/" element={<MarvelScreen />} />)
//             )}
        
//         />
//     )
// }

// PublicRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }


// /* <Redirect to="/" /> */