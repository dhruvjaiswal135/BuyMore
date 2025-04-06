import { lazy } from 'react';
const Login = lazy(()=> import ( '../../views/auth/Login'))
const AdminLogin = lazy(()=> import ( '../../views/auth/AdminLogin'))
const Register = lazy(()=> import ( '../../views/auth/Register'))
import Home from '../../views/pages/Home';
import UnAuthorized from '../../views/UnAuthorized';

const publicRoutes = [
    {
        path: '/',  // route path relative to the domain name.
        element: <Home/>, // this is the component that will be rendered when the user visits this route.
       },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/register',
        element : <Register/>
    },
    {
        path : '/admin/login',
        element : <AdminLogin/>
    },
    {
        path : '/unauthorized',
        element : <UnAuthorized/>
    }
]
export default publicRoutes;