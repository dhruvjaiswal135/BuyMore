import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({route, children}) => {
    const {role } = useSelector(state =>state.auth) // role, userInfo
    if (role) {
        if (role === route.role) { //role !! userInfo.role
            return <Suspense fallback={null}>{children}</Suspense>
        } else {
            return <Navigate to='/unauthorized' replace/>
        }
    }else{
        return <Navigate to='/login' replace/>
    }


    
};

export default ProtectedRoute;