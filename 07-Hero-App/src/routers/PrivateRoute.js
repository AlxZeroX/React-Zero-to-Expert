import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';



export const PrivateRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    const { pathname, search } = useLocation();
    
    localStorage.setItem('lastPath', pathname + search );
    
    return user.logged
        ? children
        : <Navigate to="/login" />
}


// import React from 'react';
// import PropTypes from 'prop-types';

// import { Navigate, Route } from 'react-router-dom';
// // import { LoginScreen } from '../components/login/LoginScreen';


// export const PrivateRoute = ({
//     isAuthenticated,
//     component: Component,
//     ...rest
// }) => {
    
//     localStorage.setItem('lastPath', rest.location.pathname);

//     return (
//         <Route { ...rest }
//             component={ (props) => (
//                 ( isAuthenticated )
//                     ? ( <Component { ...props } /> )
//                     : ( <Navigate to="/login" /> )
//             )}
        
//         />
//     )
// }

// PrivateRoute.propTypes = {
//     isAuthenticated: PropTypes.bool.isRequired,
//     component: PropTypes.func.isRequired
// }

// // <Redirect to="/login" />
// /* <Route path="/login" element={<LoginScreen />} /> */