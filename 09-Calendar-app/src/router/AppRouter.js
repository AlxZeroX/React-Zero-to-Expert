import React, { useEffect } from 'react'
import { BarLoader } from 'react-spinner-animated';

import { useDispatch, useSelector } from 'react-redux';
import { Route,  BrowserRouter as Router, Routes } from 'react-router-dom';
import { startChecking } from '../actions/auth';
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
 
export const AppRouter = () => {
 
  const dispatch = useDispatch();
  const { checking, uid } = useSelector(state => state.auth)
 
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch])
 
  if( checking ){
    return ( <BarLoader text="Loading..." gColor={"#343A40"} center={false}/>  )
  }
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path='/login' element={ 
              <PublicRoute uid={ !!uid } >
                <LoginScreen/> 
              </PublicRoute>
            } 
          />
          <Route exact path='/*' 
            element={ 
              <PrivateRoute uid={ !!uid }>
                <CalendarScreen />
              </PrivateRoute> 
            }  
          />
          
        </Routes>
      </div>
    </Router>
  )
} 