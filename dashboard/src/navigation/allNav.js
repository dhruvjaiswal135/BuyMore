import { RxDashboard } from "react-icons/rx";
import { RiShoppingCartLine } from "react-icons/ri";
import { BiCategoryAlt,BiSupport } from "react-icons/bi";
import { PiUsersThreeBold } from "react-icons/pi";
import { MdPayment } from "react-icons/md";
import { FaUsersSlash } from "react-icons/fa";
import { RiUserReceivedLine } from "react-icons/ri";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineDiscount,MdOutlineSettings } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineMarkUnreadChatAlt } from "react-icons/md";

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <RxDashboard />,
        role : 'admin',
        path: '/admin/dashboard',
    },
    {
        id: 2,
        title: 'Orders',
        icon: <RiShoppingCartLine />,
        role : 'admin',
        path: '/admin/dashboard/orders',
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategoryAlt/>,
        role : 'admin',
        path: '/admin/dashboard/category',
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <PiUsersThreeBold/>,
        role : 'admin',
        path: '/admin/dashboard/sellers',
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <MdPayment/>,
        role : 'admin',
        path: '/admin/dashboard/payment-request',
    },
    {
        id: 6,
        title: 'Deactive Sellers',
        icon: <FaUsersSlash/>,
        role : 'admin',
        path: '/admin/dashboard/deactive-sellers',
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <RiUserReceivedLine/>,
        role : 'admin',
        path: '/admin/dashboard/seller-request',
    },
    {
        id: 8,
        title: 'Live Chat',
        icon: <MdOutlineMarkUnreadChatAlt/>,
        role : 'admin',
        path: '/admin/dashboard/chat-sellers',
    },
    {
        id: 9,
        title: 'Settings',
        icon: <MdOutlineSettings/>,
        role : 'admin',
        path: '/admin/dashboard/settings',
    },
    {
        id: 10,
        title: 'Dashboard',
        icon: <RxDashboard/>,
        role : 'seller',
        path: '/seller/dashboard',
    },
    {
        id: 11,
        title: 'Add Product',
        icon: <MdAddShoppingCart/>,
        role : 'seller',
        path: '/seller/dashboard/add-product',
    },
    {
        id: 12,
        title: 'All Product',
        icon: <BsCartCheck/>,
        role : 'seller',
        path: '/seller/dashboard/products',
    },
    {
        id: 13,
        title: 'Discount Product',
        icon: <MdOutlineDiscount/>,
        role : 'seller',
        path: '/seller/dashboard/discount-product',
    },
    {
        id: 14,
        title: 'Orders',
        icon: <FiShoppingBag/>,
        role : 'seller',
        path: '/seller/dashboard/orders',
    },
    {
        id: 15,
        title: 'Payments',
        icon: <MdPayment/>,
        role : 'seller',
        path: '/seller/dashboard/payments',
    },
    {
        id: 16,
        title: 'Chat Customer',
        icon: <MdOutlineMarkUnreadChatAlt/>,
        role : 'seller',
        path: '/seller/dashboard/chat-customer',
    },
    {
        id: 17,
        title: 'Chat Support',
        icon: <BiSupport/>,
        role : 'seller',
        path: '/seller/dashboard/chat-support',
    },
    {
        id: 18,
        title: 'Setting',
        icon: <MdOutlineSettings/>,
        role : 'seller',
        path: '/seller/dashboard/setting',
    },


]