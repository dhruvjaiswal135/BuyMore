import { lazy } from "react";
import Orders from "../../views/admin/Orders";
import Category from "../../views/admin/Category";
const AdminDashboard = lazy(()=> import('../../views/admin/adminDashboard'))   

export const adminRoutes = [
    {
        path: 'admin/dashboard',
        element : <AdminDashboard/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/orders',
        element : <Orders/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/category',
        element : <Category/>,
        role : 'admin'
    }
] 