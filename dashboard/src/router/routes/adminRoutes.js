import { lazy } from "react";
import Orders from "../../views/admin/Orders";
import Category from "../../views/admin/Category";
import Sellers from "../../views/admin/Sellers";
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
    },
    {
        path: 'admin/dashboard/sellers',
        element : <Sellers/>,
        role : 'admin'
    }
] 