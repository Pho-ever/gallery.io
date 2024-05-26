import React, { FC } from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children : React.ReactElement
}
const PrivateRoute: FC<PrivateRouteProps> = ({children}) => {

    const { user } = useAuth();
    // const user = "John Doe"
    console.log(user)

    if (!user) {
        return <Navigate to="/login" replace={true}/>
    }

    return children
}

export default PrivateRoute
