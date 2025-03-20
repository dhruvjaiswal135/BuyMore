import { lazy } from "react";
import Orders from "../../views/admin/Orders";
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
    }
] 