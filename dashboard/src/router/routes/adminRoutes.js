import { lazy } from "react";
import Orders from "../../views/admin/Orders";
import Category from "../../views/admin/Category";
import Sellers from "../../views/admin/Sellers";
import PaymentRequest from "../../views/admin/PaymentRequest";
import DeactiveSeller from "../../views/admin/DeactiveSeller";
const AdminDashboard = lazy(()=> import('../../views/admin/adminDashboard'))   
import SellerRequest from '../../views/admin/SellerRequest';
import SellerDetails from '../../views/admin/SellerDetails';
import ChatSeller from "../../views/admin/ChatSeller";

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
    },
    {
        path: 'admin/dashboard/payment-request',
        element : <PaymentRequest/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/deactive-sellers',
        element : <DeactiveSeller/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/seller-request',
        element : <SellerRequest/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/seller/details/:sellerId',
        element : <SellerDetails/>,
        role : 'admin'
    },
    {
        path: 'admin/dashboard/chat-sellers',
        element : <ChatSeller/>,
        role : 'admin'
    },
]